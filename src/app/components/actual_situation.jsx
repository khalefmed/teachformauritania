'use client'
import {useState, React, useEffect} from 'react';
import '../../../i18n';
import { useTranslation } from "react-i18next";
import { motion, useAnimation } from 'framer-motion';

export const ActualSituation = () => {
    const {t, i18n} = useTranslation();
    
    function truncateText(text) {
        const maxLength = 50;
        if (text.length > maxLength) {
            return text.slice(0, maxLength) + '...';
        }
        return text;
    }

    return (
        <section id='actual_situation' className='overflow-hidden max-w-screen px-28 py-20 flex flex-col gap-16 max-lg:p-16 max-sm:px-0 max-sm:8'>
            <div className='flex flex-col gap-4 items-center'>
            { i18n.language == "ar" 
            ? 
            <h1 className='text-center max-md:text-3xl max-sm:text-2xl text-transparent bg-clip-text font-bold  text-4xl  uppercase bg-gradient-to-r from-main to-second'>{t('actual_situation')}</h1>
            : 
            <h1 className='text-center max-md:text-3xl max-sm:text-2xl text-transparent bg-clip-text font-bold  text-4xl tracking-[0.25rem] uppercase bg-gradient-to-r from-main to-second'>{t('actual_situation')}</h1>
            }
            <hr className='w-40 text-center border-black border-[1.75px] rounded-full' />
            </div>
            <div className='flex flex-row max-sm:flex-col max-md:flex-row gap-12 max-md:gap-6 flex-wrap    items-start max-md:items-center justify-center '>

            
                    {  [1,2,3,4,5,6,7,8].map((el,i) => {
                        return <motion.div
                        initial = {{
                            x : 0,
                            y : 100,
                            opacity : 0,
                        }}
                        whileInView = {{
                            x : 0,
                            y : 0,
                            opacity : 1,
                            transition : {duration : 1}
                        }}
                         className='w-[320px] bg-cardGrey h-[260px] px-6 py-8 rounded-lg flex flex-col items-start justify-start gap-2'>
                            <div className='rounded-md bg-transparent w-16 h-16 flex align-center justify-center p-3'>
                                <img src={`images/situation_${el}.png`}  alt="" />
                            </div>
                            <h2 className='font-bold text-lg bg-clip-text  text-main'>{t(`situation_${el}_title`)}</h2>
                            <p className='font-medium text-blackColor text-sm text-start'>{t(`situation_${el}_desc`)}</p>
                        </motion.div>
                        
                    })
                        
                    }
                    

               

                
            </div>
        </section>
    )
}
