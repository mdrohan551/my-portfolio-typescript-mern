// BannerHeading.tsx
import React from 'react';
type BannerHeadingProps = {
    entryName: string;
    title: string[];
    description: string;
    skillTags: string[]
};

const BannerHeading: React.FC<BannerHeadingProps> = ({ entryName, title, description,skillTags }) => {
    return (
        <div className=" py-10 px-10 shadow-xl ring-1 ring-Light_primary rounded-2xl relative z-10 overflow-hidden">
            <div>
                <h2 className="capitalize font-bold text-gray-600 text-md  inline px-3 py-1 ring-1 ring-secondary rounded-2xl bg-Light_primary">{entryName}</h2>
                <h1 className="font-jakarta-bold text-7xl uppercase mt-5  ">
                    {title.map((text, index) => (
                        <span key={index} className="mr-2 tracking-tighter leading-15 nth-2:text-secondary nth-2:block ">{text}</span>
                    ))}
                </h1>
                <div className='w-100 h-100 blur-3xl rounded-full bg-primary/25 absolute -top-20 left-0 -z-10'></div>
            </div>

            <p className='text-justify text-sm mt-5 text-gray-800 font-medium '>{description}</p>
            <ul className="flex flex-wrap gap-2 mt-5">
                {skillTags.map((tag, idx) => (
                    <li key={idx} className="px-2 py-1 bg-gray-50 text-gray-400 rounded text-sm">{tag}</li>
                ))}
            </ul>


        </div>

    );
};

export default BannerHeading;
