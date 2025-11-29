import React from 'react'
import type { SpecializationItem } from '../../../Typeinterface/InterfaceType'
type Props = {
    data: SpecializationItem
}
const SpecializationLogo: React.FC<Props> = ({ data }) => {
    return (
        <>

            <div className='w-full mt-5 grid grid-cols-12 gap-5 bg-transparent shadow-lg px-5 py-8 rounded-2xl ring-1 ring-Light_primary hover:shadow-xl transition-all duration-300 hover:mb-1 relative'>

                {data.logo && data.logo.map((item, index) => (
                    <div key={index} className='col-span-6 md:col-span-3 flex justify-center'>
                        <div className=" shadow-lg p-3 w-full h-full rounded-lg flex items-center justify-center">
                            <img src={item.images} alt={item.images} className='w-full h-auto ' />
                        </div>
                    </div>
                ))}
                <div className='grid grid-cols-12 col-span-12 '>
                    <div className='col-span-6'>
                        <span className='text-sm text-gray-500 '>{data?.slug}</span>
                        <h3 className='text-xl text-secondary font-Yanone-Semibold uppercase tracking-[0.2rem]'>{data?.title}</h3>
                    </div>
                    <div className='col-span-6 flex flex-col items-end justify-center'>
                        <span className='text-sm text-gray-500 '>years of </span>
                        <h3 className='text-xl text-secondary font-Yanone-Semibold uppercase tracking-[0.2rem]'>Experience</h3>
                    </div>
              
                </div>

            </div>
        </>
    )
}

export default SpecializationLogo
