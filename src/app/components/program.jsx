'use client';
import { useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";
import client from '../sanityClient';
import { urlFor } from '../sanityImage';
import { motion, useAnimation } from 'framer-motion';

export const Program = () => {
    const { t, i18n } = useTranslation();
    const program = [
        {
            "image" : "images/program_1.jpg",
            "title" : t('program_title_1'),
            "date" : t('program_date_1'),
            "description" : t('program_desc_1')
        },
        {
            "image" : "images/program_2.jpg",
            "title" : t('program_title_2'),
            "date" : t('program_date_2'),
            "description" : t('program_desc_2')
        },
        {
            "image" : "images/program_3.jpg",
            "title" : t('program_title_3'),
            "date" : t('program_date_3'),
            "description" : t('program_desc_3')
        },
        {
            "image" : "images/program_4.jpg",
            "title" : t('program_title_4'),
            "date" : t('program_date_4'),
            "description" : t('program_desc_4')
        },
        {
            "image" : "images/program_5.jpg",
            "title" : t('program_title_5'),
            "date" : t('program_date_5'),
            "description" : t('program_desc_5')
        },
        // {
        //     "image" : "images/program_6.jpg",
        //     "title" : t('program_title_6'),
        //     "date" : t('program_date_6'),
        //     "description" : t('program_desc_6')
        // },
    ]


    return (
        <section id='program' className='overflow-hidden max-w-screen px-28 py-20 flex flex-col gap-16 max-lg:p-16 max-sm:px-0 max-sm:8'>
            <div className='flex flex-col gap-4 items-center'>
                <h1 className='text-center max-md:text-3xl text-transparent bg-clip-text font-bold text-4xl uppercase bg-gradient-to-r from-main to-second'>
                    {t('program_alim')}
                </h1>
                <hr className='w-40 text-center border-black border-[1.75px] rounded-full' />
            </div>
            <div className='flex flex-row max-md:flex-col  flex-wrap items-center max-sm:items-center justify-center max-md:px-6'>
                {program.map((item, index) => (
                    <div className=' w-full flex flex-col items-center jutify-center'>
                        <br />
                        <motion.div
                            initial = {{
                                x : 0,
                                y : 0,
                                opacity : 0,
                            }}
                            whileInView = {{
                                x : 0,
                                y : 0,
                                opacity : 1,
                                transition : {duration : 2}
                            }}
                            key={index} className='w-full px-10 max-md:px-6 py-8 rounded-lg bg-cardGrey flex flex-row max-md:flex-col items-center align-center gap-10'>
                                <img src={item.image} className="h-40 w-60 max-md:w-full max-md:h-52 rounded-lg" alt="" />
                                <div className='w-full flex flex-col items-start justify-center gap-6 '>
                                    <div className='flex flex-col gap-0'>
                                        <h3 className='text-lg font-semibold text-blackColor'>{item.title}</h3>
                                        <p className='text-md font-medium text-fieldText'>{item.date}</p>
                                    </div>
                                    <p className='text-md font-medium text-blackColor'>{item.description}</p>
                                    <a href={`/program/${index + 1}`} className='text-main font-medium'>{t('see_more')} </a>
                                </div>
                                
                            </motion.div>
                            <br />
                            {index < (program.length - 1) && <motion.div
                            initial = {{
                                x : 0,
                                y : 0,
                                opacity : 0,
                            }}
                            whileInView = {{
                                x : 0,
                                y : 0,
                                opacity : 1,
                                transition : {duration : 2.5}
                            }}
                            >
                                
                                <img src="images/program_arrow.png" className='h-16' alt="" />
                            </motion.div>}
                    </div>
                ))}
                <a href='/fellowship'>
                    <div className='px-8 py-3 rounded-md bg-gradient-to-r from-main to-second w-fit text-white font-md  mt-4 text-md'>
                        {t('apply_button')}
                    </div>
                    
                </a>
            </div>
        </section>
    );
};
