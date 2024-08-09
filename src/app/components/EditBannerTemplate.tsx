'use client';

import { useSelector, useDispatch } from 'react-redux';
import { setIsOpen } from '../actions';
import { setAds } from '../actions';
import CloseIcon from '@mui/icons-material/Close';

import Image, { StaticImageData} from 'next/image';
import Link from 'next/link';
import { ChangeEvent, useEffect, useState } from 'react';

type ImagePath = string | StaticImageData;

// Define the interface for the template object (assuming it's an object with a `src` property)
interface Template {
    src: string;
}

// Define the interface for an ad object
interface Ad {
    title: string;
    description: string;
    button: string;
    images: ImagePath[];
    template: Template;
}

interface stateType {
    toggle: boolean;
    template: number;
    update_template: Ad[];
    key: string;
}

const EditBannerTemplate = () => {
    const isOpen = useSelector((state: stateType) => state.toggle); // To open and close Dialogue Box.
    const template = useSelector((state: stateType) => state.template); // To capture index of template on which user clicked.

    const new_ads = useSelector((state: stateType) => state.update_template);
    const dispatch = useDispatch();

    // We can't directly update global new_ads variable, we need to first update it locally then we can use local state
    // variable ads2 to update global variable new_ads using useEffect Hook.
    const [ads2,setAds2] = useState(new_ads);
      
    const handleChange = (key: keyof Ad) => (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setAds2(new_ads.map((ad,i) => i === template ? { ...ad, [key]: value} : ad))
    }


    useEffect(() => {
        dispatch(setAds(ads2));
    }, [ads2]);
    
    return (
        <div className={`${isOpen ? 'absolute' : 'hidden'} flex flex-col w-[30%] ml-[35%] z-40 p-4 mt-10 bg-white rounded-tl-lg `}>

            {/* Edit Banner div */}
            <div className='flex flex-row justify-between w-full'>
                <h1 className=' text-slate-500'>Edit Banner</h1>
                <CloseIcon onClick={() => dispatch(setIsOpen())} className='cursor-pointer' />
            </div>

            {/* Images */}
            <p className='text-[12px] text-green-800 mt-2'>Image Attribution: <em>Photo by <Link target='_blank' rel="noopener" className='underline' href={`https://unsplash.com/@andrewtneel?utm_source=xyz.bannerbot&utm_medium=referral`}>Andrew Neel</Link></em> on <em className='underline'><Link target='_blank' rel="noopener" href={`https://unsplash.com/?utm_source=xyz.bannerbot&utm_medium=referral`}>Unsplash</Link></em></p>
            <h1 className='text-slate-500 mt-1 text-[15px]'>Images</h1>
            <div className='flex flex-row gap-x-4 mt-2 border overflow-x-auto'>
                {new_ads[template].images.map((img,adIndex) => (
                    <Image src={img} alt={`image${adIndex+1}`} className={`${adIndex !== 3 ? 'w-[80px] h-[80px]' : 'w-[80px] h-[80px]'} object-cover rounded-full cursor-pointer`} />
                ))}
            </div>

            {/* Title input */}
            <label className='text-slate-500 mt-1 text-[15px]'>Title</label>
            <input type='text' placeholder='Enter Title' pattern='.{0, 20}' maxLength={20} value={new_ads[template].title} onChange={handleChange("title")} className='outline-none font-[300] caret-slate-500 mt-2 px-2 py-1 border' />

            {/* Description */}
            <label className='text-slate-500 mt-4 text-[15px]'>Description</label>
            <input type='text' placeholder='Enter Description' pattern='.{0, 100}' maxLength={100} value={new_ads[template].description} onChange={handleChange("description")} className='outline-none font-[300] caret-slate-500 mt-2 px-2 py-1 border' />

            {/* Button Text */}
            <label className='text-slate-500 mt-4 text-[15px]'>Button Text</label>
            <input type='text' placeholder='Button Text' pattern='.{0, 15}' maxLength={15} value={new_ads[template].button} onChange={handleChange("button")} className='outline-none font-[300] caret-slate-500 mt-2 px-2 py-1 border' />

            {/* Done button */}
            <button className='mt-8 py-2 bg-emerald-900 text-white rounded-lg mb-4' onClick={() => dispatch(setIsOpen())}>Done</button>
        </div>
    )
}

export default EditBannerTemplate
