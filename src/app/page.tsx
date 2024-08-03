import banner from '@/app/assets/bannerbot-logo.webp';
// Templates
import square1 from '@/app/assets/square1.png';
import square2 from '@/app/assets/square2.png';
import square3 from '@/app/assets/square3.png';
import square4 from '@/app/assets/square4.png';
import square5 from '@/app/assets/square5.png';
import square6 from '@/app/assets/square6.png';
// Images
import business1 from '@/app/assets/business1.png';
import business2 from '@/app/assets/business2.png';
import business3 from '@/app/assets/business3.jpg';
import business4 from '@/app/assets/business4.jpg';
import business5 from '@/app/assets/business5.jpg';
import business6 from '@/app/assets/business6.jpg';

import BannerImageComp from './components/BannerImageComp';

export default function Home() {

  const ads = [{
    title: "Boost Your Leads",
    description: "Harness AI for Effective Campaigns",
    button: "Learn More",
    images: [business1, business2, business3, business4, business5, business6],
    template: square1
  }, {
    title: "Boost Your Leads",
    description: "Harness AI for Effective Campaigns",
    button: "Learn More",
    images: [business1, business2, business3, business4, business5, business6],
    template: square2
  }, {
    title: "Boost Your Leads",
    description: "Harness AI for Effective Campaigns",
    images: [business1, business2, business3, business4, business5, business6],
    button: "Learn More",
    template: square3
  }, {
    title: "Boost Your Leads",
    description: "Harness AI for Effective Campaigns",
    images: [business1, business2, business3, business4, business5, business6],
    button: "Learn More",
    template: square4
  }, {
    title: "Boost Your Leads",
    description: "Harness AI for Effective Campaigns",
    images: [business1, business2, business3, business4, business5, business6],
    button: "Learn More",
    template: square5
  }, {
    title: "Boost Your Leads",
    description: "Harness AI for Effective Campaigns",
    images: [business1, business2, business3, business4, business5, business6],
    button: "Learn More",
    template: square6
  }];
  // console.log(ads[2].template.src.slice(20,27) === "square3");

  return (
    <>
      <section className="flex flex-col justify-center items-center mt-14 w-fit mx-auto text-white border-none border-black">
        <img src={banner.src} alt='banner' className='w-[40%] h-[40%]' />
        <h1 className="font-sans text-[32px] font-bol">BannerBot</h1>
        <p className='mt-4 font-sans text-[20px]'>AI Banner Maker</p>
      </section>
      <section className='grid grid-cols-2 mx-auto w-fit gap-2 mt-10 mb-10'>
        <BannerImageComp ads={ads} />
      </section>
    </>
  );
}