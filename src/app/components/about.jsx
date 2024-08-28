'use client'
import React from 'react'

export const About = () => {
    return (
        <section id="about" className='flex flex-col p-28 gap-12 max-md:p-8   '>
            <h1 className='text-center max-md:text-3xl text-transparent bg-clip-text font-bold  text-4xl tracking-[0.25rem] uppercase bg-gradient-to-r from-mainGreen to-secondGreen'>A PROPOS</h1>
            <div className='flex flex-row max-lg:flex-col gap-28 max-xl:gap-4  items-center '>
                <div className='w-2/3 max-lg:w-full text-blackColor font-medium text-md border-l-[3px] leading-[30px] border-mainGreen px-4 h-fit'>
                Lynaat, entreprise de conseil en technologie et services informatiques spécialisés, est votre partenaire 
                clé dans la transition numérique, offrant bien plus que des services informatiques. Nous créons des solutions 
                personnalisées pour vous permettre d'exploiter pleinement les technologies modernes et d'atteindre vos objectifs. 
                Que vous cherchiez à améliorer votre sécurité numérique, à développer des plateformes web et mobiles, 
                à intégrer l'intelligence artificielle ou à tirer parti du Business Intelligence nous faisons de vos défis des opportunités.
                </div>
                <div className='flex flex-col max-md:w-3/4 max-sm:w-full gap-3 items-center justify-center '>
                    <div className='flex flex-row items-center gap-3 w-full px-4 py-3 shadow-whiteShadow shadow-lg rounded-lg'>
                        <img src='/mission_icon.png' width={40} height={40} alt="" />
                        <div className='flex flex-col'>
                            <h4 className='font-semibold text-blackColor text-md'>Mission</h4>
                            <p className='text-blackColor font-normal text-xs'>To empower businesses with innovative IT solutions that drive growth and efficiency</p>
                        </div>
                    </div>
                    <div className='flex flex-row items-center gap-3 w-full px-4 py-3 shadow-whiteShadow shadow-lg rounded-lg'>
                        <img src='/vision_icon.png' width={40} height={40} alt="" />
                        <div className='flex flex-col'>
                            <h4 className='font-semibold text-blackColor text-md'>Vision</h4>
                            <p className='text-blackColor font-normal text-xs'>To be a leader in IT innovation, recognized for our ability to transform challenges into opportunities</p>
                        </div>
                    </div>
                    <div className='flex flex-row items-center gap-3 w-full px-4 py-3 shadow-whiteShadow shadow-lg rounded-lg'>
                        <img src='/commitment_icon.png' width={40} height={40} alt="" />
                        <div className='flex flex-col'>
                            <h4 className='font-semibold text-blackColor text-md'>Commitment</h4>
                            <p className='text-blackColor font-normal text-xs'>Dedicated to excellence and client success through reliable and high-quality solutions.</p>
                        </div>
                    </div>

                </div>

            </div>


        </section>
    )
}
