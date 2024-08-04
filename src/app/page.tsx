import banner from '@/app/assets/bannerbot-logo.webp';

import BannerImageWrapper from './components/BannerImageWrapper'; // We cannot directly use BannerImageComp because we can't wrap it inside redux provider in server side component i.e page.tsx

{/* Note :- To use client-side component {BannerImageComp.tsx} inside server-side component {page.tsx} 
that requires redux functionality need to be wrapped inside redux <Provider></Provider> in another file {BannerImageWrapper.tsx}
This wrapped component {BannerImageWrapper.tsx} we can use it inside server-side component {page.tsx}
Means Agar seedhi ungli se ghee na nikle to ungli tedhi karni padhti hai. */}
// Agar <Provider><BannerImageComp ads={ads} /></Provider> ko directly page.tsx mein import karenge toh error denga client-side component cannot be used inside server-side component.
// Isiliye apun ko BannerImageComp ko pehle doosre client-component mein Provider ke andar wrap karna honga
// Fir apun BannerImageWrapper ko use kar sakte server-side component mein.
import EditBannerWrapper from './components/EditBannerWrapper';

export default function Home() {

  return (
    <>
      <section className="flex flex-col justify-center items-center mt-14 w-fit mx-auto text-white border-none border-black">
        <img src={banner.src} alt='banner' className='w-[40%] h-[40%]' />
        <h1 className="font-sans text-[32px] font-bol">BannerBot</h1>
        <p className='mt-4 font-sans text-[20px]'>AI Banner Maker</p>
      </section>

      {/* Dialogue Box */}
      <EditBannerWrapper />

      {/* Banners */}
      <section className='grid grid-cols-2 mx-auto w-fit gap-2 mt-10 mb-10'>
        <BannerImageWrapper />
      </section>
      
    </>
  );
}