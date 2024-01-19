import { meta, shopify, starbucks, tesla , plan,chat,change,social,iflix,Hackathon,harvesthack,pebblehack} from "../assets/images";
import {
    car,
    neondb,
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
    imageUrl: neondb,
    name: "neondb",
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
        title: "  HarvestHack Hackathon ",
        company_name: "Won this hackathon  ",
        icon: Hackathon,
        iconBg: "#b7e4c7",
        points: [
           

           "In This Hackathon Challange I learned alot such as:  Exploring AI for Education: I delved into various AI techniques and algorithms to find the best approach for creating personalized learning plans",  
"Combining AI with Learning Theory: I researched educational psychology and learning theories to ensure my apps plans were aligned with sound pedagogical principles",
"User-Centered Design: Through extensive student and educator feedback, I refined CROW to meet the needs of its target audience ",
"Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title:"Equitable Elevation IV hackathon",
        company_name:"My project was Fourth",
        icon: harvesthack,
        iconBg: "#a2d2ff",
        points: [
            "This hackathon  focused on advocating for CSA survivors and domestic abuse victims. ",
            "It was an incredible experience filled with learning, collaboration, and a shared passion for making a positive impact",
            
        ],
    },
    {
        title:"Pebble's FrostByte Hacks",
        company_name:"My project was fourth",
        icon: pebblehack,
        iconBg: "#b7e4c7",
        points: [
            "This hackathon was about creating any good quality software to solve a social problem ",
            " The event was well planned and I learned alot form my fellow hackers and gained more skills from the code reviews and ofcourse It was a great opportunity to network ",
            
        ],
    }
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
        description: 'Designed and built a  web app that enables users to chat with their pdfs using  openApi.I used vectorization technology to split the the users pdf  which is stored on Amazon s3 bucket into small chunks for the open api to interact with without exceeding the openapi token.I learned alot on how to use the Amazon s3 bucket for storage',
        link: 'https://github.com/169398/crowchatwithpdf',
    },
    {
        iconUrl: social,
        theme: 'btn-back-red',
        name: 'Full Stack socialmedia app',
        description: 'Developed a web application that enables people to connect with each other through communities.I used goole oauth 2.0 for authentication making it safe.I also used NEXTJS catching capabilities by utilising REDIS Database for storing the catched data making the application not only faster but  also efficient.Users will be able to post and comment on others post .This was to just bring people together.',
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
        description: 'FullStack app that uses news API to get menntal health related articles to create awareness on the effects of mental health and the measures to reduce it and also provided the relevant authorities where one could seek help or report a case.It was nice exploring the News API and using it by filtering through the API respond=se to only remain with the results I wanted.I used REACT ',
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

