export interface Project {
    id: string;
    title: string;
    description: string;
    readme?: string;
    gallery?: string[];
    technologies: string[];
    liveDemo?: string;
    sourceCode?: string;
}

export interface Skill {
    category: string;
    technologies: string[];
}

export interface WorkExperience {
    role: string;
    company: string;
    period: string;
    description: string;
    technologies?: string[];
}

export interface Education {
    title?: string; // e.g., Schooling, Graduation, Post Graduation
    degree: string;
    institution: string;
    period: string;
    coursework: string[] | string;
    location?: string;
    logo?: string;
}

export interface PortfolioData {
    name: string;
    aboutHome: string;
    aboutPage: string;
    projects: Project[];
    skills: Skill[];
    workExperience: WorkExperience[];
    education: Education[];
    resumeUrl?: string;
    socials?: {
        github?: string;
        linkedin?: string;
        twitter?: string;
        email?: string;
    };
}
