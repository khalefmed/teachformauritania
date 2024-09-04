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
        <header className=" flex flex-row  items-center px-28  py-4 max-md:px-4 justify-between bg-white/50 backdrop-blur-lg sticky top-0 z-50">
            <img src="lynaat_logo.png" className="h-8" alt="" />
            <nav className="w-full flex justify-end">
                <ul className="flex flex-row gap-8 justify-end  text-blackColor max-md:hidden  ">
                    <li className="font-semibold text-sm cursor-pointer"><Link href="#hero">{t('home')}</Link></li>
                    <li className="font-semibold text-sm cursor-pointer"><Link href="#about">{t('about')}</Link></li>
                    <li className="font-semibold text-sm cursor-pointer"><Link href="#services">{t('services')}</Link></li>
                    <li className="font-semibold text-sm cursor-pointer"><Link href="#contact">{t('contact')}</Link></li>
                    <li className="font-semibold text-sm cursor-pointer"><DropDownLang /></li>
                </ul>
                <DropDown/>
            </nav>
      </header>
    )
}
