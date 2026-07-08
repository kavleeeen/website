// All portfolio content lives here — edit this file, nothing else.

export const profile = {
  name: 'Kavleen Sabharwal',
  shortName: 'Kavleen',
  title: 'Full-stack & AI Engineer',
  location: 'Bangalore, India',
  email: 'kavleen.sabharwal.connect@gmail.com',
  github: 'https://github.com/kavleeeen',
  linkedin: 'https://www.linkedin.com/in/kavleen-s-954a60168',
}

export const about = {
  intro: `Hi! I'm Kavleen. I live in Bangalore, India, where I build the future with AI.`,
  body: [
    `I'm a full-stack & AI engineer who thrives on undefined problems — from fixing broken workflows to architecting scalable AI tools that cut hours into minutes.`,
    `I've built AI-powered chatbots, automated complex workflows, and led security initiatives achieving A+ certification. I specialize in transforming manual processes into intelligent automation. Always excited to collaborate on projects that push the boundaries of what's possible with technology.`,
  ],
}

export const experience = [
  {
    role: 'Software Engineer', // TODO(kavleen): confirm title + dates + blurb
    company: 'Emergent',
    dates: '2025 — Present',
    location: 'Bengaluru',
    bullets: [
      'Building Wingman — an always-on personal AI agent — and the platform that powers it.',
    ],
  },
  {
    role: 'Tech Lead',
    company: 'Venwiz',
    dates: 'Mar 2025 — 2025',
    location: 'Bengaluru',
    bullets: [
      'Led AI development, mentored junior engineers.',
      'Built an agentic AI (huggingface-smolagents) pocket expeditor chatbot for casual informational chatting.',
    ],
  },
  {
    role: 'Software Development Engineer',
    company: 'Venwiz',
    dates: 'Dec 2022 — Mar 2025',
    location: 'Bengaluru',
    bullets: [
      'Developed custom parsing logic + AI validation to convert messy Excel vendor quotes into structured data, reducing comparison time from 8 hours to 2 minutes.',
      'Built an RFQ classification and scope-of-work prediction model, accelerating vendor selection by 30%.',
      'Led real-time milestone tracking for 100+ consignments, enabling automated delay flagging.',
      'Hardened the web platform to Astra Security A+ Grade Certification.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Maverick Quantum (MTX Group)',
    dates: 'Jun 2022 — Dec 2022',
    location: 'Hyderabad',
    bullets: [
      'Spearheaded an enterprise grant portal (Angular), reducing manual approvals by 50%.',
      'Developed a Google-Forms-style intake builder adopted across 10+ departments.',
    ],
  },
  {
    role: 'Full Stack Developer',
    company: 'MTX Group Inc.',
    dates: 'Aug 2020 — May 2022',
    location: 'Hyderabad',
    bullets: [
      'Led a GCP-powered Angular/Node health data platform managing 4M+ records using Kubernetes, BigQuery, and Pub/Sub.',
      'Documented best practices and trained 5+ engineers, cutting onboarding from weeks to days.',
    ],
  },
  {
    role: 'Full Stack Intern',
    company: 'ITC Infotech',
    dates: 'Jun 2019 — Jul 2019',
    location: 'Kolkata',
    bullets: [
      'Developed a Library Management System in .NET — inventory, user management, lending workflows.',
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
    description: 'Freelance ML model recommending football roles from player strengths and historical data — ~85% match accuracy in test scenarios.',
    tags: ['ML', 'Python'],
  },
]

export const skills = [
  { group: 'Architecting scalable systems', items: ['Node.js', 'Python', 'GCP', 'AWS', 'Kubernetes'] },
  { group: 'AI & automation', items: ['LLMs', 'Agentic AI', 'OpenAI APIs', 'RAG'] },
  { group: 'Making data usable', items: ['PostgreSQL', 'MongoDB', 'Redis', 'BigQuery', 'Firestore'] },
  { group: 'Bringing ideas to life fast', items: ['React', 'Angular', 'TypeScript'] },
  { group: 'System design', items: ['APIs', 'Real-time pipelines', 'Temporal-style workflows'] },
]

export const strengths = [
  'Mentorship, cross-team communication, rapid prototyping',
  'Turning chaotic data into clean, user-focused tools',
  'Rapidly learning new stacks and adapting across domains',
]

export const education = [
  { degree: 'B.Tech, Manipal University', place: 'Jaipur', dates: '2016 — 2020' },
  { degree: 'ISC, Our Lady Queen of the Missions School', place: 'Kolkata', dates: '2016' },
]

// Chat routing: which typed keywords map to which section.
export const routes = [
  { key: 'experience', keywords: ['experience', 'work', 'career', 'job', 'employ', 'venwiz', 'emergent', 'mtx', 'company', 'resume', 'cv'] },
  { key: 'projects', keywords: ['project', 'built', 'build', 'side', 'editor', 'bot', 'open source', 'github'] },
  { key: 'skills', keywords: ['skill', 'stack', 'tech', 'tool', 'language', 'framework', 'good at'] },
  { key: 'education', keywords: ['education', 'school', 'college', 'university', 'degree', 'study', 'manipal'] },
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
