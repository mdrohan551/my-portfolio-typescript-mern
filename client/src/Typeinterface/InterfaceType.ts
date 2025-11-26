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