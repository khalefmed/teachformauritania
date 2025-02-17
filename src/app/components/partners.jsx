'use client'
import {useState, React, useEffect} from 'react';
import '../../../i18n';
import { useTranslation } from "react-i18next";
import { motion, useAnimation } from 'framer-motion';

export const Partners = () => {
    const {t, i18n} = useTranslation();
    

    return (
        <section id='impact' className='max-w-screen overflow-hidden max-w-screen px-28 py-20 flex flex-col gap-16 max-lg:p-16 max-sm:px-0 max-sm:8'>
            <div className='flex flex-col gap-4 items-center'>
            { i18n.language == "ar" 
            ? 
            <h1 className='text-center max-md:text-3xl text-transparent bg-clip-text font-bold  text-4xl  uppercase bg-gradient-to-r from-main to-second'>{t('partners')}</h1>
            : 
            <h1 className='text-center max-md:text-3xl text-transparent bg-clip-text font-bold  text-4xl tracking-[0.25rem] uppercase bg-gradient-to-r from-main to-second'>{t('partners')}</h1>
            }
            <hr className='w-40 text-center border-black border-[1.75px] rounded-full' />
            </div>
            <div className='flex flex-row max-md:flex-col  flex-wrap   items-center max-sm:items-center justify-center '>
                    <div className='w-[200px] px-6 py-8 flex flex-row items-center max-md:flex-col justify-center gap-16'>
                        <motion.img
                        initial = {{
                            x : 0,
                            y : 30,
                            opacity : 0,
                        }}
                        whileInView = {{
                            x : 0,
                            y : 0,
                            opacity : 1,
                            transition : {duration : 1}
                        }} 
                         src="images/ministere.png" height={20} width={80} alt="" />
                        <motion.img
                        initial = {{
                            x : 0,
                            y : 30,
                            opacity : 0,
                        }}
                        whileInView = {{
                            x : 0,
                            y : 0,
                            opacity : 1,
                            transition : {duration : 1}
                        }} 
                         src="images/bmci.png" height={120} width={120} alt="" />
                        <motion.img
                        initial = {{
                            x : 0,
                            y : 30,
                            opacity : 0,
                        }}
                        whileInView = {{
                            x : 0,
                            y : 0,
                            opacity : 1,
                            transition : {duration : 1}
                        }} 
                         src="images/bnm.png" height={20} width={80} alt="" />
                        <motion.img
                        initial = {{
                            x : 0,
                            y : 30,
                            opacity : 0,
                        }}
                        whileInView = {{
                            x : 0,
                            y : 0,
                            opacity : 1,
                            transition : {duration : 1}
                        }} 
                         src="images/una.png" height={20} width={80} alt="" />
                    </div>
            </div>
        </section>
    )
}
