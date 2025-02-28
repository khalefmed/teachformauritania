'use client'
import React from 'react';
import '../../../i18n';
import { useTranslation } from "react-i18next";
import { motion, useAnimation } from 'framer-motion';

export const AboutPageComponent = () => {
    const {t, i18n} = useTranslation();
    return (
        <section id="about" className='overflow-hidden flex flex-col  items-center p-28 gap-12 max-lg:p-8   '>
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
                    x : -5,
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
                className={'w-full max-lg:w-full text-blackColor font-medium text-md  leading-[30px]  px-4 h-fit text-justify '} dangerouslySetInnerHTML={{ __html: t('about_page_content') }}>
                
                </motion.div>

            </div>


        </section>
    )
}
