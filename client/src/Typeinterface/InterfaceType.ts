// masterLayout interface 
export interface MasterLayoutProps {
  hideFooter?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export interface menuInterface {
  title: string;
  href?: string;
}


// sidebar banner data 
export interface SidebarBannerIcon {
  Icon: React.ComponentType;
  href: string;
}

export interface SidebarBanner<T> {
  image: string;
  entryName: string;
  name: string;
  slug: string;
  email: string;
  phone: number | string;
  icons: T[];
}


// home banner interface 




export interface HomeBannerData {
  entryName: string,
  title: string[];
  description: string,

  skillTags: string[],
}

// Experience
export interface ExperienceItem {
  title: string;
  percentage: number;
}

// Services specialization data
export interface techologyItem {
  images: string;
}
export interface SpecializationItem {
  logo?: techologyItem[];
  slug: string;
  title: string;
}


// project mokcup images data 
export interface ProjectMokcupImages {
  images: string[];
  slug: string;
  title: string;
}

// testimonial mockup data
export interface TestimonialMockupData {
  image: string;
  slug: string;
  title: string;
}
export interface TestimonialLink {
  to: string;
  bg: string;
  textColor: string;
  smallText: string;
  largeText: string;
  icon?: React.ComponentType | boolean | null;
}


// footer interface 



export interface SocialLink {
  name: string;
  url: string;
  // React-icons ব্যবহারের জন্য React.ComponentType
  icon: React.ComponentType<{ className?: string }>;
}

export interface NavLink {
  link: string;
  label: string;
}

export interface FooterData {
  logoText: string;
  cta: {
    iconPlaceholder: React.ComponentType<{ className?: string }>;
    title: string;
    subtitle: string;
    buttonText: string;
    buttonLink: string;
  };
  navigation: NavLink[];
  socialLinks: SocialLink[];
}

export interface FooterProps {
  data: FooterData;
}

// footer map 
export interface MapData {
  title: string;
  mapLink: string; // Google map embed link
  image: string;
}


// work project mockup 
export interface ProjectCard {
  id: number;
  title: string;
  slug: string;
  image: string;
  category: "design" | "api" | "inventory" | "ecommerce";
  showIcon?: boolean;
}
