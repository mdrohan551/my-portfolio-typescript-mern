import React from 'react';
import { Helmet } from 'react-helmet-async';
import HomeBanner from '../components/Home/HomeBanner';
import HomeSidebar from '../components/Home/HomeSidebar';
import { homeBannerData, sideBarBannerData } from '../constants/Data/data';

const HomePage: React.FC = () => {
    return (
        <>
            {/* SEO Meta Tags for Homepage */}
            <Helmet>
                <title>{homeBannerData.title.join(' ')}</title>
                <meta name="description" content={homeBannerData.description} />
                <meta name="keywords" content={homeBannerData.skillTags.join(', ')} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Helmet>

            {/* Page content */}
            <div className="grid grid-cols-12 container mx-auto gap-5 px-2 pt-10">
                <div className="col-span-12 md:col-span-5 lg:col-span-3">
                    <HomeSidebar data={sideBarBannerData} />
                </div>
                <div className="col-span-12 md:col-span-9">
                    <HomeBanner data={homeBannerData} />
                </div>
            </div>
        </>
    );
};

export default HomePage;
