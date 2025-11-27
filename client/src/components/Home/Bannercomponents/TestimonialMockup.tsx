import React from 'react'
import type { TestimonialMockupData } from '../../../Typeinterface/InterfaceType'
import { Link } from 'react-router-dom'

import { FiArrowRight } from 'react-icons/fi'
import { testimonialLinks } from '../../../constants/Data/data'
type props = {
    data: TestimonialMockupData
}


const TestimonialMockup: React.FC<props> = ({ data }) => {

    return (

        <div className='w-full mt-5 grid grid-cols-12 gap-5 bg-transparent shadow-lg px-3 py-3 rounded-2xl ring-1 ring-Light_primary hover:shadow-xl transition-all duration-300 hover:mb-1 relative'>

            <div className="col-span-12">
                <Link to="/testimonial" className='relative rounded-xl group'>
                    <img
                        src={data?.image}
                        alt={data?.title}
                        className='w-full h-auto object-cover object-center rounded-xl group-hover:ring-2 group-hover:ring-red-600 transition-all duration-300'
                    />

                    {/* overlay */}
                    <div className='absolute inset-0 bg-gray-950/40 flex flex-col justify-end p-2 rounded-xl'>

                        {/* hover icon */}
                        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-10 w-10 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                        </div>

                        {/* text */}
                        <span className='text-sm text-white'>{data?.slug}</span>
                        <h3 className='text-xl text-white font-Yanone-Semibold uppercase tracking-[0.2rem]'>
                            {data.title}
                        </h3>

                    </div>
                </Link>

                <div className='grid grid-cols-12 gap-2'>
                    {testimonialLinks.map((link, idx) => (
                        <div className="col-span-6" key={idx}>
                            <Link
                                to={link.to}
                                className={`flex rounded-xl px-2 py-1 flex-col mt-2 font-jakarta-Medium group hover:bg-Light_primary hover:ring-1 hover:ring-gray-900 transition-all duration-300 ${link.bg} ${link.textColor} relative`}
                            >
                                <span className='text-sm text-gray-100 group-hover:text-gray-700 transition-all duration-300'>{link.smallText}</span>
                                <span className='text-2xl uppercase tracking-[0.2rem] font-Yanone-Semibold group-hover:text-gray-900 transition-all duration-300'>{link.largeText}</span>

                                {link.icon === true && (
                                    <FiArrowRight className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-800 bg-white w-8 h-8 rounded-full group-hover:text-white group-hover:bg-gray-900 group-hover:-rotate-45 transition-all duration-300" />
                                )}
                            </Link>
                        </div>
                    ))}
                </div>



            </div>


        </div>
    )
}

export default TestimonialMockup