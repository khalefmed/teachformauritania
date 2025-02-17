
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import {
  ArchiveBoxXMarkIcon,
  ChevronDownIcon,
  PencilIcon,
  Square2StackIcon,
  TrashIcon,
} from '@heroicons/react/16/solid'
import Link from 'next/link'
import { useTranslation } from 'react-i18next';
import DropDownLangInside2 from './dropdown_lang_inside_2';

export default function DropDownInside2() {
  const {t, i18n} = useTranslation();
  return (
    <div className=" z-0 text-right md:hidden ">
      <Menu >
        <MenuButton className="inline-flex items-center gap-2 rounded-md bg-transparent py-1.5 px-3 text-sm/6 font-semibold text-white  focus:outline-none   data-[focus]:outline-1 ">
          <img src="../images/menu.png"  width={25} alt="" />
        </MenuButton>

        <MenuItems
          transition
          anchor="bottom end"
          className="w-52  mt-6 rounded-xl border border-white/5 bg-white/50 backdrop-blur-lg p-1 text-sm/6 text-white transition duration-0 ease-out  focus:outline-none  "
        >
          <MenuItem>
            <button className="group flex w-full items-center gap-2 text-blackColor font-semibold rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
            <Link href="/">{t('home')}</Link>
              
            </button>
          </MenuItem>
          <MenuItem>
            <button className="group flex w-full items-center gap-2 text-blackColor font-semibold rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
              
            <Link href="/#about">{t('about')}</Link>
            </button>
          </MenuItem>
          <MenuItem>
            <button className="group flex w-full items-center gap-2 text-blackColor font-semibold rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
          
            <Link href="/#program">{t('program')}</Link>
            </button>
          </MenuItem>
          <MenuItem>
            <button className="group flex w-full items-center gap-2 text-blackColor font-semibold rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
             
            <Link href="/#activities">{t('activities')}</Link>
            </button>
          </MenuItem>
          <MenuItem>
            <button className="group flex w-full items-center gap-2 text-blackColor font-semibold rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
             
            <Link href="/#contact">{t('contact')}</Link>
            </button>
          </MenuItem>
          <MenuItem>
            <button className="group flex w-full items-center gap-2 text-blackColor font-semibold rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
             
            <DropDownLangInside2/>
            </button>
          </MenuItem>
        </MenuItems>
      </Menu>
    </div>
  )
}
