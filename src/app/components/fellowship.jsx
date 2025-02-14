'use client'
import React from 'react';
import '../../../i18n';
import { useTranslation } from "react-i18next";
import { motion, useAnimation } from 'framer-motion';

export const Fellowship = () => {
    const {t, i18n} = useTranslation();
    return (
        <section id="fellowship" className='overflow-hidden flex flex-col  items-center px-28 py-12 gap-12 max-lg:p-8   '>
            <div className='flex flex-col gap-4 items-center'>
            { i18n.language == "ar" 
            ? 
            <h1 className='text-center max-md:text-3xl text-transparent bg-clip-text font-bold  text-4xl  uppercase bg-gradient-to-r from-main to-second'>{t('fellowship')}</h1>
            : 
            <h1 className='text-center max-md:text-3xl text-transparent bg-clip-text font-bold  text-4xl tracking-[0.25rem] uppercase bg-gradient-to-r from-main to-second'>{t('fellowship')}</h1>
            }
            <hr className='w-40 text-center border-black border-[1.75px] rounded-full' />
            </div>
            <div className='text-blackColor'>
                <p>{t('fellowship_p_1')}</p>
                <br />
                <ul>
                    <li><span className='text-second'>🗸</span>  {t('fellowship_li_1')}</li>
                    <li><span className='text-second'>🗸</span>  {t('fellowship_li_2')}</li>
                    {/* <li><span className='text-second'>🗸</span>  {t('fellowship_li_3')}</li> */}
                </ul>

                <br />
                <p>{t('fellowship_p_2')}</p>
                <br />
                <p>{t('fellowship_p_3')}</p>
                <ul>
                    <li>- {t('fellowship_li_4')}</li>
                    <li>- {t('fellowship_li_5')}</li>
                    <li>- {t('fellowship_li_6')}</li>
                    <li>- {t('fellowship_li_7')}</li>
                    <li>- {t('fellowship_li_8')}</li>
                    <li>- {t('fellowship_li_9')}</li>
                    <li>- {t('fellowship_li_10')}</li>
                    <li>- {t('fellowship_li_11')}</li>
                    <li>- {t('fellowship_li_12')}</li>
                    <li>- {t('fellowship_li_13')}</li>
                    <li>- {t('fellowship_li_14')}</li>
                </ul>

                <br />
                <br />

                <h4 className='font-semibold h-8'>{t('engagement')}</h4>
                <ul>
                    <li><span className='text-second'>🗸</span> {t('fellowship_engagement_li_1')} </li>
                    <li><span className='text-second'>🗸</span> {t('fellowship_engagement_li_2')} </li>
                    <li><span className='text-second'>🗸</span> {t('fellowship_engagement_li_3')} </li>
                </ul>
                <br />

                <p>{t('fellowship_p_4')}</p>
                <br />
                <p>{t('fellowship_p_5')}</p>
                <p>- {t('fellowship_p_6')}</p>
                <p>- {t('fellowship_p_7')}</p>

            </div>
            <div className='w-full flex items-center justify-center'>
                <a href='/apply'>
                    <div className='px-8 py-3 rounded-md bg-gradient-to-r from-main to-second w-fit text-white font-md  mt-4 text-md'>
                        {t('apply_now_button')}
                    </div>
                    
                </a>
            </div>


        </section>
    )
}
