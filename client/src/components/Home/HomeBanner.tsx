import React from 'react'
import type { HomeBannerData } from '../../Typeinterface/InterfaceType'
import BannerHeading from './Bannercomponents/BannerHeading'
import SpecializationLogo from './Bannercomponents/SpecializationLogo'
import { projectMokcupImagesData, specializationData, testimonialMockupData } from '../../constants/Data/data'
import MockupWebsite from './Bannercomponents/MockupWebsite'
import TestimonialMockup from './Bannercomponents/TestimonialMockup'

type props = {
  data: HomeBannerData
}
const Banner: React.FC<props> = ({ data }) => {
  const { entryName, title, description, skillTags } = data;
  return (
    <div className="w-full flex flex-col gap-5">
      <BannerHeading entryName={entryName} title={title} description={description} skillTags={skillTags} />

      <div className="grid grid-cols-12 gap-2 z-20">
        <div className="col-span-4">
          <SpecializationLogo data={specializationData} />
        </div>
        <div className="col-span-4">
          <MockupWebsite data={projectMokcupImagesData} />
        </div>
        <div className="col-span-4">
          <TestimonialMockup data={testimonialMockupData} />
        </div>

      </div>


    </div>
  )
}

export default Banner
