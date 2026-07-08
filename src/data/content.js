// All portfolio content lives here — edit this file, nothing else.

export const profile = {
  name: 'Kavleen Sabharwal',
  shortName: 'Kavleen',
  title: 'Senior AI Backend Engineer',
  location: 'Bengaluru, India',
  email: 'kavleen.sabharwal.connect@gmail.com',
  github: 'https://github.com/kavleeeen',
  linkedin: 'https://www.linkedin.com/in/kavleen-s-954a60168',
}

export const about = {
  intro: `Hi! I'm Kavleen. I live in Bengaluru, India, where I build the future with AI.`,
  body: [
    `I'm an AI backend engineer who thrives on undefined problems — from fixing broken workflows to architecting scalable AI tools that cut hours into minutes.`,
    `These days I build Wingman, Emergent's autonomous AI assistant: agent orchestration, long-term memory, multi-channel messaging, and the mobile build platform behind 1,000+ app releases a day.`,
  ],
}

export const experience = [
  {
    role: 'Backend Engineer',
    company: 'Emergent',
    dates: 'Dec 2025 — Present',
    location: 'Bengaluru',
    bullets: [
      'Led backend development for Wingman, Emergent’s autonomous AI assistant — MCP tool calling, long-term memory, context management, Temporal scheduled workflows, and guardrails across a Python/Go/TypeScript microservices stack on GCP.',
      'Built the multi-channel messaging layer connecting agents to users over WhatsApp, iMessage, Telegram, Slack, and email — media pipelines, 24-hour re-engagement, channel pooling with velocity-based load balancing, circuit breakers, and zero-loss migration of live users off carrier-flagged lines.',
      'Built an autonomous AI support agent on Intercom live chat resolving ~75% of customer support requests without human intervention.',
      'Designed and shipped Agentic Nudges end-to-end across five services — behavioral signal detection, Temporal decision workflows, PostHog-driven context, and staged dev → canary → prod rollout.',
      'Built Emergent’s native mobile build platform from scratch — automated Android and iOS releases via Cloud Build + Expo/EAS, scaled to 1,000+ Android and 200+ iOS builds/day at 90%+ success.',
    ],
  },
  {
    role: 'Tech Lead',
    company: 'Venwiz',
    dates: 'Dec 2022 — Dec 2025',
    location: 'Bengaluru',
    bullets: [
      'Built a multi-agent procurement assistant (Hugging Face SmolAgents) for conversational access to enterprise procurement data.',
      'Engineered an AI-assisted pipeline turning unstructured vendor quotations into structured data — bid comparison cut from 8 hours to under 2 minutes.',
      'Developed RFQ classification and scope-of-work prediction models, improving vendor selection efficiency by 30%.',
      'Led platform security initiatives across frontend, backend, and infra — Astra Security A+ certification.',
      'Architected real-time milestone tracking for 100+ consignments with automated delay detection; built email-native forms and intelligent scheduling, cutting manual vendor follow-ups by 60%.',
    ],
  },
  {
    role: 'Software Development Engineer',
    company: 'Maverick Quantum (MTX Group)',
    dates: 'Jun 2022 — Dec 2022',
    location: 'Hyderabad',
    bullets: [
      'Led architecture and development of an enterprise grant management portal, reducing manual approval effort by 50%.',
      'Designed a configurable form builder adopted across 10+ departments for dynamic intake workflows.',
      'Engineered an Angular–Salesforce integration with document scanning, reducing application review time by 40%.',
    ],
  },
  {
    role: 'Full Stack Developer',
    company: 'MTX Group Inc.',
    dates: 'Aug 2020 — May 2022',
    location: 'Hyderabad',
    bullets: [
      'Led development of a GCP-based health data platform (Angular/Node.js) processing 4M+ records with Kubernetes, BigQuery, and Pub/Sub.',
      'Standardized engineering practices and mentored 5+ engineers, reducing onboarding from weeks to days.',
    ],
  },
  {
    role: 'Consultant Trainee',
    company: 'MTX Group Inc.',
    dates: 'Jan 2020 — Aug 2020',
    location: 'Hyderabad',
    bullets: [
      'Salesforce & full-stack development.',
    ],
  },
]

export const projects = [
  {
    title: 'Collaborative Design Editor',
    description: 'Real-time collaborative design editor for teams to co-create visually.',
    tags: ['React', 'WebSockets', 'Node.js'],
    link: 'https://editor.kavleen.in',
    github: 'https://github.com/kavleeeen/editor',
  },
  {
    title: 'Food Recommendation Bot',
    description: 'AI chatbot that suggests personalized daily meals and recipes using Firebase, Firestore, and the Gemini API.',
    tags: ['Gemini', 'Firebase', 'Firestore'],
    github: 'https://github.com/kavleeeen/food-bot-backend',
  },
  {
    title: 'Resume Parser RAG',
    description: 'AI-powered resume parser with Retrieval-Augmented Generation for intelligent document analysis and extraction.',
    tags: ['RAG', 'LLMs', 'Python'],
  },
  {
    title: 'Football Role Recommender',
    description: 'B.Tech thesis — ML model recommending football roles from player strengths and historical data, ~85% match accuracy in test scenarios.',
    tags: ['ML', 'Python'],
  },
]

export const skills = [
  { group: 'AI & automation', items: ['LLMs', 'Agentic AI', 'AI orchestration', 'Tool calling (MCP)', 'Memory management', 'Evals'] },
  { group: 'Distributed systems', items: ['Kubernetes', 'GCP', 'AWS', 'Temporal', 'Python', 'Go', 'Node.js'] },
  { group: 'Making data usable', items: ['PostgreSQL', 'MongoDB', 'Redis', 'BigQuery', 'Firestore'] },
  { group: 'Bringing ideas to life fast', items: ['React', 'Angular', 'TypeScript'] },
]

export const strengths = [
  'Mentorship, cross-team communication, rapid prototyping',
  'Turning chaotic data into clean, user-focused tools',
  'Rapidly learning new stacks and adapting across domains',
]

export const education = [
  { degree: 'B.Tech, Manipal University', place: 'Jaipur', dates: 'Jul 2016 — Dec 2020' },
  { degree: 'ISC, Our Lady Queen of the Missions School — 91.8%', place: 'Kolkata', dates: '2014 — 2016' },
  { degree: 'ICSE, Our Lady Queen of the Missions School — 90.2%', place: 'Kolkata', dates: '2004 — 2014' },
]

// Chat routing: which typed keywords map to which section.
export const routes = [
  { key: 'experience', keywords: ['experience', 'work', 'career', 'job', 'employ', 'venwiz', 'emergent', 'mtx', 'company', 'resume', 'cv', 'wingman'] },
  { key: 'projects', keywords: ['project', 'built', 'build', 'side', 'editor', 'bot', 'open source', 'github'] },
  { key: 'skills', keywords: ['skill', 'stack', 'tech', 'tool', 'language', 'framework', 'good at'] },
  { key: 'education', keywords: ['education', 'school', 'college', 'university', 'degree', 'study', 'manipal', 'thesis'] },
  { key: 'contact', keywords: ['contact', 'email', 'reach', 'hire', 'linkedin', 'connect', 'touch', 'talk'] },
  { key: 'about', keywords: ['about', 'who', 'yourself', 'intro', 'bio', 'kavleen'] },
]

export const suggestions = [
  { key: 'about', label: 'Who is Kavleen?', prompt: 'Who is Kavleen?' },
  { key: 'experience', label: 'Show me her experience', prompt: 'Show me her experience' },
  { key: 'projects', label: 'What has she built?', prompt: 'What has she built?' },
  { key: 'skills', label: 'What’s her stack?', prompt: 'What’s her stack?' },
  { key: 'contact', label: 'How do I reach her?', prompt: 'How do I reach her?' },
]

export const intros = {
  about: 'Great question. Here’s the short version:',
  experience: 'Here’s her track record — six years of shipping things that matter:',
  projects: 'She builds things for fun too. A few favorites:',
  skills: 'Her toolkit, organized by what it’s for:',
  education: 'The academic bit:',
  contact: 'She’d love to hear from you. Pick a channel:',
  fallback: 'I’m a very small language model — I only know about Kavleen. Try one of these:',
}
