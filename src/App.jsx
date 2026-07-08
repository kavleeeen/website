import { useEffect, useRef, useState } from 'react'
import { profile, routes, suggestions, intros } from './data/content.js'
import Section from './components/Sections.jsx'
import { Starburst, ArrowUp, Sun, Moon, TerminalIcon } from './components/Icons.jsx'

const aliases = { help: 'fallback', whoami: 'about', ls: 'projects', 'sudo hire kavleen': 'contact' }

const matchRoute = (text) => {
  const t = text.trim().toLowerCase()
  if (aliases[t]) return aliases[t]
  if (routes.some((r) => r.key === t)) return t
  for (const r of routes) if (r.keywords.some((k) => t.includes(k))) return r.key
  return 'fallback'
}

// Typewriter for the one-line intro of each answer; blocks reveal after.
const useTypewriter = (text, onDone) => {
  const [shown, setShown] = useState('')
  const doneRef = useRef(false)
  useEffect(() => {
    let i = 0
    const id = setInterval(() => {
      i += 2
      setShown(text.slice(0, i))
      if (i >= text.length) {
        clearInterval(id)
        if (!doneRef.current) { doneRef.current = true; onDone?.() }
      }
    }, 18)
    return () => clearInterval(id)
  }, [text])
  return shown
}

const AssistantMessage = ({ sectionKey, onPick, onGrow, mode }) => {
  const [blocksReady, setBlocksReady] = useState(false)
  const intro = intros[sectionKey] ?? intros.fallback
  const shown = useTypewriter(intro, () => setBlocksReady(true))
  useEffect(() => { onGrow?.() }, [shown, blocksReady])
  return (
    <div className="msg assistant">
      <div className="avatar"><Starburst size={15} /></div>
      <div className="msg-content">
        <p className="prose intro">
          {shown}
          {!blocksReady && <span className="cursor">▍</span>}
        </p>
        {blocksReady && <Section sectionKey={sectionKey} onPick={onPick} mode={mode} />}
      </div>
    </div>
  )
}

const Thinking = ({ mode }) => (
  <div className="msg assistant">
    <div className="avatar thinking-avatar"><Starburst size={15} /></div>
    <div className="msg-content"><span className="thinking">{mode === 'terminal' ? 'running…' : 'Thinking…'}</span></div>
  </div>
)

const TerminalGreeting = ({ onPick }) => (
  <div className="tgreet">
    <p className="tline"><span className="tprompt">kavleen@portfolio</span><span className="muted">:~$</span> ./init.sh</p>
    <p className="tline">{profile.name} — {profile.title} · {profile.location}</p>
    <p className="tline muted">This portfolio answers questions. Type one, or run a command:</p>
    <div className="chip-row">
      {suggestions.map((s) => (
        <button key={s.key} className="chip" onClick={() => onPick(s)}>{s.key}</button>
      ))}
    </div>
    <p className="tline muted small">hint: whoami · ls · help · clear</p>
  </div>
)

export default function App() {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [thinking, setThinking] = useState(false)
  const [theme, setTheme] = useState(() =>
    localStorage.getItem('theme') ??
    (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'))
  const [mode, setMode] = useState(() => localStorage.getItem('mode') ?? 'claude')
  const endRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    document.documentElement.dataset.mode = mode
    localStorage.setItem('mode', mode)
  }, [mode])

  const scrollDown = () => { endRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' }) }
  useEffect(() => { scrollDown() }, [messages, thinking])

  const ask = (text, key = matchRoute(text)) => {
    if (!text.trim() || thinking) return
    if (text.trim().toLowerCase() === 'clear') { setMessages([]); setInput(''); return }
    setMessages((m) => [...m, { role: 'user', text }])
    setInput('')
    setThinking(true)
    setTimeout(() => {
      setThinking(false)
      setMessages((m) => [...m, { role: 'assistant', key }])
    }, 500 + Math.random() * 400)
  }

  const pick = (s) => ask(mode === 'terminal' ? s.key : s.prompt, s.key)
  const asked = new Set(messages.filter((m) => m.role === 'assistant').map((m) => m.key))
  const remaining = suggestions.filter((s) => !asked.has(s.key))
  const empty = messages.length === 0

  return (
    <div className="app">
      <header className="header">
        <a className="brand" href="/"><Starburst size={18} className="brand-mark" /><span>{profile.shortName.toLowerCase()}</span></a>
        <nav className="header-nav">
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <button className="icon-btn" aria-label="Toggle terminal mode"
            title={mode === 'terminal' ? 'Back to chat' : 'Terminal mode'}
            onClick={() => setMode(mode === 'terminal' ? 'claude' : 'terminal')}>
            {mode === 'terminal' ? <Starburst size={13} /> : <TerminalIcon />}
          </button>
          {mode !== 'terminal' && (
            <button className="icon-btn" aria-label="Toggle theme"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
              {theme === 'dark' ? <Sun /> : <Moon />}
            </button>
          )}
        </nav>
      </header>

      <main className={`thread ${empty ? 'empty' : ''}`}>
        {empty ? (
          mode === 'terminal' ? <TerminalGreeting onPick={pick} /> :
          <div className="greeting">
            <Starburst size={38} className="greeting-mark" />
            <h1>Hi, I’m {profile.shortName}.</h1>
            <p className="greeting-sub">{profile.title} in {profile.location}. This portfolio answers questions — ask it anything about me.</p>
            <div className="chip-row center">
              {suggestions.map((s) => (
                <button key={s.key} className="chip" onClick={() => pick(s)}>{s.label}</button>
              ))}
            </div>
          </div>
        ) : (
          <div className="messages">
            {messages.map((m, i) =>
              m.role === 'user'
                ? <div key={i} className="msg user"><div className="user-bubble">{m.text}</div></div>
                : <AssistantMessage key={i} sectionKey={m.key} onPick={pick} onGrow={scrollDown} mode={mode} />
            )}
            {thinking && <Thinking mode={mode} />}
            <div ref={endRef} />
          </div>
        )}
      </main>

      <div className="composer-wrap">
        {!empty && remaining.length > 0 && (
          <div className="chip-row center compact">
            {remaining.slice(0, 3).map((s) => (
              <button key={s.key} className="chip small" onClick={() => pick(s)}>{mode === 'terminal' ? s.key : s.label}</button>
            ))}
          </div>
        )}
        <form className="composer" onSubmit={(e) => { e.preventDefault(); ask(input) }}>
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={mode === 'terminal' ? 'type a command or question…' : `Ask anything about ${profile.shortName}…`}
            aria-label="Ask a question"
          />
          <button type="submit" className="send" disabled={!input.trim() || thinking} aria-label="Send">
            <ArrowUp />
          </button>
        </form>
        <p className="disclaimer">Not a real AI — just a resume with good manners. · © {new Date().getFullYear()} {profile.name}</p>
      </div>
    </div>
  )
}
