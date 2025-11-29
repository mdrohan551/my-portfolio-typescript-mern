
import type { ExperienceItem, FooterData, HomeBannerData, MapData, menuInterface, ProjectCard, ProjectMokcupImages, SidebarBanner, SidebarBannerIcon, SpecializationItem, TestimonialLink, TestimonialMockupData } from "../../Typeinterface/InterfaceType";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
// my logo dark white 
import logoWhite from '/lightlogo.png';
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
import { AiOutlineThunderbolt } from "react-icons/ai";
// map data 
import mapImg from '/images/map.png';
// nav bar 
export const navBar: menuInterface[] = [
  { title: "home", href: "/" },
  { title: "project", href: "/project" },
  { title: "services", href: "/services" },
  { title: "about us", href: "/about" },
  { title: "Blog", href: "/blog" },
  { title: "FAQs", href: "/faq" },
]

// side bar banner data 
export const mydata: SidebarBanner<SidebarBannerIcon> = {
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
    { Icon: FaGithub, href: "https://github.com" },
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
export const testimonialMockupData: TestimonialMockupData = {
  image: testimonialImg,
  slug: "What Client Say?",
  title: "testimonials"
}

// Example: src/constants/Data/data.ts
export const testimonialLinks: TestimonialLink[] = [
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



// footer 
// মক ডেটা: React Icons এবং ইন্টারফেস ব্যবহার করে তৈরি
export const mockFooterData: FooterData = {
  // লোগো টেক্সট
  logoText: logoWhite,

  // CTA সেকশনের ডেটা
  cta: {
    // CTA টপ আইকন: AiOutlineThunderbolt ব্যবহার করা হলো
    iconPlaceholder: AiOutlineThunderbolt,
    title: "Ready to Build Something Extraordinary?",
    subtitle: "Let’s turn your ideas into scalable, high-performance digital experiences.",
    buttonText: "Start Now",
    buttonLink: "/contact-us",
  },

  // নেভিগেশন লিঙ্ক
  navigation: [
    { link: "#contact", label: "Contact" },
    { link: "#privacy", label: "Privacy" },
    { link: "#faqs", label: "FAQs" },
  ],

  // সোশ্যাল মিডিয়া লিঙ্ক
  socialLinks: [
    { name: "Github", url: "#", icon: FaGithub }, // X (Twitter)
    { name: "Instagram", url: "#instagram", icon: FaInstagram },
    { name: "Facebook", url: "#facebook", icon: FaFacebook },
    { name: "LinkedIn", url: "#linkedin", icon: FaLinkedin },

  ]
};

export const myMap: MapData = {
  title: "My Location",
  mapLink:
    "https://maps.app.goo.gl/3MzbzwkgcvEdsmU36",
  image: mapImg
};

// home project mockup data


export const projectData: ProjectCard[] = [
  {
    id: 1,
    title: "UI Design Concept",
    slug: "modern minimal ui",
    image: "https://images.unsplash.com/photo-1640622658992-3f89d831bdb1",
    category: "design",
    showIcon: true
  },
  {
    id: 2,
    title: "Brand Design System",
    slug: "creative brand ui",
    image: "https://images.unsplash.com/photo-1581091870627-3a684eec73ec",
    category: "design",
    showIcon: true
  },
  {
    id: 3,
    title: "Dashboard Mockup",
    slug: "analytics dashboard",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766",
    category: "design",
    showIcon: true
  },

  {
    id: 4,
    title: "REST API Service",
    slug: "node express api",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb",
    category: "api",
    showIcon: true
  },
  {
    id: 5,
    title: "Auth API System",
    slug: "jwt passport",
    image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769",
    category: "api",
    showIcon: true
  },
  {
    id: 6,
    title: "Payment API",
    slug: "stripe integration",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    category: "api",
    showIcon: true
  },

  {
    id: 7,
    title: "Inventory Manager",
    slug: "warehouse software",
    image: "https://images.unsplash.com/photo-1581091012184-5c1f9f7b6858",
    category: "inventory",
    showIcon: true
  },
  {
    id: 8,
    title: "Stock Tracker",
    slug: "product stock module",
    image: "https://images.unsplash.com/photo-1509395176047-4a66953fd231",
    category: "inventory",
    showIcon: true
  },
  {
    id: 9,
    title: "Barcode Scanner",
    slug: "auto scan system",
    image: "https://images.unsplash.com/photo-1527430253228-e93688616381",
    category: "inventory",
    showIcon: true
  },

  {
    id: 10,
    title: "E-commerce Store",
    slug: "fashion ecommerce",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    category: "ecommerce",
    showIcon: true
  },
  {
    id: 11,
    title: "Digital Shop",
    slug: "gadget shop",
    image: "https://images.unsplash.com/photo-1588591795212-48e8f67ed1fd",
    category: "ecommerce",
    showIcon: true
  },
  {
    id: 12,
    title: "Online Store UI",
    slug: "modern ecommerce ui",
    image: "https://images.unsplash.com/photo-1557825835-30c1eacc3d32",
    category: "ecommerce",
    showIcon: true
  }
];



