import React from "react";
import { experienceData } from "../../../constants/Data/data";


const Experience: React.FC = () => {
  return (
    <div className="w-full  py-10 px-5 shadow-xl rounded-2xl">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">My Experience</h2>

      <div className="space-y-6">
        {experienceData.map((exp, index) => (
          <div key={index} className="w-full">
            <div className="flex justify-between mb-1">
              <span className="text-gray-700 font-medium">{exp.title}</span>
              <span className="text-gray-600 font-semibold">{exp.percentage}%</span>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-200 h-3 rounded-lg overflow-hidden">
              <div
                className="h-full bg-blue-500 rounded-lg transition-all duration-700"
                style={{ width: `${exp.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
