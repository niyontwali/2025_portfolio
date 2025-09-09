export const homeContent = {
  greeting: 'Hello',
  intro: "I'm",
  name: 'John',
  description:
    'Full-Stack Dev with 8+ years of experience building scalable web & mobile apps.',
};

export const personalInfo = {
  name: 'John Niyontwali',
  age: new Date().getFullYear() - 1995,
  nationality: 'Rwandan',
  location: 'Kigali, Rwanda',
  phone: '+250 786 266 073',
  email: 'nijohn0001@gmail.com',
  openToWork: true,
  languages: 'English',
};

export // Data object containing all the component information
const aboutData = {
  personalInfo: {
    name: {
      first: 'John',
      last: 'Niyontwali',
    },
    birthYear: 1995,
    nationality: 'Rwandan',
    openToWork: 'Yes',
    languages: 'English',
    address: 'Kigali - Rwanda',
    phone: '+250 786 266 073',
    email: 'nijohn0001@gmail.com',
    social: {
      github: {
        url: 'https://github.com/niyontwali',
        username: 'niyontwali',
      },
      linkedin: {
        url: 'https://www.linkedin.com/in/john-niyontwali-816549111/',
        username: 'linkedin',
      },
    },
    image: 'assets/about.jpg',
  },
  skills: [
    // Programming Languages
    { icon: 'devicon-javascript-plain', name: 'JavaScript' },
    { icon: 'devicon-typescript-plain', name: 'TypeScript' },
    { icon: 'devicon-python-plain', name: 'Python' },
    { icon: 'devicon-csharp-plain', name: 'C#' },
    { icon: 'devicon-php-plain', name: 'PHP' },
    { icon: 'devicon-html5-plain', name: 'HTML5' },
    { icon: 'devicon-css3-plain', name: 'CSS3' },

    // Frontend Frameworks & Libraries
    { icon: 'devicon-react-plain', name: 'React.js' },
    { icon: 'devicon-nextjs-plain', name: 'Next.js' },
    { icon: 'devicon-javascript-plain', name: 'Angular' },
    { icon: 'devicon-flutter-plain', name: 'Flutter' },
    { icon: 'devicon-redux-plain', name: 'Redux' },

    // Backend Frameworks
    { icon: 'devicon-nodejs-plain', name: 'Node.js' },
    { icon: 'devicon-express-original', name: 'Express.js' },
    { icon: 'devicon-nestjs-plain', name: 'Nest.js' },
    { icon: 'devicon-flask-plain', name: 'Flask' },
    { icon: 'devicon-python-plain', name: 'Django' },
    { icon: 'devicon-python-plain', name: 'FastAPI' },
    { icon: 'devicon-dotnetcore-plain', name: '.NET Core' },
    { icon: 'devicon-laravel-plain', name: 'Laravel' },

    // UI Libraries & CSS Frameworks
    { icon: 'devicon-tailwindcss-plain', name: 'Tailwind CSS' },
    { icon: 'devicon-bootstrap-plain', name: 'Bootstrap' },
    { icon: 'devicon-materialui-plain', name: 'Material UI' },
    { icon: 'devicon-sass-plain', name: 'Sass' },

    // Databases
    { icon: 'devicon-postgresql-plain', name: 'PostgreSQL' },
    { icon: 'devicon-mongodb-plain', name: 'MongoDB' },
    { icon: 'devicon-mysql-plain', name: 'MySQL' },
    { icon: 'devicon-redis-plain', name: 'Redis' },
    { icon: 'devicon-firebase-plain', name: 'Firebase' },

    // Cloud Platforms
    { icon: 'devicon-amazonwebservices-plain', name: 'AWS' },
    { icon: 'devicon-googlecloud-plain', name: 'Google Cloud' },
    { icon: 'devicon-azure-plain', name: 'Azure' },
    { icon: 'devicon-digitalocean-plain', name: 'DigitalOcean' },

    // DevOps & Tools
    { icon: 'devicon-docker-plain', name: 'Docker' },
    { icon: 'devicon-kubernetes-plain', name: 'Kubernetes' },
    { icon: 'devicon-git-plain', name: 'Git' },
    { icon: 'devicon-github-plain', name: 'GitHub Actions' },
    { icon: 'devicon-gitlab-plain', name: 'GitLab CI' },
    { icon: 'devicon-linux-plain', name: 'Linux' },
    { icon: 'devicon-nginx-plain', name: 'Nginx' },
    { icon: 'devicon-redis-plain', name: 'Terraform' },

    // Package Managers & Build Tools
    { icon: 'devicon-npm-original-wordmark', name: 'npm' },
    { icon: 'devicon-yarn-plain', name: 'Yarn' },

    // API & Backend Technologies
    { icon: 'devicon-graphql-plain', name: 'GraphQL' },

    // Testing & Quality Assurance
    { icon: 'devicon-jest-plain', name: 'Jest' },
    { icon: 'devicon-jasmine-plain', name: 'Cypress' },

    // Content Management
    { icon: 'devicon-wordpress-plain', name: 'WordPress' },

    // Additional Technologies
    { icon: 'devicon-redis-plain', name: 'RabbitMQ' },
  ],
  experience: [
    {
      title: 'Part-time SE Career Mentor',
      period: 'Feb 2025 - Present',
      company: 'Springboard',
      type: 'experience',
    },
    {
      title: 'ICT/Coding Mentor',
      period: 'July 2024 - Jan 2025',
      company: 'Alight',
      type: 'experience',
    },
    {
      title: 'Senior Full-Stack Developer',
      period: 'Jan 2023 - June 2024',
      company: 'WelTel Inc.',
      type: 'experience',
    },
    {
      title: 'Technical Team Lead & Mentor',
      period: 'Nov 2021 - Dec 2022',
      company: 'Andela',
      type: 'experience',
    },
    {
      title: 'Lead Developer',
      period: 'Jan 2020 - Oct 2021',
      company: 'Bizcotap',
      type: 'experience',
    },
    {
      title: 'Software Engineer',
      period: 'June 2018 - Dec 2019',
      company: 'FuelCapp Technologies',
      type: 'experience',
    },
    {
      title: 'IT Officer',
      period: 'Jan 2016 - May 2018',
      company: 'IER',
      type: 'experience',
    },
  ],
};

export const blogs = [
  {
    id: 1,
    link: 'https://www.cyberark.com/resources/blog/the-rise-of-ai-agents-collaborative-intelligence',
    image:
      'https://www.cyberark.com/wp-content/uploads/2025/03/ai-agents-collaborative-intelligence1.jpg',
    alt: 'The Rise of AI Agents—Collaborative Intelligence',
    category: 'AI/ML',
    title: 'The Rise of AI Agents, Collaborative Intelligence',
    summary:
      '2025 marks a shift as AI agents move from experiments to core enterprise tools, expanding human intelligence, automating workflows and reshaping cybersecurity and decision-making at scale.',
    date: '12 March 2025',
    author: 'Noga Shachar Schleyer',
  },
  {
    id: 2,
    link: 'https://towardsdatascience.com/agentic-ai-and-the-future-of-python-project-management-tooling/',
    image:
      'https://towardsdatascience.com/wp-content/uploads/2025/09/sandy-millar-5PCeHBkMCmk-unsplash-scaled-1.jpg',
    alt: 'Agentic AI and Python Project Management',
    category: 'AI/ML',
    title: 'Agentic AI and the Future of Python Project Management Tooling',
    summary:
      'How agentic AI will transform Python tooling from basic primitives to autonomous agents handling environment management and workflows.',
    date: '09 September 2025',
    author: 'Towards Data Science',
  },
];
