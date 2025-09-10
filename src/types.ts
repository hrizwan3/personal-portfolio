export type TabKey = "Home" | "Experience" | "Projects";


export type ExperienceItem = {
    company: string;
    role: string;
    time: string;
    bullets: string[];
};


export type ProjectItem = {
    name: string;
    blurb: string;
    stack: string[];
    time: string;
    links: { label: string; href: string }[];
};