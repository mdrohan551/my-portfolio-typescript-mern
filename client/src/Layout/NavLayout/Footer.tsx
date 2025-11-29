import React from 'react';
import type { FooterProps, NavLink, SocialLink } from '../../Typeinterface/InterfaceType';
import Button_link from '../../components/button/Button_link';
import { myMap } from '../../constants/Data/data';
import Location from './Maplocation/Location';
import TitleHeading from '../../components/Titleheading.tsx/TitleHeading';

const SocialIcon: React.FC<{ link: SocialLink }> = ({ link }) => {
  const Icon = link.icon;
  return (
    <a href={link.url} target="_blank" rel="noopener noreferrer"
      className="text-gray-400 hover:text-white dark:hover:text-lime-400 transition-colors duration-200">
      <Icon className="w-5 h-5 md:w-6 md:h-6" />
    </a>
  );
};

const NavLinkItem: React.FC<{ link: NavLink }> = ({ link }) => {
  return (
    <a href={link.link}
      className="text-gray-400 text-sm md:text-base font-medium hover:text-white dark:hover:text-lime-400 transition-colors duration-200">
      {link.label}
    </a>
  );
};

const Footer: React.FC<FooterProps> = ({ data }) => {
  const { logoText, cta, navigation, socialLinks } = data;

  return (
    <div className=" mt-10 mb-5 ">
      <div className=" container  mx-auto rounded-3xl p-6 md:p-12 shadow-lg ring-1 ring-Light_primary  relative border-gray-700">
        <TitleHeading title="footer" span="Footer" className='text-[15rem] font-bold uppercase absolute -z-30 left-1/6 -top-20 text-gray-50' />

        {/* Changed to grid: responsive 1 column (mobile) -> 2 columns (md+) */}
        <div className='grid grid-cols-12  gap-6 border-b border-gray-700'>

          {/* LEFT COLUMN - keep original design & content */}
          <div className="grid col-span-12 md:col-span-6 items-start pb-12 md:pb-16 relative">
            <div className='w-100 h-100 blur-3xl rounded-full bg-primary/35 absolute bottom-0 -left-20 -z-10'></div>
            <div className="p-1 rounded-2xl mb-8 w-40 -z-30">
              <img src={logoText} alt="logo" className='w-full h-auto' />
            </div>

            <h2 className="text-3xl md:text-5xl font-extrabold mb-4 max-w-2xl leading-tight z-10">
              {cta.title}
            </h2>
            <p className="text-gray-500 mb-8 max-w-md text-sm md:text-base">
              {cta.subtitle}
            </p>
            <div className='w-50'>
              <Button_link
                href={cta.buttonLink}
                text={cta.buttonText}
                className='px-8 py-3'
              />
            </div>
          </div>

          {/* RIGHT COLUMN - Location (kept same, only wrapper remains) */}
          <div className="grid col-span-12 md:col-span-6 ">
            <div className="bg-transparent dark:bg-transparent rounded-2xl w-full ">
              <Location data={myMap} />
            </div>
          </div>

        </div>

        {/* Bottom row (copyright, nav, socials) - unchanged */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 gap-8">
          <div className="flex items-center gap-3 text-gray-700 text-sm">
            <div className="">&copy;</div>
            All Rights Reserved {new Date().getFullYear()}<a href="#" target='_blank' className='text-secondary font-inter font-extrabold uppercase -ml-2'>Rohan</a>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            {navigation.map(link => (
              <NavLinkItem key={link.label} link={link} />
            ))}
          </nav>

          <div className="flex gap-4 md:gap-6">
            {socialLinks.map(link => (
              <SocialIcon key={link.name} link={link} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default Footer;
