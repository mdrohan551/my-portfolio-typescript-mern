import React from 'react'

const TitleHeading: React.FC<{ title: string, span: string, className: string }> = ({ title, span, className }) => {
    return (

        <>
            <h1 className={className}>{title}</h1>
            <div className="flex justify-center items-center ">
                <div className="relative">
                    <h2 className="text-4xl tracking-[0.1rem] px-5 py-2 rounded-2xl text-gray-800 font-Yanone-Semibold mb-4 text-center capitalize inline-block">
                        {span}
                    </h2>
                    {/* Image positioned left of text */}
                    {[0, 1].map((_, index) => (
                        <img
                            key={index}
                            src="/light.webp"
                            alt="light star"
                            className={`w-6 h-6 absolute top-3 right-0  `}
                            
                        />
                    ))}
                </div>
            </div>


        </>
    )
}

export default TitleHeading