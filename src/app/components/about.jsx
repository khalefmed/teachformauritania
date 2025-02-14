'use client'
import React from 'react';
import '../../../i18n';
import { useTranslation } from "react-i18next";
import { motion, useAnimation } from 'framer-motion';

export const About = () => {
    const {t, i18n} = useTranslation();
    return (
        <section id="about" className='overflow-hidden flex flex-col  items-center px-28 py-20 gap-12 max-lg:p-8   '>
            <div className='flex flex-col gap-4 items-center'>
            { i18n.language == "ar" 
            ? 
            <h1 className='text-center max-md:text-3xl text-transparent bg-clip-text font-bold  text-4xl  uppercase bg-gradient-to-r from-main to-second'>{t('about')}</h1>
            : 
            <h1 className='text-center max-md:text-3xl text-transparent bg-clip-text font-bold  text-4xl tracking-[0.25rem] uppercase bg-gradient-to-r from-main to-second'>{t('about')}</h1>
            }
            <hr className='w-40 text-center border-black border-[1.75px] rounded-full' />
            </div>
            <div className='flex flex-row max-lg:flex-col gap-28 max-xl:gap-4 items-center  max-lg:items-start '>
                <motion.div 
                initial = {{
                    x : -100,
                    y : 0,
                    // scale : 0.8,
                    opacity : 0,
                }}
                whileInView = {{
                    x : 0,
                    y : 0,
                    // scale : 1,
                    opacity : 1,
                    transition : {duration : 1}
                }}
                className={'w-2/3 max-lg:w-full text-blackColor font-medium text-md  leading-[30px] border-main px-4 h-fit '+ (i18n.language == "ar" ? "border-r-[3px]": "border-l-[3px]")}>
                {t('about_desc')}
                <a href='/about'>
                    <div className='px-4 py-2 rounded-md bg-gradient-to-r from-main to-second w-fit text-white font-md  mt-4 text-sm'>
                        {t('more_details')}
                    </div>
                    
                </a>
                </motion.div>
                <div className='flex flex-col  max-sm:w-full gap-3 items-center justify-center '>
                    <motion.div 
                    initial = {{
                        x : 100,
                        y : 0,
                        opacity : 0,
                    }}
                    whileInView = {{
                        x : 0,
                        y : 0,
                        opacity : 1,
                        transition : {duration : 1}
                    }}
                    className='flex flex-row items-center gap-3 w-full px-4 py-3 shadow-whiteShadow shadow-lg rounded-lg'>
                        <img src='/images/mission_icon.png' width={40} height={40} alt="" />
                        <div className='flex flex-col'>
                            <h4 className='font-semibold text-blackColor text-md'>{t('mission')}</h4>
                            <p className='text-blackColor font-normal text-xs'>{t('mission_desc')}</p>
                        </div>
                    </motion.div>
                    <motion.div 
                    initial = {{
                        x : 100,
                        y : 0,
                        opacity : 0,
                    }}
                    whileInView = {{
                        x : 0,
                        y : 0,
                        opacity : 1,
                        transition : {duration : 1}
                    }}
                    className='flex flex-row items-center gap-3 w-full px-4 py-3 shadow-whiteShadow shadow-lg rounded-lg'>
                        <img src='/images/vision_icon.png' width={40} height={40} alt="" />
                        <div className='flex flex-col'>
                            <h4 className='font-semibold text-blackColor text-md'>{t('vision')}</h4>
                            <p className='text-blackColor font-normal text-xs'>{t('vision_desc')}</p>
                        </div>
                    </motion.div>
                    <motion.div 
                    initial = {{
                        x : 100,
                        y : 0,
                        opacity : 0,
                    }}
                    whileInView = {{
                        x : 0,
                        y : 0,
                        opacity : 1,
                        transition : {duration : 1}
                    }}
                    className='flex flex-row items-center gap-3 w-full px-4 py-3 shadow-whiteShadow shadow-lg rounded-lg'>
                        <img src='/images/commitment_icon.png' width={40} height={40} alt="" />
                        <div className='flex flex-col'>
                            <h4 className='font-semibold text-blackColor text-md'>{t('values')}</h4>
                            <p className='text-blackColor font-normal text-xs'>{t('values_desc')}</p>
                        </div>
                    </motion.div>

                </div>

            </div>


        </section>
    )
}
