import type { PortfolioData } from '../types';

export const portfolioData: PortfolioData = {
    name: "AKUL CHAUHAN",
    aboutHome: "A creative Full-Stack Developer passionate about building robust, scalable web applications and turning complex problems into elegant, efficient solutions.",
    aboutPage: "Hello! I'm Akul, a full-stack developer based in Delhi, India. My journey into technology began with a deep curiosity for how things work, which led me to pursue a B.TECH in Mathematics and Computing. Today, I specialize in architecting high-performance backend systems using Java Spring Boot, ASP.NET Core, and Golang, while also creating engaging user experiences with React and Tailwind CSS. I thrive on the challenges of system integration, API design, and building secure, scalable microservices. Beyond coding, I'm passionate about exploring emerging technologies and contributing to the open-source community.",

    projects: [
        {
            id: "crickinformer-backend",
            title: "Crickinformer backend service",
            description: "Engineered a backend using springboot to provide real-time scores of cricket performance metrics from a mySQL database.",
            technologies: ["Java", "SpringBoot", "Postman", "IntellijIDEA", "mySQL"],
            sourceCode: "https://github.com/akulcodes-art/CrickInformer-Backend",
            readme: `
CrickInformer Backend Overview CrickInformer is a robust backend service built with Spring Boot that provides real-time and comprehensive cricket match information. The application fetches live match data, scores, and tournament point tables by scraping the web, processes the information, and exposes it through a clean RESTful API. This service can be used as the backbone for any frontend application (web or mobile) that needs up-to-date cricket data.

The project demonstrates a strong understanding of backend development principles, including API design, web scraping, data persistence with a relational database, and Spring Boot architecture.

Features Get Live Matches: Provides a list of all currently live cricket matches with detailed information like scores, venue, and live status text.

Get All Matches: Fetches a complete list of matches stored in the database.

Get World Cup Point Table: Scrapes and returns the latest points table for major tournaments like the ICC Cricket World Cup.

Data Persistence: Automatically saves and updates match data into a MySQL database to maintain a history and reduce redundant scraping.

Tech Stack Framework: Spring Boot 3
`
        },

        {
            id: "portfolio",
            title: "Personal Portfolio",
            description: "Designed and deployed a fully responsive personal portfolio website using ReactJS and Tailwind CSS, hosted on GitHub Pages for seamless deployment and accessibility.",
            technologies: ["ReactJS", "Tailwind CSS", "Github Pages"],
            sourceCode: "https://github.com/THE-AkS-21/Portfolio",
            liveDemo: "https://the-aks-21.github.io/Portfolio",
            readme: `
# Personal Developer Portfolio

A clean, modern, and fully responsive personal portfolio built with React, TypeScript, and Tailwind CSS. This project serves as a dynamic showcase of my skills, experience, and projects, featuring a futuristic UI, smooth animations, and a reusable, component-based architecture.
---

## 📖 About The Project

This portfolio was designed not just to display my work, but to be a piece of work in itself. It demonstrates modern frontend development practices, including a strong emphasis on the DRY (Don't Repeat Yourself) principle, a data-driven content strategy, and a futuristic user interface with engaging micro-interactions.

The entire site is a Single Page Application (SPA) powered by React Router, ensuring a seamless and fast user experience.

## 🚀 Key Features

-   **Futuristic UI/UX**: A clean, light-themed interface with smooth animations and a focus on readability.
-   **Fully Responsive Design**: Optimized for a seamless experience on desktops, tablets, and mobile devices.
-   **Data-Driven Content**: All portfolio information (projects, skills, experience) is managed from a single, centralized \`portfolioData.ts\` file, making updates effortless.
-   **Reusable Component Architecture**: Built on the DRY principle with reusable \`Section\`, \`Card\`, and \`Icon\` components for maximum maintainability.
-   **Project Detail Pages**: Users can click on any project card to navigate to a dedicated, full-width page with a detailed README and image gallery.
-   **Interactive Project Gallery**: A sleek, modern gallery on project pages to showcase multiple images.
-   **Centralized Icon System**: A single, scalable component manages all icons (tech, social, UI) and their brand colors.
-   **Contact Form Integration**: A functional contact form connected to EmailJS for receiving messages directly.
-   **Scroll-Reveal Animations**: Content gracefully animates into view as the user scrolls.

## 🛠️ Tech Stack

This project is built with a modern, professional tech stack:

-   **Framework**: React 18
-   **Language**: TypeScript
-   **Build Tool**: Vite
-   **Styling**: Tailwind CSS
-   **Routing**: React Router DOM
-   **Markdown Rendering**: React Markdown
-   **Deployment**: GitHub Pages

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.`
        },
        {
            id: "food-delivery",
            title: "Food Delivery application",
            description: "Food Delivery fast & secured",
            technologies: ["React.Js", "MongoDB","Express","Node.js"],
            sourceCode: "https://github.com/akulcodes-art/food_app",
            readme: `

---
`
        },
    ],
    skills: [
        {
            category: "Programming Languages",
            technologies: ["Java", "C#", "Golang", "C/C++", "TypeScript", "Node.js", "JavaScript", "Python", "SQL"]
        },
        {
            category: "Back-End Development",
            technologies: ["RESTful & Private APIs", "Express.js", "Spring Boot", "ASP.NET Core", "Microservices", "JWT"]
        },
        {
            category: "Databases",
            technologies: ["MongoDB", "MySQL", "SQL Server"]
        },
        {
            category: "DevOps & Tools",
            technologies: ["Docker", "Git", "Kubernetes", "Postman", "CI/CD", "Swagger"]
        },
        {
            category: "Front-End Development",
            technologies: ["React.js", "Next.js (Familiarity)", "Tailwind CSS", "HTML", "CSS"]
        },
        {
            category: "Cloud & Other",
            technologies: ["AWS (Basics)", "System Architecture"]
        }
    ],
    workExperience: [
        {
            role: "FrontEnd Developer",
            company: "1Stop-AI",
            period: "Jul 2025 – Sept 2025",
            description: "Engineered scalable frontend services using CSS,JAVASCRIPT,Bootstrap Core for smooth,responsive pages.",
            technologies: ["C#","HTML","CSS","Bootstrap","JQuery"]
        }
    ],
    education: [
        {
            title: " Secondary School",
            degree: "Physics, Chemistry, and Mathematics",
            institution: "NVM Senior Secondary School",
            period: "2020-2022",
            coursework: [],
            location: "Delhi, India",
            logo: "assets/KV.png"
        },
        {
            title: "Bachelor of Technology",
            degree: "B.TECH in Mathematics and Computing",
            institution: "Delhi Technological University",
            period: "2022-2026",
            coursework: ["Data Structures & Algorithms", "Operating Systems", "Database Management Systems", "Computer Networks", "Object-Oriented Programming"],
            location: "Delhi, India",
            logo: "assets/DTU.png"
        }
    ],
    resumeUrl: "/resume.pdf",
    socials: {
        github: "https://github.com/akulcodes-art",
        linkedin: "https://www.linkedin.com/in/akul-chauhan-5b5734266"
    }
};