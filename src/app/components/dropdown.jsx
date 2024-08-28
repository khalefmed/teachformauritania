import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import {
  ArchiveBoxXMarkIcon,
  ChevronDownIcon,
  PencilIcon,
  Square2StackIcon,
  TrashIcon,
} from '@heroicons/react/16/solid'

export default function DropDown() {
  return (
    <div className="w-52 text-right md:hidden ">
      <Menu >
        <MenuButton className="inline-flex items-center gap-2 rounded-md bg-transparent py-1.5 px-3 text-sm/6 font-semibold text-white  focus:outline-none   data-[focus]:outline-1 ">
          <img src="menu.png"  width={25} alt="" />
        </MenuButton>

        <MenuItems
          transition
          anchor="bottom end"
          className="w-52 origin-top-right mt-6 rounded-xl border border-white/5 bg-white/50 backdrop-blur-lg p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
        >
          <MenuItem>
            <button className="group flex w-full items-center gap-2 text-blackColor font-semibold rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
            <a href="#hero">Home</a>
              
            </button>
          </MenuItem>
          <MenuItem>
            <button className="group flex w-full items-center gap-2 text-blackColor font-semibold rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
              
            <a href="#about">About</a>
            </button>
          </MenuItem>
          <MenuItem>
            <button className="group flex w-full items-center gap-2 text-blackColor font-semibold rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
          
            <a href="#services">Services</a>
            </button>
          </MenuItem>
          <MenuItem>
            <button className="group flex w-full items-center gap-2 text-blackColor font-semibold rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
             
            <a href="#contact">Contact</a>
            </button>
          </MenuItem>
        </MenuItems>
      </Menu>
    </div>
  )
}
