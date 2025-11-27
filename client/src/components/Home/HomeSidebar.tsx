import React from 'react';
import Button_download from '../button/Button_download';
import Button_hire from '../button/Button_hire';
import type { SidebarBanner, SidebarBannerIcon } from '../../Typeinterface/InterfaceType';



type props = {
    data: SidebarBanner<SidebarBannerIcon>
}

const HomeSidebar: React.FC<props> = ({ data }) => {
    const { image, entryName, name, slug, email, phone, icons } = data;

    return (
        <div className="relative shadow-lg rounded-3xl p-4 group ring-Light_primary ring-2">
            <div className="absolute top-2 left-2 w-[calc(100%-16px)] h-[calc(45%-16px)] rounded-t-3xl bg-linear-to-r from-primary via-lime-600 to-secondary -z-10"></div>

            <img
                src={image}
                className="w-full h-auto rounded-t-3xl grayscale relative -z-10 group-hover:grayscale-0 transition-all duration-300"
                alt={`${name}-img`}
            />

            <div className="flex gap-3 -mt-10 bg-linear-to-r from-primary via-lime-600 to-secondary px-2 py-4 justify-center">
                {icons.map(({ Icon, href }, i) => (
                    <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="text-white ring px-1 py-1 rounded-full hover:scale-110 transition-transform duration-200">
                        <Icon  />
                    </a>
                ))}
            </div>

            <div className='py-5 text-center'>
                <h1 className='font-Yanone-Semibold uppercase text-2xl'>
                    {entryName} <span className='text-secondary'>{name}</span>
                </h1>
                <span className='text-md font-Yanone-Regular text-gray-700'>{slug}</span>
            </div>

            <div className='text-center'>
                <a className='text-sm text-gray-500' href={`mailto:${email}`}>
                    {email}
                </a>
                <br />
                <a className='text-sm text-gray-500' href={`tel:${phone}`}>
                    {phone}
                </a>
            </div>

            <div className='flex gap-2 justify-center py-4'>
                <Button_hire text='Hire Me' />
                <Button_download text="Download cv" />
            </div>
        </div>
    );
};

export default HomeSidebar;
