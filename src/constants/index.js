import { meta, shopify, starbucks, tesla , plan,chat,change,social,iflix,hack} from "../assets/images";
import {
    car,
    hack,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {/* {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    }, */},
   
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
   
    
   
  
    {
        title: "HarvestHack Hackathon ",
        company_name: "Hackathon ",
        icon: hack,
        iconBg: "#b7e4c7",
        date: "Jan 2022 - Jan 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
     /*
    {
        title: "Full stack Developer",
        company_name: "Meta",
        icon: meta,
        iconBg: "#a2d2ff",
        date: "Jan 2023 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    */
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/169398',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/idris-kulubi/',
    }
];

export const projects = [
    
    
    {
        iconUrl: chat,
        theme: 'btn-back-blue',
        name: 'Crow chat with pdf',
        description: 'Designed and built a  web app that enables users to chat with their pdfs using  openApi.I used vectorization technology to split the the users pdf into small chunks for the open api to interact with without exceeding the openapi token',
        link: 'https://github.com/169398/crowchatwithpdf',
    },
    {
        iconUrl: social,
        theme: 'btn-back-red',
        name: 'Full Stack socialmedia app',
        description: 'Developed a web application that enables people to connect with each other through communities.Users will be able to post and comment on others post .This was to just bring people together.',
        link: 'https://crow-gray.vercel.app/',
    },
    {
        iconUrl: plan,
        theme: 'btn-back-pink',
        name: 'Full stack Learning plan generator',
        description: 'Built a complete Learning plan generator that enables students  to generate a personalised learning plan depending on their grade ,learning style and the subject he wants .The app will then use openapi to generate the learning plan and also provide learning resourses through links from medias like youtube and khan academy.',
        link: 'https://github.com/169398/BrainBox-AI-Learning-plan-generator-',
    },
    {
        iconUrl:change,
        theme: 'btn-back-red',
        name: ' A full stack Mental health awareness app.',
        description: 'FullStack app that uses news API to get menntal health related articles to create awareness on the effects of mental health and the measures to reduce it and also provided the relevant authorities where one could seek help or report a case.',
        link: 'https://github.com/169398/YOUTH-FOR-CHANGE',
    },
    {
        iconUrl:iflix,
        theme: 'btn-back-red',
        name: 'A Full stack  movies app .',
        description: ' This is a web app that gives latest information about movies and tv shows.I implemented the  the IMDB API to get all the information.From this I learned how to use APIs and handle the fetched data from the API endpoints .',
        link: 'https://iflix-movies.vercel.app/',
    },
   
  
];

