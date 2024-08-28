import React from 'react'

export const Contact = () => {
    return (
        <section id='contact' className='p-28 max-sm:p-8 flex flex-row flex-wrap max-lg:justify-center max-lg:items-center max-lg:gap-6 justify-between align-center items-center'>
            <div className='flex flex-col gap-3 max-lg:text-center w-[300px] max-md:w-full'>
                <h1 className='text-transparent max-md:text-3xl bg-clip-text bg-gradient-to-r from-mainGreen to-secondGreen font-bold text-4xl'>Contact us</h1>
                <p className='text-blackColor  max-md:text-sm leading-[30px] font-medium text-lg'>Envie de concrétiser vos idées ? Nous sommes là pour vous accompagner.</p>
            </div>
            <div>
                <div className='rounded-lg shadow-whiteShadow shadow-lg px-8 py-12 w-[350px] flex flex-col gap-3'>
                    <input type="text" placeholder='Full name' className='bg-fieldColor w-full px-4 py-2 text-sm placeholder-fieldText rounded-md' />
                    <input type="text" placeholder='Email Adress' className='bg-fieldColor w-full px-4 py-2 text-sm placeholder-fieldText rounded-md' />
                    <textarea  placeholder='Message ' className='bg-fieldColor w-full px-4 py-2 text-sm placeholder-fieldText rounded-md h-28' />
                    <input type="submit" value={"Submit"} className="bg-blackColor text-white w-full px-4 py-2 text-sm  rounded-md" />
                </div>

            </div>
        </section>
    )
}
