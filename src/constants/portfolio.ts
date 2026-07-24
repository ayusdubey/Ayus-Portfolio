export const site = {
  name: 'Ayus Dubey',
  title: 'Full Stack Developer | AI Engineer | Machine Learning Enthusiast',
  summary:
    'Computer Science graduate with expertise in Full Stack Development, Machine Learning, and Generative AI. Skilled in developing AI-powered applications, intelligent automation systems, and scalable web solutions using the MERN stack and Python.',
  email: 'ayusdubey.x@gmail.com',
  phone: '+91 7089626593',
  github: 'https://github.com/ayusdubey',
  linkedin: 'https://www.linkedin.com/in/ayus-dubey-18887330a',
  location: 'India',
  resumePath: '/resume/download',
  profileImage: '/profile-placeholder.svg',
  siteUrl: 'https://ayusdubey.vercel.app',
};

export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
] as const;

export const heroTitles = [
  'Full Stack Developer',
  'AI Engineer',
  'Machine Learning Enthusiast',
  'Generative AI Developer',
] as const;

export const heroStats = [
  { label: 'Projects', value: '10+' },
  { label: 'Technologies', value: '15+' },
  { label: 'Certifications', value: '20+' },
  { label: 'Passion', value: '100%' },
] as const;

export const aboutPoints = [
  'B.Tech Computer Science Graduate',
  'Passionate about AI',
  'Strong Full Stack Developer',
  'Love building scalable applications',
  'Interested in LLMs',
  'Problem Solver',
  'Fast Learner',
  'Modern Software Engineer',
] as const;

export const skillCategories = [
  {
    title: 'Programming',
    progress: 96,
    items: ['Python', 'JavaScript', 'C++', 'SQL'],
  },
  {
    title: 'Frontend',
    progress: 95,
    items: ['HTML5', 'CSS3', 'Tailwind CSS', 'React.js', 'Next.js'],
  },
  {
    title: 'Backend',
    progress: 91,
    items: ['Node.js', 'Express.js', 'REST APIs'],
  },
  {
    title: 'Databases',
    progress: 90,
    items: ['MongoDB', 'MySQL'],
  },
  {
    title: 'Cloud & Deployment',
    progress: 88,
    items: ['MongoDB Atlas', 'Render', 'Vercel'],
  },
  {
    title: 'AI & Data Science',
    progress: 94,
    items: ['Machine Learning', 'Generative AI', 'NLP', 'Predictive Modeling'],
  },
  {
    title: 'Tools',
    progress: 92,
    items: ['Git', 'GitHub', 'GitHub Actions', 'Postman'],
  },
] as const;

export const experience = [
  {
    company: 'Cryptch IT Solution',
    role: 'Full Stack Intern',
    duration: 'Aug 2025 – Sep 2025',
    responsibilities: [
      'Developed full-stack applications using React, Node.js, Express, and MongoDB.',
      'Designed responsive interfaces.',
      'Built REST APIs.',
      'Integrated frontend and backend.',
      'Debugged and optimized applications.',
    ],
  },
] as const;

export const projectFilters = ['All', 'AI', 'Full Stack', 'Frontend'] as const;

export const projects = [
  {
    title: 'AI Interview System',
    category: 'AI',
    summary:
      'AI-powered mock interview platform with resume-driven interview generation, speech processing, and performance evaluation.',
    features: ['AI-powered mock interviews', 'Resume-based interview generation', 'Speech processing', 'Performance evaluation'],
    tech: ['React', 'Node', 'Express', 'MongoDB', 'Python', 'LLM APIs'],
    accent: 'from-cyan-500/30 via-blue-500/20 to-violet-500/30',
  },
  {
    title: 'Multi-Agent AI System',
    category: 'AI',
    summary:
      'An orchestration system for autonomous AI agents focused on planning, research, automation, and workflow management.',
    features: ['AI Agents', 'Planning', 'Research', 'Task Automation', 'Workflow Management', 'LLM APIs'],
    tech: ['Python', 'Agentic Workflows', 'LLM APIs', 'Automation'],
    accent: 'from-fuchsia-500/30 via-purple-500/20 to-indigo-500/30',
  },
  {
    title: 'AI Stock Assistant',
    category: 'Full Stack',
    summary:
      'Machine learning dashboard for stock prediction, market analysis, sentiment analysis, and forecast visualization.',
    features: ['Stock Prediction', 'Market Analysis', 'Sentiment Analysis', 'Dashboard', 'Forecast Visualization'],
    tech: ['React', 'Python', 'Machine Learning', 'Data Visualization'],
    accent: 'from-emerald-500/30 via-cyan-500/20 to-sky-500/30',
  },
] as const;

export const certifications = [
  { issuer: 'NPTEL', name: 'Python for Data Science' },
  { issuer: 'NPTEL', name: 'Fundamentals of Object-Oriented Programming' },
  { issuer: 'NPTEL', name: 'Applied Accelerated Artificial Intelligence' },
  { issuer: 'NPTEL', name: 'Database Management System' },
  { issuer: 'NPTEL', name: 'Blockchain and its Applications' },
] as const;

export const achievements = [
  'Built AI-powered Full Stack Applications.',
  'Hands-on experience with Generative AI.',
  'Strong understanding of Machine Learning.',
  'Passionate about intelligent automation.',
  'Focused on solving real-world problems.',
] as const;

export const contactDetails = [
  { label: 'Email', value: site.email, href: `mailto:${site.email}` },
  { label: 'Phone', value: site.phone, href: `tel:${site.phone.replace(/\s+/g, '')}` },
  { label: 'GitHub', value: 'github.com/ayusdubey', href: site.github },
  { label: 'LinkedIn', value: 'www.linkedin.com/in/ayus-dubey-18887330a', href: site.linkedin },
  { label: 'Location', value: site.location, href: '#' },
] as const;
