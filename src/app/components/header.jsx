'use client'

import React from 'react'
import DropDown from './dropdown'
import '../../../i18n';
import { useTranslation } from "react-i18next";
import DropDownLang from './dropdown_lang';

export const Header = () => {
    const {t, i18n} = useTranslation();
    return (
        <header className="flex flex-row  items-center px-28 py-4 max-md:px-4 justify-between bg-white/50 backdrop-blur-lg sticky top-0 z-50">
            <img src="lynaat_logo.png" className="h-8" alt="" />
            <nav className="w-full flex justify-end">
                <ul className="flex flex-row gap-8 justify-end  text-blackColor max-md:hidden ">
                    <li className="font-semibold text-sm cursor-pointer"><a href="#hero">{t('home')}</a></li>
                    <li className="font-semibold text-sm cursor-pointer"><a href="#about">{t('about')}</a></li>
                    <li className="font-semibold text-sm cursor-pointer"><a href="#services">{t('services')}</a></li>
                    <li className="font-semibold text-sm cursor-pointer"><a href="#contact">{t('contact')}</a></li>
                    <li className="font-semibold text-sm cursor-pointer"><DropDownLang /></li>
                </ul>
                <DropDown/>
            </nav>
      </header>
    )
}
