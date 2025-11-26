
import type { ExperienceItem, HomeBannerData, menuInterface, SidebarBanner, SidebarBannerIcon } from "../../Typeinterface/InterfaceType";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import myimage from '../../assets/images/rohan.png'

// nav bar 
export const navBar: menuInterface[] = [
    { title: "home", href: "/" },
    { title: "project", href: "/project" },
    { title: "services", href: "/services" },
    { title: "about us", href: "/Blog" },
    { title: "faq", href: "/faq" },
]

// side bar banner data 
export const sideBarBannerData: SidebarBanner<SidebarBannerIcon> = {
    image: myimage,
    entryName: "Hy! i'm",
    name: " Rohan Mohammad",
    slug: "Software Engineer || Next.js || MERN",
    email: "armanhossain0175019@gmail.com",
    phone: "01750192098",
    icons: [
        { Icon: FaFacebook, href: "https://facebook.com" },
        { Icon: FaInstagram, href: "https://instagram.com" },
        { Icon: FaLinkedin, href: "https://linkedin.com" },
        { Icon: FaTwitter, href: "https://twitter.com" },
    ]
};

// home  banner data  

// data.ts (বা যেখানে তুমি ডেটা রাখো)


export const homeBannerData: HomeBannerData = {
    entryName: "Hi! there, I'm",
    title: ["Professional", "Web Application", "Specialist"],
    description:
        " Full-stack web developer skilled in building high-performance, responsive web applications. Experienced in both front-end (JavaScript, TypeScript, React, Next.js) and back-end (Node.js, Express, MongoDB) development. Proficient in Redux, Tailwind CSS, and Git for delivering production-ready applications.",

    // skillTags = website keywords / filters (lowercase, concise)
    skillTags: [
        "javascript",
        "es6",
        "typescript",
        "react",
        "nextjs",
        "nodejs",
        "express",
        "mongodb",
        "redux",
        "redux-toolkit",
        "tailwindcss",
        "html5",
        "css3",
        "rest",
        "testing-library",
        "git",

    ]
};


// experience 
export const experienceData: ExperienceItem[] = [
    { title: "HTML", percentage: 95 },
    { title: "CSS", percentage: 90 },
    { title: "JavaScript", percentage: 85 },
    { title: "React.js", percentage: 80 },
    { title: "Next.js", percentage: 75 },
    { title: "MERN Stack", percentage: 70 },
];