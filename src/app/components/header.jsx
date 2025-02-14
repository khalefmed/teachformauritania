'use client'

import React from 'react'
import DropDown from './dropdown'
import '../../../i18n';
import { useTranslation } from "react-i18next";
import DropDownLang from './dropdown_lang';
import Link from 'next/link';

export const Header = () => {
    const {t, i18n} = useTranslation();
    return (
        <header className=" flex flex-row w-screen items-center px-28   max-md:px-4 justify-between bg-white/50 backdrop-blur-lg sticky top-0 z-50">
            <img src="images/logo.png" className="h-16" alt="" />
            <nav className="w-full flex justify-center max-md:justify-end">
                <ul className="flex flex-row gap-8 justify-end  text-main max-md:hidden  ">
                    <li className="font-medium text-sm cursor-pointer"><Link href="/">{t('home')}</Link></li>
                    <li className="font-medium text-sm cursor-pointer"><Link href="#about">{t('about')}</Link></li>
                    <li className="font-medium text-sm cursor-pointer"><Link href="#program">{t('program')}</Link></li>
                    <li className="font-medium text-sm cursor-pointer"><Link href="#activities">{t('activities')}</Link></li>
                    <li className="font-medium text-sm cursor-pointer"><Link href="#contact">{t('contact')}</Link></li>
                </ul>
                <DropDown/>
            </nav>
            <div className="font-medium text-sm cursor-pointer max-md:hidden">
                <DropDownLang />
            </div>
      </header>
    )
}
