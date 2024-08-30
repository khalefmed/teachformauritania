'use client'

import React from 'react';
import '../../../i18n';
import { useTranslation } from "react-i18next";

export const Hero = () => {
    const {t} = useTranslation();
    return (
        <section id='hero' className='px-28 max-md:px-20 max-sm:px-8 flex flex-row max-lg:flex-col-reverse max-lg:gap-2 align-center justify-between max-md:justify-center items-center min-h-[calc(100vh-100px)] max-lg:min-h-screen   '>
            <div className='w-1/2 max-lg:w-full max-lg:text-center max-lg:items-center flex flex-col gap-5 '>
                <h3 className='text-blackColor text-4xl max-md:text-3xl max-sm:text-2xl font-black font-sora bg-clip-text text-transparent bg-gradient-to-r from-blackColor  to-secondBlackColor'>{t('hero_title')}</h3>
                <p className='text-blackColor text-lg max-md:text-lg max-sm:text-sm font-medium'>{t('hero_desc')}</p>
                <a href="#contact" className='px-4 py-3 flex flex-row align-center justify-center items-center gap-2 text-white w-fit bg-gradient-to-r from-blackColor   to-secondBlackColor rounded-lg shadow-lg shadow-shadow'>
                    <span className='text-sm'>{t('hero_button')}</span>
                    <svg width="15" height="15" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.5574 3.55737C11.8074 3.30741 12.1465 3.16699 12.5 3.16699C12.8536 3.16699 13.1926 3.30741 13.4427 3.55737L19.4427 9.55737C19.6926 9.80741 19.8331 10.1465 19.8331 10.5C19.8331 10.8536 19.6926 11.1927 19.4427 11.4427L13.4427 17.4427C13.1912 17.6856 12.8544 17.82 12.5048 17.8169C12.1552 17.8139 11.8208 17.6737 11.5736 17.4265C11.3264 17.1793 11.1862 16.8448 11.1831 16.4952C11.1801 16.1456 11.3145 15.8088 11.5574 15.5574L15.1667 11.8334H2.50002C2.1464 11.8334 1.80726 11.6929 1.55721 11.4429C1.30716 11.1928 1.16669 10.8537 1.16669 10.5C1.16669 10.1464 1.30716 9.80728 1.55721 9.55723C1.80726 9.30718 2.1464 9.16671 2.50002 9.16671H15.1667L11.5574 5.44271C11.3074 5.19267 11.167 4.85359 11.167 4.50004C11.167 4.14649 11.3074 3.80741 11.5574 3.55737Z" fill="white"/>
                    </svg>
                </a>
            </div>
            <div className=' w-[350px]    relative  flex justify-center align-center items-center h-[350px] max-lg:h-[350px]'>
                {/* <div className='w-[90%] h-[50%] bg-blurGreen  absolute bottom-20 rounded-full blur-[100px]'></div>
                <div className='w-[50%] h-[50%] bg-blurBlue absolute right-0 rounded-full blur-[100px]'></div> */}
                <img src="lynaat_shadow_logo.png"  alt="" className='w-[250px] max-md:w-[150px]' />
                <p className='w-36 py-2 max-md:w-24 text-center max-md:text-xs shadow-lg shadow-whiteShadow bottom-8 right-16 max-lg:bottom-24 max-lg:right-28 bg-white rounded-lg absolute font-medium text-blackColor'>{t('efficacite')}</p>
                <p className='w-36 py-2 max-md:w-24 text-center max-md:text-xs shadow-lg shadow-whiteShadow top-10 left-16 max-lg:top-24 max-lg:left-28 bg-white rounded-lg absolute font-medium text-blackColor'>{t('convivialite')}</p>
                <p className='w-36 py-2 max-md:w-24 text-center max-md:text-xs shadow-lg shadow-shadow left-0 top- max-lg:top-42   max-lg:left-12 bg-blackColor rounded-lg absolute font-medium text-white'>{t('competence')}</p>
                <p className='w-36 py-2 max-md:w-24 text-center max-md:text-xs shadow-lg shadow-shadow right-0 top-32 max-lg:top-36 max-lg:right-16 bg-blackColor rounded-lg absolute font-medium text-white'>{t('performance')}</p>
            </div>
        </section>
    )
}
