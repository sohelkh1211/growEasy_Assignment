// 'use client';
import banner from '@/app/assets/bannerbot-logo.webp';
import square1 from '@/app/assets/square1.png';
import square2 from '@/app/assets/square2.png';
import square3 from '@/app/assets/square3.png';
import square4 from '@/app/assets/square4.png';
import square5 from '@/app/assets/square5.png';
import square6 from '@/app/assets/square6.png';

export default function Home() {

  const ads = [{
    title: "Boost Your Leads",
    description: "Harness AI for Effective Campaigns",
    button: "Learn More",
    images: [],
    template: square1
  }, {
    title: "Boost Your Leads",
    description: "Harness AI for Effective Campaigns",
    button: "Learn More",
    images: [],
    template: square2
  }, {
    title: "Boost Your Leads",
    description: "Harness AI for Effective Campaigns",
    images: [],
    button: "Learn More",
    template: square3
  }, {
    title: "Boost Your Leads",
    description: "Harness AI for Effective Campaigns",
    images: [],
    button: "Learn More",
    template: square4
  }, {
    title: "Boost Your Leads",
    description: "Harness AI for Effective Campaigns",
    images: [],
    button: "Learn More",
    template: square5
  }, {
    title: "Boost Your Leads",
    description: "Harness AI for Effective Campaigns",
    images: [],
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
        {ads.map((ad, index) => (
          <div key={index} style={{ backgroundImage: `url(${ad.template.src}), linear-gradient(rgba(0, 0, 0, 0.2), transparent)`, backgroundSize: 'cover', backgroundBlendMode: 'overlay'}} className={`flex flex-col w-[300px] h-[300px]`}>
            <svg xmlns="http://www.w3.org/2000/svg" className='w-[7%] h-[7%] mt-4 ml-[270px] cursor-pointer' viewBox="0 0 256 256">
              <g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDashoffset="0" textAnchor="none" style={{ mixBlendMode: 'normal'}} >
                <g transform="scale(5.33333,5.33333)">
                  <path d="M38.657,18.536l2.44,-2.44c2.534,-2.534 2.534,-6.658 0,-9.193c-1.227,-1.226 -2.858,-1.9 -4.597,-1.9c-1.739,0 -3.371,0.675 -4.597,1.901l-2.439,2.439zM27.343,11.464l-18.069,18.069c-0.385,0.385 -0.678,0.86 -0.848,1.375l-3.35,10.121c-0.179,0.538 -0.038,1.131 0.363,1.532c0.287,0.286 0.669,0.439 1.061,0.439c0.158,0 0.317,-0.025 0.472,-0.076l10.118,-3.351c0.517,-0.17 0.993,-0.463 1.378,-0.849l18.068,-18.068z"></path>
                </g>
              </g>
            </svg>
            {ad.template.src.slice(20,27) === "square1" || ad.template.src.slice(20,27) === "square3" || ad.template.src.slice(20,27) === "square6" ? <h1 className={`ml-[8%] ${ad.template.src.slice(20,27) === "square6" ? 'text-white' : ''} text-[28px] w-[60%] font-bold font-sans leading-7`}>{ad.title}</h1>: 
            ad.template.src.slice(20,27) === "square2" || ad.template.src.slice(20,27) === "square5" ? <h1 className={`mx-auto -mt-3 text-white text-[28px] w-[60%] text-center font-bold font-sans leading-7`}>{ad.title}</h1> : 
            ad.template.src.slice(20,27) === "square4" ? <h1 className='ml-[8%] text-white text-[28px] w-[40%] font-bold font-sans leading-7'>{ad.title}</h1> : ""}

            {ad.template.src.slice(20,27) === "square1" || ad.template.src.slice(20,27) === "square4" ? <p className={`ml-[8%] ${ad.template.src.slice(20,27) === "square1" ? "w-[50%] mt-[2rem]" : "w-[40%] mt-[1rem] text-white"} text-[14px] font-sans leading-4`}>{ad.description}</p> : 
            ad.template.src.slice(20,27) === "square2" || ad.template.src.slice(20,27) === "square5" ? <p className={`mx-auto text-[14px] text-center w-[70%] ${ad.template.src.slice(20,27) === "square2" ? "mt-2.5 text-white" : "mt-5 text-cyan-800"} leading-4`}>{ad.description}</p> :
            ad.template.src.slice(20,27) === "square3" || ad.template.src.slice(20,27) === "square6" ? <p className={`ml-[8%] text-[14px] mt-4 ${ad.template.src.slice(20,27) === "square3" ? "w-[40%]" : "w-[38%] text-white"} leading-4`}>{ad.description}</p> : "" }

            {ad.template.src.slice(20,27) === "square1" || ad.template.src.slice(20,27) === "square4" || ad.template.src.slice(20,27) === "square5" || ad.template.src.slice(20,27) === "square6" ? <button className={`w-fit px-3 py-1.5 ${ad.template.src.slice(20,27) === "square1" ? "ml-[8%] text-orange-400 bg-[#212121] mt-20 text-left rounded-md" : ad.template.src.slice(20,27) === "square4" ? "ml-[8%] mt-14 bg-white text-cyan-600 rounded-md" : ad.template.src.slice(20,27) === "square5" ? "mt-28 ml-[60%] text-white font-bold bg-cyan-500 rounded-md" : ad.template.src.slice(20,27) === "square6" ? "mt-10 ml-[8%] text-white bg-orange-600 rounded-sm" : "" } text-[14px]`}>{ad.button}</button> :
            ad.template.src.slice(20,27) === "square2" ? <button className='text-left mt-32 pl-2 ml-[14%] w-fit text-[14px] font-bold'>{ad.button}</button> : 
            <button className='text-left w-fit ml-[8%] mt-[89px] font-bold'>{ad.button}</button>}

          </div>
        ))}
      </section>
    </>
  );
}