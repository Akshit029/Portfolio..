import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'akshitchadgal016@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Akshit, I am reaching out to you because...',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/Akshit029' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/akshit-chadgal' },
];

export const MY_STACK = {
    frontend: [
        {
            name: 'JavaScript',
            icon: '/logo/js.png',
        },
        {
            name: 'TypeScript',
            icon: '/logo/ts.png',
        },
        {
            name: 'React',
            icon: '/logo/react.png',
        },
        {
            name: 'Next.js',
            icon: '/logo/next.png',
        },
        // {
        //     name: 'Redux',
        //     icon: '/logo/redux.png',
        // },
        {
            name: 'Tailwind CSS',
            icon: '/logo/tailwind.png',
        },
        // {
        //     name: 'GSAP',
        //     icon: '/logo/gsap.png',
        // },
        {
            name: 'Framer Motion',
            icon: '/logo/framer-motion.png',
        },
        // {
        //     name: 'Sass',
        //     icon: '/logo/sass.png',
        // },
        // {
        //     name: 'Bootstrap',
        //     icon: '/logo/bootstrap.svg',
        // },
    ],
    backend: [
        {
            name: 'Node.js',
            icon: '/logo/node.png',
        },
        // {
        //     name: 'NestJS',
        //     icon: '/logo/nest.svg',
        // },
        {
            name: 'Express.js',
            icon: '/logo/express.png',
        },
    ],
    database: [
        {
            name: 'MySQL',
            icon: '/logo/mysql.svg',
        },
        // {
        //     name: 'PostgreSQL',
        //     icon: '/logo/postgreSQL.png',
        // },
        {
            name: 'MongoDB',
            icon: '/logo/mongodb.svg',
        },
        // {
        //     name: 'Prisma',
        //     icon: '/logo/prisma.png',
        // },
    ],
    tools: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        // {
        //     name: 'Docker',
        //     icon: '/logo/docker.svg',
        // },
        // {
        //     name: 'AWS',
        //     icon: '/logo/aws.png',2
        // },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'Syncfit',
        slug: 'syncfit',
        liveUrl: 'https://syncfit-six.vercel.app',
        year: 2024,
        description: `
      A personalized AI-powered fitness and diet management platform designed to help users achieve their health goals through intelligent insights and automation. <br/> <br/>
      
      Key Features:<br/>
      <ul>
        <li>🏋️ Workout Planner: Generates personalized weekly workout routines for strength and endurance</li>
        <li>🥗 Smart Diet Generator: Creates AI-driven diet plans tailored to fitness goals and body type</li>
        <li>📄 PDF Export: Automatically generates and exports personalized plans using Puppeteer</li>
        <li>🤖 AI Integration: Uses Gemini AI for intelligent nutrition and fitness recommendations</li>
        <li>🧠 Progress Tracker: Allows users to monitor improvements and adjust routines dynamically</li>
        <li>📱 Responsive Design: Seamless user experience across desktop and mobile devices</li>
      </ul><br/>
      
      Technical Highlights:
      <ul>
        <li>Integrated Gemini AI for generating dynamic fitness and diet recommendations</li>
        <li>Implemented secure user authentication and session management using JWT</li>
        <li>Developed RESTful APIs with Express.js and MongoDB for scalable data handling</li>
        <li>Built reusable React components styled with Tailwind CSS</li>
        <li>Utilized Puppeteer for automated PDF creation and export</li>
      </ul>
      `,
        role: `
      Full-Stack Developer <br/>
      Owned the entire development lifecycle:
      <ul>
        <li>✅ Backend: Developed secure APIs and AI integration pipelines using Node.js and Express</li>
        <li>🎨 Frontend: Designed and implemented responsive UI with React and Tailwind CSS</li>
        <li>🧠 AI Logic: Integrated Gemini AI for real-time personalized plan generation</li>
        <li>📄 Automation: Used Puppeteer for automated PDF generation of fitness reports</li>
        <li>🔐 Authentication: Implemented JWT-based login/signup and protected routes</li>
        <li>🚀 Deployment: Deployed full-stack MERN application on Vercel and Render</li>
      </ul>
      `,
        techStack: [
            'React.js',
            'Tailwind CSS',
            'Node.js',
            'Express.js',
            'MongoDB',
            'Render',
            'Vercel',
        ],
        thumbnail: '',
        longThumbnail: '',
        images: ['', ''],
    },
    {
        title: 'VIG',
        slug: 'vig',
        techStack: [
            'React',
            'Tailwind CSS',
            'Node.js',
            'Express.js',
            'MongoDB',
            'Render',
            'Vercel',
            'Api Integration',
        ],
        thumbnail: '',
        longThumbnail: '',
        images: ['', '', '', '', ''],
        liveUrl: 'https://vig-psi.vercel.app',
        year: 2025,
        description: `VIG is an AI-powered transcription and caption generation platform that converts audio or video content into accurate, time-synced text. It enhances accessibility, boosts engagement, and supports multilingual transcription for creators and professionals.`,
        role: `As the full-stack developer, I: <br/>
        - Built the application using Next.js, Node.js, and Tailwind CSS for a seamless user experience.<br/>
        - Integrated advanced AI/LLM models for accurate speech-to-text and caption synchronization.<br/>
        - Implemented file upload, processing, and storage systems for handling large media files.<br/>
        - Optimized transcription workflows using asynchronous processing for faster results.<br/>
        - Deployed the project using Vercel (frontend) and Render (backend) for scalability and performance.`,
    },
    {
        title: 'Mindnest',
        slug: 'mindnest',
        techStack: [
            'Next.js',
            'MongoDB',
            'Node.js',
            'Express.js',
            'Tailwind CSS',
            'Render',
            'Vercel',
            'Api Integration',
            'Gemini-2.0',
        ],
        thumbnail: '',
        longThumbnail: '',
        images: ['', '', ''],
        liveUrl: 'https://mindnest-zeta.vercel.app',
        year: 2025,
        description: `Mindnest is a mental wellness platform designed to promote mindfulness, journaling, and emotional awareness through technology. Built with Next.js and Tailwind CSS, it provides a safe space for users to express thoughts, track moods, and receive AI-guided reflections for personal growth and mental clarity.`,
        role: `As the sole developer, I:<br/>
        - Developed the full application using Next.js and Tailwind CSS with a focus on calm, accessible design.<br/>
        - Integrated AI-driven insights to provide personalized mood reflections and journaling prompts.<br/>
        - Implemented secure user authentication and local data storage for privacy-focused experiences.<br/>
        - Optimized frontend performance and responsiveness for a distraction-free user journey.`,
    },
    // {
    //     title: 'Real Estate',
    //     slug: 'property-pro',
    //     techStack: [
    //         'React.js',
    //         'Redux',
    //         'Tailwind CSS',
    //         'React i18n',
    //         'Framer Motion',
    //     ],
    //     thumbnail: '/projects/thumbnail/property-pro.jpg',
    //     longThumbnail: '/projects/long/property-pro.jpg',
    //     images: [
    //         '/projects/images/property-pro-1.png',
    //         '/projects/images/property-pro-2.png',
    //         '/projects/images/property-pro-3.png',
    //     ],
    //     liveUrl: 'https://demo.propertypro.siphertech.com/',
    //     year: 2023,
    //     description:
    //         'PropertyPro is a real estate management platform offering users a seamless experience to explore, manage, and view property listings. The application emphasizes accessibility and responsive design, ensuring a smooth interface across devices.',
    //     role: `As the frontend developer, I:<br/>
    //     - Built the frontend using React, Redux, RTK Query, Framer Motion, and Tailwind CSS.<br/>
    //     - Integrated dynamic state management for efficient handling of property data.<br/>
    //     - Implemented multi-language support with React i18n to cater to diverse audiences.<br/>
    //     - Enhanced user interaction with animations and transitions using Framer Motion.`,
    // },
    // {
    //     title: 'Consulting Finance',
    //     slug: 'crenotive',
    //     techStack: ['HTML', 'CSS & SCSS', 'Javascript', 'Bootstrap'],
    //     thumbnail: '/projects/thumbnail/consulting-finance.jpg',
    //     longThumbnail: '/projects/long/consulting-finance.jpg',
    //     images: [
    //         '/projects/images/consulting-finance-1.png',
    //         '/projects/images/consulting-finance-2.png',
    //         '/projects/images/consulting-finance-3.png',
    //     ],
    //     sourceCode: 'https://github.com/Tajmirul/crenotive',
    //     liveUrl: 'https://crenotive.netlify.app/',
    //     year: 2023,
    //     description:
    //         'I developed Crenotive, a portfolio website using Html, SASS, and jQuery to showcase services and expertise. The design focuses on responsive user experience and effective presentation of professional achievements.',
    //     role: ``,
    // },
    // {
    //     title: 'devLinks',
    //     slug: 'devLinks',
    //     techStack: ['Next.js', 'Formik', 'Drag & Drop', 'Tailwind CSS'],
    //     thumbnail: '/projects/thumbnail/devLinks.jpg',
    //     longThumbnail: '/projects/long/devLinks.jpg',
    //     images: [
    //         '/projects/images/devLinks-1.png',
    //         '/projects/images/devLinks-2.png',
    //         '/projects/images/devLinks-3.png',
    //     ],
    //     sourceCode: 'https://github.com/Tajmirul/devsLink',
    //     liveUrl: 'https://devlinks-demo.vercel.app/auth/signin',
    //     year: 2023,
    //     description: `One of the most challenging projects in Frontend Mentor.<br/><br/>

    //         I developed a LinkSharing App as part of the Frontend Mentor challenge, utilizing React, Redux, and Tailwind CSS to create a responsive and feature-rich platform. The app allows users to share, save, and explore links, with a focus on intuitive design and smooth navigation. Advanced state management ensures efficient data handling for user interactions.`,
    //     role: ``,
    // },
];

export const MY_EXPERIENCE = [
    {
        title: 'Mern Stack Developer (Intern)',
        company: 'Advantal Technologies',
        duration: 'July 2025 - Aug 2025',
    },
    {
        title: 'Web Development (Intern)',
        company: 'My Job Grow',
        duration: 'Aug 2024 - Oct 2024',
    },
    // {
    //     title: 'Frontend Engineer',
    //     company: 'Anchorblock Technology',
    //     duration: 'Oct 2022 - Sep 2023',
    // },
    // {
    //     title: 'Frontend Developer (Part-time)',
    //     company: 'Branex IT',
    //     duration: 'Jan 2022 - Oct 2022',
    // },
];
