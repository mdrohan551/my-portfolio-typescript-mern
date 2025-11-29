// TabCard.tsx / TabCard.jsx
import React from "react";
import { FiArrowRight } from "react-icons/fi";
// নিচের InterfaceType ফাইলটি আপনার প্রজেক্টের পাথ অনুযায়ী পরিবর্তন করে নিন
import type { ProjectCard } from "../../Typeinterface/InterfaceType";
import { mydata } from "../../constants/Data/data";

type Props = {
    item: ProjectCard;
};

// একটি মকআপ ইউজার ইমেজ URL
 // একটি সাধারণ পোর্ট্রেট মকআপ ইমেজ

const TabCard: React.FC<Props> = ({ item }) => {
    return (
        <div className="relative bg-white p-6 shadow-xl rounded-2xl  font-sans border border-gray-100 transition-all duration-300 hover:shadow-2xl">
            <div className="flex items-center justify-between mb-6 shadow-xl p-4 rounded-xl">
                <div className="flex items-center">
                    {/* User Mockup Image */}
                    <img
                        className="w-10 h-10 rounded-full object-cover mr-3"
                        src={mydata?.image}
                        alt="Author Mockup"
                    />
                    <div>
                        <p className="text-sm font-semibold text-gray-800">{mydata?.name}</p>
                        <p className="text-xs text-gray-500 capitalize">{item.category}</p>
                    </div>
                </div>

                {/* Top Right Arrow (সবুজ তীর) */}
                <div className="w-6 h-6 bg-green-200 rounded-full flex items-center justify-center cursor-pointer opacity-70 transition duration-300 hover:opacity-100">
                    <FiArrowRight className="w-4 h-4 text-green-700 transform -rotate-45" />
                </div>
            </div>

            {/* 2. Main Image Container */}
            <div className="relative w-full  rounded-xl h-64 mb-6">
                <img
                    className="w-full h-full rounded-2xl object-cover "
                    src={item.image}
                    alt={item.title}
                />

                {item.showIcon && (
                    <div className="absolute -bottom-4 -right-3 w-18 h-18 bg-white rounded-xl flex items-center justify-center  transform  cursor-pointer transition-all duration-300 hover:scale-110">
                        <div className="bg-primary px-3 py-3 rounded-2xl">

                            <FiArrowRight className="w-7 h-7 text-white transform " />
                        </div>
                    </div>
                )}

            </div>

            {/* 3. Main Title Section */}
            <h2 className="text-xl  font-semibold uppercase leading-tight text-gray-900 ">
                {item.title}
            </h2>
            <p className="text-md md:text-lg text-gray-600 mt-2 capitalize">{item.slug.replace(/-/g, ' ')}</p>


        </div>
    );
};

export default TabCard;