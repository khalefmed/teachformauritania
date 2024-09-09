'use client'

import React from 'react';
import '../../../i18n';
import { useTranslation } from "react-i18next";
import { motion, useAnimation } from 'framer-motion';

export const Hero = () => {
    const {t, i18n} = useTranslation();
    return (
        <section id='hero' className='overflow-hidden max-w-screen px-28 max-lg:p-28 max-md:px-20 max-sm:px-8 flex flex-row max-lg:flex-col max-lg:gap-16 max-sm:gap-0  align-center justify-between max-lg:justify-center items-center min-h-[calc(100vh-0px)] max-sm:min-h-screen   '>
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
                 className='text-blackColor text-4xl max-lg:text-5xl max-md:text-3xl max-sm:text-2xl font-black  bg-clip-text text-transparent bg-gradient-to-r from-blackColor  to-secondBlackColor'>{t('hero_title')}</motion.h3>
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
                 className='text-blackColor text-lg max-lg:text-xl max-md:text-lg max-sm:text-sm font-medium'>{t('hero_desc')}</motion.p>
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
                 href="#contact" className='px-4 py-3 flex flex-row align-center justify-center items-center gap-2 text-white w-fit bg-gradient-to-r from-blackColor   to-secondBlackColor rounded-lg shadow-lg shadow-shadow'>
                    <span className='text-sm'>{t('hero_button')}</span>
                    {i18n.language == "ar" ? 
                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.44332 16.9268C9.19328 17.1767 8.8542 17.3171 8.50065 17.3171C8.1471 17.3171 7.80802 17.1767 7.55798 16.9268L1.55798 10.9268C1.30802 10.6767 1.1676 10.3376 1.1676 9.98409C1.1676 9.63054 1.30802 9.29146 1.55798 9.04142L7.55798 3.04142C7.80945 2.79855 8.14626 2.66415 8.49585 2.66719C8.84545 2.67023 9.17986 2.81045 9.42708 3.05766C9.67429 3.30488 9.81451 3.63929 9.81755 3.98889C9.82059 4.33848 9.68619 4.67529 9.44332 4.92676L5.83398 8.65076L18.5007 8.65076C18.8543 8.65076 19.1934 8.79123 19.4435 9.04128C19.6935 9.29133 19.834 9.63047 19.834 9.98409C19.834 10.3377 19.6935 10.6769 19.4435 10.9269C19.1934 11.1769 18.8543 11.3174 18.5007 11.3174L5.83398 11.3174L9.44332 15.0414C9.69328 15.2915 9.8337 15.6305 9.8337 15.9841C9.8337 16.3376 9.69328 16.6767 9.44332 16.9268Z" fill="white"/>
                    </svg>
                    :
                    <svg width="15" height="15" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.5574 3.55737C11.8074 3.30741 12.1465 3.16699 12.5 3.16699C12.8536 3.16699 13.1926 3.30741 13.4427 3.55737L19.4427 9.55737C19.6926 9.80741 19.8331 10.1465 19.8331 10.5C19.8331 10.8536 19.6926 11.1927 19.4427 11.4427L13.4427 17.4427C13.1912 17.6856 12.8544 17.82 12.5048 17.8169C12.1552 17.8139 11.8208 17.6737 11.5736 17.4265C11.3264 17.1793 11.1862 16.8448 11.1831 16.4952C11.1801 16.1456 11.3145 15.8088 11.5574 15.5574L15.1667 11.8334H2.50002C2.1464 11.8334 1.80726 11.6929 1.55721 11.4429C1.30716 11.1928 1.16669 10.8537 1.16669 10.5C1.16669 10.1464 1.30716 9.80728 1.55721 9.55723C1.80726 9.30718 2.1464 9.16671 2.50002 9.16671H15.1667L11.5574 5.44271C11.3074 5.19267 11.167 4.85359 11.167 4.50004C11.167 4.14649 11.3074 3.80741 11.5574 3.55737Z" fill="white"/>
                    </svg>
                    }
                </motion.a>
            </div>
            <motion.div
            initial = {{
                x : 0,
                y : 0,
                scale: 0.8,
                opacity : 0,
            }}
            whileInView = {{
                x : 0,
                y : 0,
                scale: 1,
                opacity : 1,
                transition : {duration: 1}
            }}
             className=' w-[350px]   relative  flex justify-center align-center items-center h-[350px] max-lg:h-[350px]'>
                {/* <div className='w-[90%] h-[50%] bg-blurGreen  absolute bottom-20 rounded-full blur-[0px]'></div>
                <div className='w-[50%] h-[50%] bg-blurBlue absolute right-0 rounded-full blur-[0px]'></div> */}
                <img src="lynaat_shadow_logo.png"  alt="" className='w-[250px] max-md:w-[150px]' />
                <motion.p
                animate={{
                    scale: [0.9, 1, 0.9], 
                }}
                transition={{
                    duration: 3,
                    delay: 0,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut",
                }}
                className='w-36 py-2 max-md:w-24 text-center max-md:text-xs shadow-lg shadow-whiteShadow bottom-8 right-16 max-md:bottom-24 max-md:right-28 bg-white rounded-lg absolute font-medium text-blackColor'>{t('efficacite')}</motion.p>
                <motion.p
                animate={{
                    scale: [0.9, 1, 0.9],
                }}
                transition={{
                    duration: 3, 
                    delay : 1.5,
                    repeat: Infinity, 
                    repeatType: "loop", 
                    ease: "easeInOut", 
                }}
                className='w-36 py-2 max-md:w-24 text-center max-md:text-xs shadow-lg shadow-whiteShadow top-10 left-16 max-md:top-24 max-md:left-28 bg-white rounded-lg absolute font-medium text-blackColor'>{t('convivialite')}</motion.p>
                <motion.p
                animate={{
                    scale: [0.9, 1, 0.9], 
                }}
                transition={{
                    duration: 3, 
                    delay : 1.5,
                    repeat: Infinity, 
                    repeatType: "loop", 
                    ease: "easeInOut",
                }}
                className='w-36 py-2 max-md:w-24 text-center max-md:text-xs shadow-lg shadow-shadow left-0 top- max-md:top-42   max-md:left-12 bg-blackColor rounded-lg absolute font-medium text-white'>{t('competence')}</motion.p>
                <motion.p
                animate={{
                    scale: [0.9, 1, 0.9], 
                }}
                transition={{
                    duration: 3, 
                    delay : 0,
                    repeat: Infinity, 
                    repeatType: "loop",
                    ease: "easeInOut", 
                }}
                className='w-36 py-2 max-md:w-24 text-center max-md:text-xs shadow-lg shadow-shadow right-0 top-32 max-md:top-36 max-md:right-16 bg-blackColor rounded-lg absolute font-medium text-white'>{t('performance')}</motion.p>
            </motion.div>
        </section>
    )
}

