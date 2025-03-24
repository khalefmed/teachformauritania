'use client'

import React, {useRef} from 'react';
import '../../../i18n';
import { useTranslation } from "react-i18next";
import { motion, useAnimation } from 'framer-motion';
import emailjs from '@emailjs/browser';

export const Contact = ({contact}) => {
    const {t, i18n} = useTranslation();
    const form = useRef();

    const submit = (e) => {
        e.preventDefault()
        emailjs
            .sendForm('service_mvjc53a', 'template_028de01', form.current, {
            publicKey: 'VvCpwe1vYeOVB_RBI',
            })
            .then(
            () => {
                console.log('SUCCESS!');
                form.current.reset()
            },
            (error) => {
                console.log('FAILED...', error);
            },
            );
    };
    
    return (
        <section id='contact' className='px-28 py-20 max-sm:p-8  flex flex-col gap-6 flex-wrap max-lg:justify-center max-lg:items-center max-lg:gap-6 justify-between align-center items-center'>
            <div className='flex flex-col gap-4 items-center'>
            { i18n.language == "ar" 
            ? 
            <h1 className='text-center max-md:text-3xl text-transparent bg-clip-text font-bold  text-4xl  uppercase bg-gradient-to-r from-main to-second'>{t('contact_us')}</h1>
            : 
            <h1 className='text-center max-md:text-3xl text-transparent bg-clip-text font-bold  text-4xl tracking-[0.25rem] uppercase bg-gradient-to-r from-main to-second'>{t('contact_us')}</h1>
            }
            <hr className='w-40 text-center border-black border-[1.75px] rounded-full' />
            </div>
            
            <motion.div
            initial = {{
                x : 0,
                y : 0,
                opacity : 0,
            }}
            whileInView = {{
                x : 0,
                y : 0,
                opacity : 1,
                transition : {duration : 1}
            }}
            className="flex flex-row max-md:flex-col justify-center  items-center gap-16 max-md:gap-8 max-md:mt-8"
            >
                <motion.div
            initial = {{
                x : -0,
                y : 0,
                opacity : 0,
            }}
            whileInView = {{
                x : 0,
                y : 0,
                opacity : 1,
                transition : {duration : 1}
            }}

             className='flex flex-row flex-wrap gap-3 max-lg:text-center w-[350px] max-md:w-full'>
                <div className='flex flex-col gap-10'>
                    {/* Contact box */}
                    <div className='flex gap-2 items-center'>
                        <img src="images/contact_phone_icon.png" width={35} alt="" />
                        <div className='flex flex-col items-start'>
                            <h1 className='font-medium'>{t('phone')}</h1>
                            <p className='text-sm'>{contact.phone}</p>
                        </div>
                    </div>
                    {/* Contact box */}
                    <div className='flex gap-2 items-center'>
                        <img src="images/contact_email_icon.png" width={35} alt="" />
                        <div className='flex flex-col items-start'>
                            <h1 className='font-medium'>{t('mail')}</h1>
                            <p className='text-sm'>{contact.email}</p>
                        </div>
                    </div>
                    {/* Contact box */}
                    <div className='flex gap-2 items-center'>
                        <img src="images/contact_location_icon.png" width={35} alt="" />
                        <div className='flex flex-col items-start'>
                            <h1 className='font-medium'>{t('adress')}</h1>
                            <p className='text-sm'>{contact.location}</p>
                        </div>
                    </div>
                </div>
            </motion.div>
                <form ref={form} onSubmit={submit} className='rounded-lg shadow-whiteShadow shadow-lg px-8 py-12 w-[350px] flex flex-col gap-3'>
                    <input type="text" name="from_name"  placeholder={t('full_name')} className='bg-fieldColor w-full px-4 py-2 text-sm placeholder-fieldText rounded-md' />
                    <input type="email" name="from_email"  placeholder={t('email_adress')} className='bg-fieldColor w-full px-4 py-2 text-sm placeholder-fieldText rounded-md' />
                    <textarea name="message"  placeholder={t('message')} className='bg-fieldColor w-full px-4 py-2 text-sm placeholder-fieldText rounded-md h-28' />
                    <input type="submit" value={t('submit')} className="bg-main text-white w-full px-4 py-2 text-sm  rounded-md cursor-pointer" />
                </form>


            </motion.div>
        </section>
    )
}
