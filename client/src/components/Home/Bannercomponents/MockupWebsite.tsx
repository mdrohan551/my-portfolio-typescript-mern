import React from 'react'
import type { ProjectMokcupImages } from '../../../Typeinterface/InterfaceType'
import { Link } from 'react-router-dom'
type props = {
    data: ProjectMokcupImages
}
const MockupWebsite: React.FC<props> = ({ data }) => {
    return (
        <>

            <Link to={`/project`} className='w-full z-20 mt-5 grid grid-cols-12 gap-1 bg-transparent shadow-lg px-5 py-8 rounded-2xl ring-1 ring-Light_primary hover:shadow-xl transition-all duration-300  relative'>

                {data.images && data.images.map((item, index) => (
                    <div key={index} className='col-span-6 md:col-span-4 flex justify-center bg-white'>
                        <div className=" shadow-lg p-1 w-full h-full rounded-lg flex items-center justify-center">
                            <img src={item} alt={item} className='w-full h-auto ' />
                        </div>
                    </div>
                ))}
                <div className='col-span-6 mt-1 '>
                    <span className='text-sm text-gray-500 '>{data?.slug}</span>
                    <h3 className='text-xl text-secondary font-Yanone-Semibold uppercase tracking-[0.2rem]'>{data?.title}</h3>
                </div>
                {/* Background blur circle */}
                <div className="absolute inset-0 bottom-0 -z-10">
                    <div className="w-50 h-50 bg-primary/25 rounded-full blur-3xl"></div>
                </div>

            </Link>
        </>
    )
}

export default MockupWebsite