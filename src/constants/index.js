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
      gitlab: {
        url: 'https://gitlab.com/nijohn',
        username: 'nijohn',
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
    { icon: 'devicon-dart-plain', name: 'Dart' },
    { icon: 'devicon-html5-plain', name: 'HTML5' },
    { icon: 'devicon-css3-plain', name: 'CSS3' },

    // Frontend Frameworks & Libraries
    { icon: 'devicon-react-plain', name: 'React.js' },
    { icon: 'devicon-nextjs-plain', name: 'Next.js' },
    { icon: 'devicon-angular-plain', name: 'Angular' },
    { icon: 'devicon-svelte-plain', name: 'Svelte' },
    { icon: 'devicon-flutter-plain', name: 'Flutter' },
    { icon: 'devicon-redux-plain', name: 'Redux' },
    { icon: 'devicon-jquery-plain', name: 'jQuery' },

    // Backend Frameworks
    { icon: 'devicon-nodejs-plain', name: 'Node.js' },
    { icon: 'devicon-express-original', name: 'Express.js' },
    { icon: 'devicon-nestjs-plain', name: 'Nest.js' },
    { icon: 'devicon-flask-plain', name: 'Flask' },
    { icon: 'devicon-django-plain', name: 'Django' },
    { icon: 'devicon-fastapi-plain', name: 'FastAPI' },
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
    { icon: 'devicon-sqlite-plain', name: 'SQLite' },

    // Cloud Platforms
    { icon: 'devicon-amazonwebservices-plain', name: 'AWS' },
    { icon: 'devicon-googlecloud-plain', name: 'Google Cloud' },
    { icon: 'devicon-azure-plain', name: 'Azure' },
    { icon: 'devicon-digitalocean-plain', name: 'DigitalOcean' },

    // DevOps & Tools
    { icon: 'devicon-docker-plain', name: 'Docker' },
    { icon: 'devicon-kubernetes-plain', name: 'Kubernetes' },
    { icon: 'devicon-git-plain', name: 'Git' },
    { icon: 'devicon-jenkins-plain', name: 'Jenkins' },
    { icon: 'devicon-github-plain', name: 'GitHub Actions' },
    { icon: 'devicon-gitlab-plain', name: 'GitLab CI' },
    { icon: 'devicon-linux-plain', name: 'Linux' },
    { icon: 'devicon-nginx-plain', name: 'Nginx' },
    { icon: 'devicon-terraform-plain', name: 'Terraform' },

    // Package Managers & Build Tools
    { icon: 'devicon-npm-original-wordmark', name: 'npm' },
    { icon: 'devicon-yarn-plain', name: 'Yarn' },
    { icon: 'devicon-webpack-plain', name: 'Webpack' },
    { icon: 'devicon-vitejs-plain', name: 'Vite' },

    // API & Backend Technologies
    { icon: 'devicon-graphql-plain', name: 'GraphQL' },
    { icon: 'devicon-socketio-plain', name: 'Socket.IO' },

    // Testing & Quality Assurance
    { icon: 'devicon-jest-plain', name: 'Jest' },
    { icon: 'devicon-cypress-plain', name: 'Cypress' },

    // Content Management
    { icon: 'devicon-wordpress-plain', name: 'WordPress' },

    // Mobile Development
    { icon: 'devicon-ionic-plain', name: 'Ionic' },

    // Additional Technologies
    { icon: 'devicon-elasticsearch-plain', name: 'Elasticsearch' },
    { icon: 'devicon-rabbitmq-plain', name: 'RabbitMQ' },
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
