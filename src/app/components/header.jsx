import React from 'react'
import DropDown from './dropdown'

export const Header = () => {
    return (
        <header className="flex flex-row  items-center px-28 py-4 max-md:px-4 justify-between bg-white/50 backdrop-blur-lg sticky top-0 z-50">
            <img src="lynaat_logo.png" className="h-8" alt="" />
            <nav className="w-full flex justify-end">
                <ul className="flex flex-row gap-8 justify-end  text-blackColor max-md:hidden ">
                    <li className="font-semibold text-sm cursor-pointer"><a href="#hero">Home</a></li>
                    <li className="font-semibold text-sm cursor-pointer"><a href="#about">About</a></li>
                    <li className="font-semibold text-sm cursor-pointer"><a href="#services">Services</a></li>
                    <li className="font-semibold text-sm cursor-pointer"><a href="#contact">Contact</a></li>
                </ul>
                <DropDown/>
            </nav>
      </header>
    )
}
