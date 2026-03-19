// ── lib/data.js ──────────────────────────────────────────────────────────────

export const SOCIAL = {
  github: 'https://github.com/hazel-dot-exe', // replace with real URL
  linkedin: 'https://www.linkedin.com/in/marqueseshzl0/', // replace with real URL
  email: 'marqueseshazel7@gmail.com',
  phone: '09185865159',
  location: 'Bicol, Philippines',
}

export const PROJECTS = [
  {
    id: 'usc',
    tag: 'Project Management · Client-Based',
    title: 'University Student Council Website',
    subtitle: 'Leading a digital platform from zero to launch',
    duration: 'August 2024 – March 2026',
    client: 'BU University Student Council',
    role: 'Project Manager',
    tools: ['Next.js', 'GitHub', 'Notion', 'Trello', 'Figma'],
    accent: '#e8b86d',
    overview:
      'Developed the official digital platform for the Bicol University Student Council — the primary interface between student governance and the university community.',
    problem:
      'The USC had no centralized digital presence. Information was scattered across informal channels, making it difficult for students to access announcements, council updates, or governance documentation.',
    approach: [
      'Defined project scope with stakeholder interviews, producing a requirements document and information architecture.',
      'Set up a Trello board with sprint cycles, task ownership, and milestone tracking for the dev team.',
      'Served as the sole client liaison — managing feedback loops, approval cycles, and scope change requests.',
      'Facilitated weekly syncs, produced progress reports, and maintained a shared project timeline.',
      'Coordinated final UAT, managed deployment checklist, and oversaw the handover package.',
    ],
    qa: 'Designed and executed a UAT plan covering content accuracy, navigation flow, mobile responsiveness, and cross-browser consistency. Documented and triaged 14 issues before go-live.',
    outcome:
      'Delivered on schedule. The platform now serves as the USC\'s primary communication channel, with structured content for announcements, transparency reports, and council profiles.',
  },
  {
    id: 'agtech',
    tag: 'QA + Full-Stack · Capstone',
    title: 'AgTech: Farmer-Trader Market Platform',
    subtitle: 'Bridging agriculture with transparent digital trade',
    duration: '2024 – 2025',
    client: 'Bicol University Capstone',
    role: 'QA Lead + Developer',
    tools: ['Node.js', 'Next.js', 'MySQL', 'Playwright', 'GitHub'],
    accent: '#5cb85c',
    overview:
      'A web-based platform designed to connect farmers directly with traders, eliminating middlemen and enabling transparent, data-informed agricultural commerce.',
    problem:
      'Local farmers lacked access to fair market pricing and direct buyer connections. Traders operated with limited visibility into supply availability, leading to inefficient pricing and post-harvest losses.',
    approach: [
      'Conducted requirements analysis through stakeholder interviews with farmers and local trade cooperatives.',
      'Designed system architecture and data models to support buyer-seller interactions and market data tracking.',
      'Broke development into sprints with clearly scoped deliverables tracked in Notion.',
      'Coordinated team effort across frontend, backend, and documentation throughout the capstone lifecycle.',
    ],
    qa: 'Wrote and executed 40+ test cases covering user registration, product listing, order flow, and data validation. Identified and tracked 22 bugs using a structured defect log. Implemented Playwright for end-to-end regression testing on critical trade flows.',
    outcome:
      'Successfully defended as a capstone project. Platform demonstrated live transaction flows, trader dashboards, and real-time inventory management.',
  },
  {
    id: 'solutions',
    tag: 'QA + Backend · Internship',
    title: 'Solutions Chapter',
    subtitle: 'Internal IT platform with automated testing',
    duration: 'January – May 2025',
    client: 'StraStan Solutions Corp.',
    role: 'Backend Developer & QA Tester',
    tools: ['Node.js', 'Jest', 'Playwright', 'GitHub', 'AWS'],
    accent: '#c084fc',
    overview:
      'An internal IT management platform developed during a 486-hour internship to streamline organizational workflows, ticketing, and operational reporting at StraStan Solutions Corp.',
    problem:
      'Internal operations relied on manual processes and disconnected tools, causing delays in task handoffs, inconsistent documentation, and difficulty tracking team accountability.',
    approach: [
      'Onboarded to existing codebase and documented gaps in test coverage.',
      'Contributed to backend API development for workflow automation modules.',
      'Collaborated with senior developers using Agile sprint cycles under direct supervision.',
      'Participated in daily standups, sprint reviews, and retrospectives.',
    ],
    qa: 'Built a test suite using Jest for unit testing and Playwright for end-to-end flows. Created structured test cases for API endpoints and automated regression checks for core modules. Maintained a bug log, participated in triage sessions, and validated fixes before sprint closure.',
    outcome:
      'Improved test coverage from near-zero to 60%+ on core modules. Identified 18 critical bugs during QA cycles. Completed all assigned deliverables ahead of schedule.',
  },
]

export const EXPERIENCE = [
  {
    role: 'Project Manager',
    company: 'BU – University Student Council',
    period: 'Aug 2024 – Mar 2026',
    type: 'Contractual',
    category: 'pm',
    highlights: [
      'Led end-to-end delivery of the USC website from requirements to deployment',
      'Primary client liaison — managed all stakeholder communications and feedback cycles',
      'Defined scope, milestones, and risks; tracked deliverables using project management tools',
    ],
  },
  {
    role: 'Junior Programmer',
    company: 'BU ICT Office',
    period: 'Oct 2025 – Mar 2026',
    type: 'Contractual',
    category: 'tech',
    highlights: [
      'Designed and built the Center of Excellence management system',
      'Automated CHED report generation and document tracking',
      'Reviewed legacy workflows and designed improved system architecture',
    ],
  },
  {
    role: 'IT & Operations Support Specialist',
    company: 'Pilar Travel and Tours Agency',
    period: 'Jul – Oct 2025',
    type: 'Full-Time',
    category: 'tech',
    highlights: [
      'Maintained hardware, software, and network infrastructure',
      'Managed system backups, updates, and optimization routines',
      'Created digital marketing materials for consistent brand presence',
    ],
  },
  {
    role: 'Backend Developer & QA Tester',
    company: 'StraStan Solutions Corp.',
    period: 'Jan – May 2025',
    type: 'Internship (486 hrs)',
    category: 'qa',
    highlights: [
      'Developed backend logic for internal workflow automation platform',
      'Built Jest unit tests and Playwright end-to-end test suites',
      'Tracked and triaged bugs across sprint cycles with structured defect logs',
    ],
  },
  {
    role: 'Software Engineer Trainee',
    company: 'Institute for Economics and Telematics in Healthcare',
    period: 'Nov 2021 – Jun 2025',
    type: 'Remote',
    category: 'tech',
    highlights: [
      'Assisted in documentation, testing, and data research for healthcare IT solutions',
      'Supported development teams with QA tasks and process improvement',
    ],
  },
  {
    role: 'IT Help Desk Support',
    company: 'Express Pay Pilar Branch',
    period: 'Jun 2022 – Jun 2023',
    type: 'Part-Time',
    category: 'tech',
    highlights: [
      'Resolved hardware, connectivity, and POS system issues for frontline users',
      'Delivered customer-facing technical support with clear, efficient communication',
    ],
  },
]

export const SKILLS = {
  'Project Management': [
    'Agile & Scrum Methodologies',
    'Sprint Planning & Backlog Tracking',
    'Stakeholder Communication',
    'Risk & Scope Management',
    'Jira · Trello · Notion · Asana · ClickUp',
    'Cross-functional Team Coordination',
  ],
  'QA & Testing': [
    'Manual Testing & Test Case Design',
    'Bug Tracking & Defect Reporting',
    'Regression & UAT Testing',
    'Playwright · Jest (Test Automation)',
    'QA Documentation & Reporting',
    'API Testing Fundamentals',
  ],
  'Development & Technical': [
    'HTML · CSS · PHP',
    'Node.js · Next.js · JavaScript',
    'MySQL · DynamoDB',
    'AWS (Lambda, API Gateway, Cognito)',
    'GitHub (Version Control)',
    'Shopify · WordPress',
  ],
  'Tools & Platforms': [
    'Figma · Canva',
    'Slack · Teams · Zoom',
    'N8N · TaskMagic (Automation)',
    'SEO (Ubersuggest)',
    'Grafana (Monitoring)',
    'Microsoft Office Suite',
  ],
}

export const STATS = [
  { value: '5+', label: 'Years of Experience' },
  { value: '6+', label: 'Projects Delivered' },
  { value: '3', label: 'Roles: PM · QA · Dev' },
  { value: '60%+', label: 'Test Coverage Achieved' },
]
