'use client'

import React from 'react';
import '../../../i18n';
import { useTranslation } from "react-i18next";

export const WhyUs = () => {
    const {t} = useTranslation();
    
    return (
        <section className='p-28 flex flex-col gap-16 max-sm:gap-8 max-sm:px-0'>
            <h1 className='text-center max-md:text-3xl max-sm:px-4 max-sm:text-2xl text-transparent bg-clip-text font-bold  text-4xl tracking-[0.25rem] uppercase bg-gradient-to-r from-mainGreen to-secondGreen'>Pourquoi nous choisir ?</h1>
            <div className='flex flex-row flex-wrap  justify-center gap-16 py-12 max-sm:px-0'>
                <div className='w-[340px] h-[385px] max-sm:h-[340px] why-us-container relative p-0  '>
                    <div className=" bg-white h-full rounded-lg p-4  absolute">
                        <h3 className='text-lg font-semibold text-blackColor'>{t('why_us_1')}</h3>
                        <p className='text-sm font-medium text-blackColor leading-[25px]'>{t('why_us_1_desc')}
                        </p>
                    </div>
                </div>
                <div className='w-[340px] h-[385px] max-sm:h-[340px] why-us-container relative   '>
                    <div className=" bg-white h-full rounded-lg p-4  absolute">
                        <h3 className='text-lg font-semibold text-blackColor'>{t('why_us_2')}</h3>
                        <p className='text-sm font-medium text-blackColor leading-[25px]'>{t('why_us_2_desc')}
                        </p>
                    </div>
                </div>
                <div className='w-[340px] h-[385px] max-sm:h-[340px] why-us-container relative   '>
                    <div className=" bg-white h-full rounded-lg p-4  absolute">
                        <h3 className='text-lg font-semibold text-blackColor'>{t('why_us_3')}</h3>
                        <p className='text-sm font-medium text-blackColor leading-[25px]'>{t('why_us_3_desc')}
                        </p>
                    </div>
                </div>
                
            </div>
        </section>
    )
}
