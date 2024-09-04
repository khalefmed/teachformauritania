'use client'

import React, {useRef} from 'react';
import '../../../i18n';
import { useTranslation } from "react-i18next";
import { motion, useAnimation } from 'framer-motion';
import emailjs from '@emailjs/browser';

export const Contact = () => {
    const {t} = useTranslation();
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
        <section id='contact' className='p-28 max-sm:p-8 lg:px-72 flex flex-row flex-wrap max-lg:justify-center max-lg:items-center max-lg:gap-6 justify-between align-center items-center'>
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

             className='flex flex-col gap-3 max-lg:text-center w-[350px] max-md:w-full'>
                <h1
                onClick={(e) => submit(e)}
                 className='text-transparent max-md:text-3xl bg-clip-text bg-gradient-to-r from-mainGreen to-secondGreen font-bold text-4xl'>{t('contact_us')}</h1>
                <p className='text-blackColor  max-md:text-sm leading-[30px] font-medium text-lg'>{t('contact_us_desc')}</p>
            </motion.div>
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
            >
                <form ref={form} onSubmit={submit} className='rounded-lg shadow-whiteShadow shadow-lg px-8 py-12 w-[350px] flex flex-col gap-3'>
                    <input type="text" name="from_name"  placeholder={t('full_name')} className='bg-fieldColor w-full px-4 py-2 text-sm placeholder-fieldText rounded-md' />
                    <input type="email" name="from_email"  placeholder={t('email_adress')} className='bg-fieldColor w-full px-4 py-2 text-sm placeholder-fieldText rounded-md' />
                    <textarea name="message"  placeholder={t('message')} className='bg-fieldColor w-full px-4 py-2 text-sm placeholder-fieldText rounded-md h-28' />
                    <input type="submit" value={t('submit')} className="bg-blackColor text-white w-full px-4 py-2 text-sm  rounded-md" />
                </form>

            </motion.div>
        </section>
    )
}
