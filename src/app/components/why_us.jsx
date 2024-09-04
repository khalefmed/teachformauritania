'use client'

import React from 'react';
import '../../../i18n';
import { useTranslation } from "react-i18next";
import { motion, useAnimation } from 'framer-motion';

export const WhyUs = () => {
    const {t, i18n} = useTranslation();

    console.log(i18n.language == "ar")
    
    return (
        <section className=' max-w-screen overflow-hidden p-28 max-lg:p-16 flex flex-col gap-16 max-sm:gap-8 max-sm:px-4'>
            { i18n.language == "ar" 
            ? 
            <h1 className='text-center max-md:text-3xl text-transparent bg-clip-text font-bold  text-4xl  uppercase bg-gradient-to-r from-mainGreen to-secondGreen'>{t('why_us')}</h1>
            : 
            <h1 className='text-center max-md:text-3xl text-transparent bg-clip-text font-bold  text-4xl tracking-[0.25rem] uppercase bg-gradient-to-r from-mainGreen to-secondGreen'>{t('why_us')}</h1>
            }
            <div className='flex flex-row flex-wrap  justify-center gap-16 py-12 max-sm:px-0 max-lg:hidden'>
            <motion.div
                initial = {{
                    x : 0,
                    y : 0,
                    scale : 0.8,
                    opacity : 0,
                }}
                whileInView = {{
                    x : 0,
                    y : 0,
                    scale : 1,
                    opacity : 1,
                    transition : {duration : 1}
                }}
                className='w-[340px] h-[340px] max-sm:min-h-[300px] why-us-container relative p-0  '>
                    <div className=" bg-white h-full rounded-lg p-4  absolute">
                        <h3 className='text-lg font-semibold text-blackColor'>{t('why_us_1')}</h3>
                        <p className='text-sm font-medium text-blackColor leading-[25px]'>{t('why_us_1_desc')}
                        </p>
                    </div>
                </motion.div>
                <motion.div
                initial = {{
                    x : 0,
                    y : 0,
                    scale : 0.8,
                    opacity : 0,
                }}
                whileInView = {{
                    x : 0,
                    y : 0,
                    scale : 1,
                    opacity : 1,
                    transition : {duration : 1}
                }}
                className='w-[340px] min-h-[340px] max-sm:min-h-[300px] why-us-container relative   '>
                    <div className=" bg-white h-full rounded-lg p-4  absolute">
                        <h3 className='text-lg font-semibold text-blackColor'>{t('why_us_2')}</h3>
                        <p className='text-sm font-medium text-blackColor leading-[25px]'>{t('why_us_2_desc')}
                        </p>
                    </div>
                </motion.div>
                <motion.div
                initial = {{
                    x : 0,
                    y : 0,
                    scale : 0.8,
                    opacity : 0,
                }}
                whileInView = {{
                    x : 0,
                    y : 0,
                    scale : 1,
                    opacity : 1,
                    transition : {duration : 1}
                }}
                className='w-[340px] h-[340px] max-sm:min-h-[300px] why-us-container relative   '>
                    <div className=" bg-white h-full rounded-lg p-4  absolute">
                        <h3 className='text-lg font-semibold text-blackColor'>{t('why_us_3')}</h3>
                        <p className='text-sm font-medium text-blackColor leading-[25px]'>{t('why_us_3_desc')}
                        </p>
                    </div>
                </motion.div>
                
            </div>


            <div className={'flex flex-row flex-wrap  justify-center gap-16 py-0 max-sm:px-4   lg:hidden ' + (i18n.language === "ar" ? "border-r-2 border-mainGreen" : "border-l-2 border-mainGreen")}>
            <motion.div
                initial = {{
                    x : i18n.language == "ar" ? -100 : 100,
                    y : 0,
                    scale : 1,
                    opacity : 0,
                }}
                whileInView = {{
                    x : 0,
                    y : 0,
                    scale : 1,
                    opacity : 1,
                    transition : {duration : 1}
                }}
                className='w-full '>
                    <div className=" bg-white h-full rounded-lg p-4 ">
                        <h3 className='text-lg font-semibold text-blackColor mb-2'>{t('why_us_1')}</h3>
                        <p className='text-sm font-medium text-blackColor leading-[25px]'>{t('why_us_1_desc')}
                        </p>
                    </div>
                </motion.div>
                <motion.div
                initial = {{
                    x : i18n.language == "ar" ? -100 : 100,
                    y : 0,
                    scale : 1,
                    opacity : 0,
                }}
                whileInView = {{
                    x : 0,
                    y : 0,
                    scale : 1,
                    opacity : 1,
                    transition : {duration : 1}
                }}
                className='w-full   '>
                    <div className=" bg-white h-full rounded-lg p-4 ">
                        <h3 className='text-lg font-semibold text-blackColor mb-2'>{t('why_us_2')}</h3>
                        <p className='text-sm font-medium text-blackColor leading-[25px]'>{t('why_us_2_desc')}
                        </p>
                    </div>
                </motion.div>
                <motion.div
                initial = {{
                    x : i18n.language == "ar" ? -100 : 100,
                    y : 0,
                    scale : 1,
                    opacity : 0,
                }}
                whileInView = {{
                    x : 0,
                    y : 0,
                    scale : 1,
                    opacity : 1,
                    transition : {duration : 1}
                }}
                className='w-full'>
                    <div className=" bg-white h-full rounded-lg p-4 ">
                        <h3 className='text-lg font-semibold text-blackColor mb-2'>{t('why_us_3')}</h3>
                        <p className='text-sm font-medium text-blackColor leading-[25px]'>{t('why_us_3_desc')}
                        </p>
                    </div>
                </motion.div>
                
            </div>
        </section>
    )
}
