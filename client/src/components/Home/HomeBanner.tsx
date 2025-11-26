import React from 'react'
import type { HomeBannerData } from '../../Typeinterface/InterfaceType'
import BannerHeading from './Bannercomponents/BannerHeading'
import Experience from './Bannercomponents/Experience'
type props = {
  data: HomeBannerData
}
const Banner: React.FC<props> = ({ data }) => {
  const { entryName, title, description, skillTags } = data;
  return (
    <div >
      <BannerHeading entryName={entryName} title={title} description={description} skillTags={skillTags} />
      <div className='grid grid-cols-12'>
        <div className='col-span-4 mt-8'>
          <Experience />
        </div>
      </div>
    </div>
  )
}

export default Banner