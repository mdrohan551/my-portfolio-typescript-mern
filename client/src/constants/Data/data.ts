
import type { ExperienceItem, HomeBannerData, menuInterface, ProjectMokcupImages, SidebarBanner, SidebarBannerIcon, SpecializationItem, TestimonialLink, TestimonialMockupData } from "../../Typeinterface/InterfaceType";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import myimage from '/images/rohan.webp';
import react from '/images/react-logo.webp';
import nextjs from '/images/nextjs-logo.webp';
import js from '/images/js-logo.webp';
import redux from '/images/redux-logo.webp';
// project mokcup images
import mokcup1 from '/images/Website-Design-Mockup.jpg';
import mokcup2 from '/images/website_mockup.jpg';
import mokcup3 from '/images/website_mockup2jpg.jpg';
// testimonialMockupData
import testimonialImg from '/images/testimonialcover.png'
// nav bar 
export const navBar: menuInterface[] = [
    { title: "home", href: "/" },
    { title: "project", href: "/project" },
    { title: "services", href: "/services" },
    { title: "about us", href: "/about" },
    { title: "Blog", href: "/blog" },
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


// experience about us
export const experienceData: ExperienceItem[] = [
    { title: "HTML", percentage: 95 },
    { title: "CSS", percentage: 90 },
    { title: "JavaScript", percentage: 85 },
    { title: "React.js", percentage: 80 },
    { title: "Next.js", percentage: 75 },
    { title: "MERN Stack", percentage: 70 },
];


//  specialization services offer 
export const specializationData: SpecializationItem = {
    logo: [
        { images: react },
        { images: nextjs },
        { images: js },
        { images: redux },
    ],
    slug: "specialization",
    title: "Services Offer"
}


// project mokcup images data
export const projectMokcupImagesData: ProjectMokcupImages = {
    images: [mokcup1, mokcup2, mokcup3],
    slug: "showcase view",
    title: "Projects"

}

// what client say testimonial mockup
export const testimonialMockupData:TestimonialMockupData = {
    image: testimonialImg,
    slug: "What Client Say?",
    title: "testimonials"
}

// Example: src/constants/Data/data.ts
export const testimonialLinks:TestimonialLink[] = [
    {
        to: "/blog",
        smallText: "visit our blog",
        largeText: "blog",
        bg: "bg-gray-900",
        textColor: "text-white",
        icon: null, // যদি icon না থাকে
    },
    {
        to: "/contact-us",
        smallText: "Let's work",
        largeText: "contact",
        bg: "bg-primary",
        textColor: "text-white",
        icon: true, // icon দেখাতে চাইলে
    },
];