'use client'
import React from 'react';
import '../../../i18n';
import { useTranslation } from "react-i18next";

export const Footer = () => {
    const {t} = useTranslation();
    
    return (
        <footer className='flex flex-row max-sm:flex-col max-sm:justify-start max-sm:gap-16 justify-between bg-main px-28 py-8 max-sm:px-8 max-w-screen'>
            <div className='flex flex-col gap-8'>
                <img src="images/logo_white.png" height={10} width={150} alt="" />
                <div className='flex flex-col justify-start gap-3'>
                    <div className='flex flex-row items-center gap-2 text-fieldText'>
                        <img src="/images/email_icon.png" width={20} alt="" />
                        <p className='text-sm'>contact@lynaat.mr</p>
                    </div>
                    <div className='flex flex-row items-center gap-2 text-fieldText'>
                        <img src="images/phone_icon.png" width={20} alt="" />
                        <p className='text-sm'>+222 34450717</p>
                    </div>
                    <div className='flex flex-row items-center gap-2 text-fieldText'>
                        <img src="images/location_icon.png" width={20} alt="" />
                        <p className='text-sm'>ZR 120, Nouakchott, Mauritanie</p>
                    </div>
                </div>
            </div>


            <div className='flex flex-col gap-3'>
                <h3 className='text-2xl font-semibold text-white'>{t('links')}</h3>
                <ul className=' text-sm flex flex-col gap-2 text-fieldText'>
                    <li><a href="#hero">{t('home')}</a></li>
                    <li><a href="#about">{t('about')}</a></li>
                    <li><a href="#program">{t('program')}</a></li>
                    <li><a href="#activities">{t('activities')}</a></li>
                    <li><a href="#contact">{t('contact')}</a></li>
                </ul>
            </div>



            <div className='flex flex-col max-sm:items-start gap-3'>
                <h3 className='text-lg font-semibold text-white'>{t('social_media')}</h3>
                <div className=' text-sm flex flex-row justify-center gap-2 text-cardGrey'>
                    <a href=""><img src="images/linkedin_icon.png" width={30} alt="" /></a>
                    <a href=""><img src="images/facebook_icon.png" width={30} alt="" /></a>
                </div>
            </div>
        </footer>
    )
}
