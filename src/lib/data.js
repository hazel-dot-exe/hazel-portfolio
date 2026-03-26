// ── lib/data.js ──────────────────────────────────────────────────────────────

export const SOCIAL = {
  github: 'https://github.com/hazel-dot-exe', 
  linkedin: 'https://www.linkedin.com/in/marqueseshzl0/', 
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
    tools: ['TALL Stack', 'GitHub', 'Discord', 'Trello', 'Figma', 'Canva'],
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
    id: 'coe',
    tag: 'Project Manangement + QA · Government / University System',
    title: 'COE Application & Reporting System',
    subtitle: 'Centralized platform for document management and compliance reporting',
    duration: 'October – December 2025',
    client: 'Bicol University - Office of the Vice President for Academic Affairs',
    role: 'Project Manager & System Developer',
    tools: ['TALL Stack', 'MySQL', 'Notion', 'GitHub', 'Discord', 'Google Workspace'],
    accent: '#1accf0',
    overview:
      'A centralized web-based system built to digitize and streamline the Center of Excellence (COE) application and management process, including document handling and report generation.',
    problem:
      'The COE process relied on fragmented, manual workflows with no centralized repository, leading to inefficient document tracking, redundant work, and difficulty generating standardized reports for CHED compliance.',
    approach: [
      'Reviewed and mapped existing COE workflows to identify inefficiencies and system requirements.',
      'Designed and implemented a centralized application repository with document upload and tracking features.',
      'Led system planning and coordination with stakeholders from the ICT Office.',
      'Developed core system functionalities while ensuring maintainability and scalability of the platform.',
    ],
    qa: 'Performed structured QA across core modules including document uploads, tracking flows, and report generation. Created test scenarios based on real user workflows, logged and validated bugs, and ensured system reliability before deployment.',
    outcome:
      'Successfully digitized the COE process into a single platform, improving accessibility, reducing manual workload, and enabling faster, standardized generation of CHED-required reports. Enhanced system maintainability and reduced dependency on manual tracking.',
  },
  {
    id: 'msp',
    tag: 'Project Manangement + QA · Government / University System',
    title: 'Merit System Promotion (MSP)',
    subtitle: 'Multi-role faculty evaluation and promotion management platform',
    duration: 'January – March 2026',
    client: 'Bicol University - Office of the Vice President for Academic Affairs',
    role: 'Project Manager & System Developer',
    tools: ['TALL Stack', 'MySQL', 'GitHub', 'Discord', 'Google Workspace', 'ClickUp'],
    accent: '#f0731a',
    overview:
      'A centralized web-based platform designed to manage and automate the faculty promotion process, covering application submission, multi-level evaluation, and final approval workflows across university committees.',
    problem:
      'The faculty promotion process relied on manual submissions, fragmented evaluations, and inconsistent tracking across multiple committees (LAC, UFMSB, and administrative offices), leading to delays, lack of transparency, and difficulty consolidating evaluation results and reports.',
    approach: [
      'Mapped end-to-end promotion workflows including faculty application, LAC evaluation, UFMSB deliberation, and final approval.',
      'Designed a role-based system supporting Faculty, LAC, UFMSB, VPAA Office, and Office of the President with distinct permissions and workflows.',
      'Implemented application lifecycle tracking (Pending, For Review, Completed, Declined) with real-time status updates.',
      'Developed evaluation modules for requirement-level validation, scoring, and summary generation across multiple committees.',
      'Built configurable management features for KRAs, criteria, points system, deadlines, and ranking ranges.',
    ],
    qa: 'Conducted end-to-end QA across multi-role workflows including application submission, LAC and UFMSB evaluations, and report generation. Tested edge cases such as declined requirements, status transitions, and role-based visibility. Logged and validated bugs, ensured accuracy of evaluation summaries, and verified system behavior against real-world promotion scenarios.',
    outcome:
      'Successfully digitized and standardized the faculty promotion process into a single platform, improving transparency across evaluation stages, reducing manual coordination, and enabling faster generation of qualified applicant lists and decision reports for university leadership.',
  },
  {
    id: 'agtech',
    tag: 'QA + Systems Analyst · Capstone',
    title: 'AgTech: Farmer-Trader Market Platform',
    subtitle: 'Bridging agriculture with transparent digital trade',
    duration: 'January – December 2024',
    client: 'Bicol University Capstone Project',
    role: 'QA Lead + Systems Analyst',
    tools: ['PHP', 'Tailwind', 'MySQL', 'GitHub', 'Trello', 'Figma',],
    accent: '#5cb85c',
    overview:
      'A web-based platform designed to connect farmers directly with traders, eliminating middlemen and enabling transparent, data-informed agricultural commerce.',
    problem:
      'Local farmers lacked access to fair market pricing and direct buyer connections. Traders operated with limited visibility into supply availability, leading to inefficient pricing and post-harvest losses.',
    approach: [
      'Conducted requirements analysis through stakeholder interviews with farmers and local trade cooperatives.',
      'Designed system architecture and data models to support buyer-seller interactions and market data tracking.',
      'Broke development into sprints with clearly scoped deliverables tracked in Trello.',
      'Coordinated team effort across frontend, backend, and documentation throughout the capstone lifecycle.',
    ],
    qa: 'Wrote and executed 40+ test cases covering user registration, product listing, order flow, and data validation. Identified and tracked 22 bugs using a structured defect log. Implemented regression testing on critical trade flows.',
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
    tools: ['Node.js', 'Jest', 'Playwright', 'GitHub', 'AWS', 'Discord', 'Google Workspace'],
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
  {
    id: 'unboxed',
    tag: 'Systems Analyst + QA · E-commerce',
    title: 'UNBOXED: E-Commerce Platform for Personal Brands',
    subtitle: 'End-to-end commerce system design for independent sellers',
    duration: 'October – December 2024',
    client: 'Academic Project – Bicol University',
    role: 'Systems Analyst + QA Lead',
    tools: ['PHP', 'MySQL', 'Trello', 'GitHub', 'Google Workspace', 'Canva'],
    accent: '#f1f900',
    overview:
      'A conceptual e-commerce platform designed to enable personal brands to manage products, transactions, and customer interactions within a structured digital marketplace.',
    problem:
      'Emerging personal brands lack structured platforms to manage product listings, orders, and transactions, often relying on fragmented tools and manual coordination.',
    approach: [
      'Defined system architecture including product catalog, ordering flow, and transaction lifecycle.',
      'Mapped user journeys for both sellers and customers to ensure a complete shopping experience.',
      'Translated stakeholder requirements into functional modules and system workflows.',
    ],
    qa: 'Validated core flows including product listing, checkout process, and transaction handling. Tested edge cases such as invalid inputs, order inconsistencies, and data integrity.',
    outcome:
      'Delivered a structured e-commerce system design demonstrating complete workflow coverage from product listing to order fulfillment, aligned with real-world commerce scenarios.',
  },
  {
    id: 'sms-java',
    tag: 'Software Development · OOP',
    title: 'Student Management System (Java)',
    subtitle: 'Command-line application for managing student records',
    duration: 'December 2024 – January 2025',
    client: 'Training Project – NRG Info-Tech Institute Inc.',
    role: 'Java Developer',
    tools: ['Java', 'File Handling', 'OOP', 'Google Workspace', 'Microsoft Office'],
    accent: '#ff3d3d',
    overview:
      'A command-line–based application built in Java to manage student records, supporting core CRUD operations and persistent data storage.',
    problem:
      'Scenario Based: Manual handling of student records can lead to data inconsistency, inefficiency, and lack of structured access to information.',
    approach: [
      'Applied object-oriented programming principles to structure system components.',
      'Implemented CRUD functionalities for student data management.',
      'Integrated file handling for persistent storage and retrieval of records.',
      'Designed input validation to ensure data integrity.',
    ],
    qa: 'Tested all CRUD operations, input handling, and file storage behavior. Validated system responses to invalid inputs and ensured data consistency.',
    outcome:
      'Delivered a functional CLI-based system demonstrating strong understanding of OOP, data handling, and foundational software development principles.',
  },
  {
    id: 'game-proposal',
    tag: 'Project Planning · Game Development',
    title: 'Game Development Proposal',
    subtitle: 'End-to-end concept planning and technical scoping',
    duration: 'February – March 2025',
    client: 'Training Project - Ollopa Corporation',
    role: 'Project Planner',
    tools: ['Canva', 'Google Workspace', 'Microsoft Office', 'Figma'],
    accent: '#e100e9',
    overview:
      'A structured game development proposal outlining the concept, gameplay systems, technical scope, and development roadmap.',
    problem:
      'Game ideas often fail due to lack of structured planning, unclear scope, and misalignment between design and technical feasibility.',
    approach: [
      'Defined core game concept, mechanics, and user experience flow.',
      'Outlined system architecture and technical requirements.',
      'Developed a project timeline including milestones and deliverables.',
      'Collaborated with supervisors to refine scope and feasibility.',
    ],
    qa: 'Reviewed documentation for consistency, feasibility, and alignment between design and technical scope. Validated completeness of planning artifacts.',
    outcome:
      'Delivered a comprehensive game development proposal with clear scope, structured planning, and aligned technical considerations, ready for potential execution.',
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
      'Designed and built the COE Application & Reporting System',
      'Led the development team in planning, implementation, and deployment phases of Merit System Promotion (MSP)',
      'Act as the Project Manager and QA Lead of selected development team for projects under the ICT Office',
    ],
  },
  {
    role: 'IT & Operations Support Specialist',
    company: 'Pilar Travel and Tours Agency',
    period: 'Jul – Oct 2025',
    type: 'Contractual',
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
    type: 'Trainee',
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
  {
    role: 'Digital Marketing Specialist',
    company: 'Strastan Solutions Corp.',
    period: 'Nov 2025 – Feb 2026',
    type: 'Contractual',
    category: 'tech',
    highlights: [
      'Executed SEO strategies including keyword research, on-page optimization, and content structuring to improve search visibility',
      'Conducted market and competitor research to identify growth opportunities and refine targeting strategies',
      'Led lead generation initiatives through outbound prospecting, data sourcing, and funnel optimization',
      'Supported email marketing campaigns, including audience segmentation, content drafting, and performance tracking',
      'Collaborated with cross-functional teams to align marketing efforts with business and product goals',
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

// ── DYNAMIC STATS — auto-computed from PROJECTS and EXPERIENCE ────────────────
// Add to these arrays and the hero stats update automatically
 
// Unique roles across career
const uniqueRoles = [...new Set(EXPERIENCE.map(e => e.category))].length
 
export const getStats = () => [
  {
    value: `${EXPERIENCE.length}+`,
    label: 'Years of Experience',
  },
  {
    value: `${PROJECTS.length}+`,
    label: 'Projects Delivered',
  },
  {
    value: `${uniqueRoles}`,
    label: 'Disciplines: PM · QA · Dev',
  },
]
 
// Keep STATS as a static export for any other components still referencing it
export const STATS = getStats()
