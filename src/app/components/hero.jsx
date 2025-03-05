'use client'

import React from 'react';
import '../../../i18n';
import { useTranslation } from "react-i18next";
import { motion, useAnimation } from 'framer-motion';

export const Hero = () => {
    const {t, i18n} = useTranslation();
    return (
        <section id='hero' className='overflow-hidden w-full  rounded-br-[4rem] max-md:rounded-br-[2rem] rounded-bl-[4rem] max-md:rounded-bl-[2rem] bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url("/images/hero_background.jpg")] bg-cover max-w-screen px-28 max-lg:p-28 max-md:px-20 max-sm:px-8 flex flex-row max-lg:flex-col max-lg:gap-16 max-sm:gap-0  align-center justify-between max-lg:justify-center items-center min-h-[calc(100vh-0px)] max-sm:min-h-screen   '>
            <div className='w-1/2 max-lg:w-full max-lg:text-center max-lg:items-center flex flex-col gap-5 '>
                <motion.h3
                initial = {{
                    x : -0,
                    y : 0,
                    opacity : 0,
                }}
                whileInView = {{
                    x : 0,
                    y : 0,
                    opacity : 1,
                    transition : {duration : 1}
                }}
                 className='text-white text-4xl max-lg:text-5xl max-md:text-3xl max-sm:text-4xl font-bold  bg-clip-text text-transparent bg-gradient-to-r from-blackColor  to-secondBlackColor'>{t('hero_title')}</motion.h3>
                <motion.p
                initial = {{
                    x : -0,
                    y : 0,
                    opacity : 0,
                }}
                whileInView = {{
                    x : 0,
                    y : 0,
                    opacity : 1,
                    transition : {delay : 0.2, duration: 1}
                }}
                 className='text-white text-xl max-lg:text-xl max-md:text-lg max-sm:text-xl font-medium'>{t('hero_desc')}</motion.p>
                <motion.a
                initial = {{
                    x : -0,
                    y : 0,
                    opacity : 0,
                }}
                whileInView = {{
                    x : 0,
                    y : 0,
                    opacity : 1,
                    transition : {delay : 0.3, duration: 1}
                }}
                 href="/fellowship" className='px-4 py-3 transform duration-500 flex flex-row align-center justify-center items-center gap-2 text-white w-fit hover:bg-white hover:text-main border border-white rounded-lg'>
                    <span className='text-lg'>{t('hero_button')}</span>
                </motion.a>
            </div>
        </section>
    )
}

