'use client'

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import {
  ArchiveBoxXMarkIcon,
  ChevronDownIcon,
  PencilIcon,
  Square2StackIcon,
  TrashIcon,
} from '@heroicons/react/16/solid'


import React from 'react';
import '../../../i18n';
import { useTranslation } from "react-i18next";
import { changeLanguage } from 'i18next';

export default function DropDownLang() {
  const {t, i18n} = useTranslation();


  const changeLang = (lang) => {
    changeLanguage(lang);
    window.localStorage.setItem("lang", lang)
  }


  const flags = {
    "en" : "british_flag.webp",
    "fr" : "france_flag.webp",
  }
  return (
    <div className=" text-right ">
      
      <Menu >
        <MenuButton className="text-blackColor uppercase w-fit flex flex-row items-center  gap-1 ">
          <img src={flags[i18n.language]} width={20} height={20} alt="" />
          {i18n.language}
          <ChevronDownIcon
            className="group pointer-events-none  top-2.5 right-2.5 size-4 fill-blackColor"
            aria-hidden="true"
          />
        </MenuButton>

        <MenuItems
          transition
          anchor="bottom end"
          className="w-fit origin-top-right mt-3 rounded-xl border border-white/5 bg-white/50 backdrop-blur-lg p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
        >
          <MenuItem>
            <button className="group  flex w-full items-center gap-2 text-blackColor font-semibold rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
            <button onClick={() => changeLang('fr')} className="flex flex-row gap-2 items-center" href="hero">
              <img src="france_flag.webp" width={20} alt="" />
              Français
            </button>
              
            </button>
          </MenuItem>
          <MenuItem>
            <button className="group flex w-full items-center gap-2 text-blackColor font-semibold rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
              
            <button onClick={() => changeLang('en')} className="flex flex-row gap-2 items-center" href="hero">
              <img src="british_flag.webp" width={20} alt="" />
              English
            </button>
            </button>
          </MenuItem>
        </MenuItems>
      </Menu>
    </div>
  )
}
