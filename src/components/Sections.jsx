import { about, experience, projects, skills, strengths, education, profile, suggestions } from '../data/content.js'
import { External } from './Icons.jsx'

const Stagger = ({ children, i }) => (
  <div className="block" style={{ animationDelay: `${i * 90}ms` }}>{children}</div>
)

const About = () => (
  <>
    {about.body.map((p, i) => (
      <Stagger key={i} i={i}><p className="prose">{p}</p></Stagger>
    ))}
    <Stagger i={about.body.length}>
      <p className="prose muted">Currently at Emergent, previously Venwiz and MTX Group. Based in {profile.location}.</p>
    </Stagger>
  </>
)

const Experience = () => (
  <div className="timeline">
    {experience.map((job, i) => (
      <Stagger key={i} i={i}>
        <div className="job">
          <div className="job-marker" />
          <div className="job-body">
            <div className="job-head">
              <span className="job-role">{job.role}</span>
              <span className="job-company">{job.company}</span>
              <span className="job-dates">{job.dates} · {job.location}</span>
            </div>
            <ul className="job-bullets">
              {job.bullets.map((b, j) => <li key={j}>{b}</li>)}
            </ul>
          </div>
        </div>
      </Stagger>
    ))}
  </div>
)

const Projects = () => (
  <div className="cards">
    {projects.map((p, i) => (
      <Stagger key={i} i={i}>
        <div className="card">
          <div className="card-head">
            <span className="card-title">{p.title}</span>
            <span className="card-links">
              {p.link && <a href={p.link} target="_blank" rel="noreferrer">live <External /></a>}
              {p.github && <a href={p.github} target="_blank" rel="noreferrer">code <External /></a>}
            </span>
          </div>
          <p className="card-desc">{p.description}</p>
          <div className="tags">{p.tags.map((t) => <span key={t} className="tag">{t}</span>)}</div>
        </div>
      </Stagger>
    ))}
  </div>
)

const Skills = () => (
  <>
    {skills.map((g, i) => (
      <Stagger key={g.group} i={i}>
        <div className="skill-row">
          <span className="skill-group">{g.group}</span>
          <span className="tags">{g.items.map((t) => <span key={t} className="tag">{t}</span>)}</span>
        </div>
      </Stagger>
    ))}
    <Stagger i={skills.length}>
      <p className="prose muted small">Also: {strengths.join(' · ').toLowerCase()}.</p>
    </Stagger>
  </>
)

const Education = () => (
  <div className="cards">
    {education.map((e, i) => (
      <Stagger key={i} i={i}>
        <div className="edu">
          <span className="job-role">{e.degree}</span>
          <span className="job-dates">{e.place} · {e.dates}</span>
        </div>
      </Stagger>
    ))}
  </div>
)

const Contact = () => (
  <Stagger i={0}>
    <div className="contact-row">
      <a className="contact-btn primary" href={`mailto:${profile.email}`}>Email</a>
      <a className="contact-btn" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
      <a className="contact-btn" href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
    </div>
    <p className="prose muted small" style={{ marginTop: 12 }}>{profile.email} — she replies within a day.</p>
  </Stagger>
)

const Fallback = ({ onPick, mode }) => (
  <Stagger i={0}>
    <div className="chip-row" style={{ marginTop: 4 }}>
      {suggestions.map((s) => (
        <button key={s.key} className="chip" onClick={() => onPick(s)}>{mode === 'terminal' ? s.key : s.label}</button>
      ))}
    </div>
  </Stagger>
)

export default function Section({ sectionKey, onPick, mode }) {
  switch (sectionKey) {
    case 'about': return <About />
    case 'experience': return <Experience />
    case 'projects': return <Projects />
    case 'skills': return <Skills />
    case 'education': return <Education />
    case 'contact': return <Contact />
    default: return <Fallback onPick={onPick} mode={mode} />
  }
}
