import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import {
  ArchiveBoxXMarkIcon,
  ChevronDownIcon,
  PencilIcon,
  Square2StackIcon,
  TrashIcon,
} from '@heroicons/react/16/solid'
import Link from 'next/link'
import DropDownLang from './dropdown_lang'

export default function DropDown() {
  return (
    <div className=" z-0 text-right md:hidden ">
      <Menu >
        <MenuButton className="inline-flex items-center gap-2 rounded-md bg-transparent py-1.5 px-3 text-sm/6 font-semibold text-white  focus:outline-none   data-[focus]:outline-1 ">
          <img src="menu.png"  width={25} alt="" />
        </MenuButton>

        <MenuItems
          transition
          anchor="bottom end"
          className="w-52  mt-6 rounded-xl border border-white/5 bg-white/50 backdrop-blur-lg p-1 text-sm/6 text-white transition duration-0 ease-out  focus:outline-none  "
        >
          <MenuItem>
            <button className="group flex w-full items-center gap-2 text-blackColor font-semibold rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
            <Link href="#hero">Home</Link>
              
            </button>
          </MenuItem>
          <MenuItem>
            <button className="group flex w-full items-center gap-2 text-blackColor font-semibold rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
              
            <Link href="#about">About</Link>
            </button>
          </MenuItem>
          <MenuItem>
            <button className="group flex w-full items-center gap-2 text-blackColor font-semibold rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
          
            <Link href="#services">Services</Link>
            </button>
          </MenuItem>
          <MenuItem>
            <button className="group flex w-full items-center gap-2 text-blackColor font-semibold rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
             
            <Link href="#contact">Contact</Link>
            </button>
          </MenuItem>
          <MenuItem>
            <button className="group flex w-full items-center gap-2 text-blackColor font-semibold rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
             
            <DropDownLang/>
            </button>
          </MenuItem>
        </MenuItems>
      </Menu>
    </div>
  )
}
