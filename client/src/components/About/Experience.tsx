import React from "react";
import { FaCheck } from "react-icons/fa";
import { experienceData } from "../../constants/Data/data";


const Experience: React.FC = () => {
    return (
        <div className="w-full py-6 px-5 bg-white shadow-lg rounded-2xl relative overflow-hidden">
        
            {/* Blur div on top layer but behind cards */}
            <div className="absolute w-100 h-100 blur-[10rem] rounded-full bg-primary/25  left-50 "></div>
            <div className="grid grid-cols-12 gap-4 relative z-10">
                {experienceData.map((exp, index) => {
                    const pct = Math.max(0, Math.min(100, Math.round(exp.percentage)));
                    return (
                        <div
                            key={index}
                            className="flex items-center shadow-lg col-span-12 md:col-span-6 lg:col-span-4 rounded-3xl ring-1 ring-Light_primary bg-white"
                        >
                            {/* Middle section */}
                            <div className="flex items-center gap-4 px-4 py-4 border-r border-gray-100">
                                {/* Circle check */}
                                <div className="relative flex items-center justify-center w-12 h-12">
                                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-Light_primary">
                                        <FaCheck className="text-secondary" />
                                    </div>
                                    {/* Circular ring */}
                                    <div
                                        className="absolute inset-0 rounded-full"
                                        style={{
                                            background: `conic-gradient(#4fa317ff ${pct}%, #e2fad17c ${pct}%)`,
                                            WebkitMask:
                                                "radial-gradient(circle, transparent 60%, #4fa317ff 61%)",
                                            mask: "radial-gradient(circle, transparent 60%, #4fa317ff 61%)",
                                        }}
                                    />
                                </div>
                                <div>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-sm font-bold text-gray-800">{pct}%</span>
                                        <span className="text-xs text-gray-400">Completed</span>
                                    </div>
                                    <span className="text-sm font-semibold text-gray-700">
                                        {exp.title}
                                    </span>
                                </div>
                            </div>
                        </div>
                    );
                })}


            </div>
        </div>
    );
};

export default Experience;
