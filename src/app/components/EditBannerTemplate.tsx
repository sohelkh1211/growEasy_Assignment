'use client';

import { useSelector, useDispatch } from 'react-redux';
import { setIsOpen } from '../actions';
import CloseIcon from '@mui/icons-material/Close';
import Link from 'next/link';

interface stateType {
    state: boolean
}

const EditBannerTemplate = () => {
    const isOpen = useSelector((state: stateType) => state.state);
    const dispatch = useDispatch();
    
    return (
        <div className={`${isOpen ? 'absolute' : 'hidden'} flex flex-col w-[30%] ml-[35%] z-10 p-4 mt-10 bg-white rounded-tl-lg `}>

            {/* Edit Banner div */}
            <div className='flex flex-row justify-between w-full'>
                <h1 className=' text-slate-500'>Edit Banner</h1>
                <CloseIcon onClick={() => dispatch(setIsOpen())} className='cursor-pointer' />
            </div>

            {/* Images */}
            <p className='text-[12px] text-green-800 mt-2'>Image Attribution: <em>Photo by <Link target='_blank' rel="noopener" className='underline' href={`https://unsplash.com/@andrewtneel?utm_source=xyz.bannerbot&utm_medium=referral`}>Andrew Neel</Link></em> on <em className='underline'><Link target='_blank' rel="noopener" href={`https://unsplash.com/?utm_source=xyz.bannerbot&utm_medium=referral`}>Unsplash</Link></em></p>
            <h1 className='text-slate-500 mt-1 text-[15px]'>Images</h1>

            {/* Title input */}
            <label className='text-slate-500 mt-1 text-[15px]'>Title</label>
            <input type='text' placeholder='Enter Title' pattern='.{0, 20}' maxLength={20} className='outline-none font-[300] caret-slate-500 mt-2 px-2 py-1 border' />

            {/* Description */}
            <label className='text-slate-500 mt-4 text-[15px]'>Description</label>
            <input type='text' placeholder='Enter Description' pattern='.{0, 50}' maxLength={50} className='outline-none font-[300] caret-slate-500 mt-2 px-2 py-1 border' />

            {/* Button Text */}
            <label className='text-slate-500 mt-4 text-[15px]'>Button Text</label>
            <input type='text' placeholder='Button Text' pattern='.{0, 15}' maxLength={15} className='outline-none font-[300] caret-slate-500 mt-2 px-2 py-1 border' />

            {/* Done button */}
            <button className='mt-8 py-2 bg-emerald-900 text-white rounded-lg mb-4' onClick={() => dispatch(setIsOpen())}>Done</button>
        </div>
    )
}

export default EditBannerTemplate
