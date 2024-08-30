'use client'
import React from 'react';
import '../../../i18n';
import { useTranslation } from "react-i18next";

export const About = () => {
    const {t} = useTranslation();
    return (
        <section id="about" className='flex flex-col p-28 gap-12 max-md:p-8   '>
            <h1 className='text-center max-md:text-3xl text-transparent bg-clip-text font-bold  text-4xl tracking-[0.25rem] uppercase bg-gradient-to-r from-mainGreen to-secondGreen'>{t('about')}</h1>
            <div className='flex flex-row max-lg:flex-col gap-28 max-xl:gap-4  items-center '>
                <div className='w-2/3 max-lg:w-full text-blackColor font-medium text-md border-l-[3px] leading-[30px] border-mainGreen px-4 h-fit'>
                {t('about_desc')}
                </div>
                <div className='flex flex-col max-md:w-3/4 max-sm:w-full gap-3 items-center justify-center '>
                    <div className='flex flex-row items-center gap-3 w-full px-4 py-3 shadow-whiteShadow shadow-lg rounded-lg'>
                        <img src='/mission_icon.png' width={40} height={40} alt="" />
                        <div className='flex flex-col'>
                            <h4 className='font-semibold text-blackColor text-md'>{t('mission')}</h4>
                            <p className='text-blackColor font-normal text-xs'>{t('mission_desc')}</p>
                        </div>
                    </div>
                    <div className='flex flex-row items-center gap-3 w-full px-4 py-3 shadow-whiteShadow shadow-lg rounded-lg'>
                        <img src='/vision_icon.png' width={40} height={40} alt="" />
                        <div className='flex flex-col'>
                            <h4 className='font-semibold text-blackColor text-md'>{t('vision')}</h4>
                            <p className='text-blackColor font-normal text-xs'>{t('vision_desc')}</p>
                        </div>
                    </div>
                    <div className='flex flex-row items-center gap-3 w-full px-4 py-3 shadow-whiteShadow shadow-lg rounded-lg'>
                        <img src='/commitment_icon.png' width={40} height={40} alt="" />
                        <div className='flex flex-col'>
                            <h4 className='font-semibold text-blackColor text-md'>{t('commitment')}</h4>
                            <p className='text-blackColor font-normal text-xs'>{t('commitment_desc')}</p>
                        </div>
                    </div>

                </div>

            </div>


        </section>
    )
}
