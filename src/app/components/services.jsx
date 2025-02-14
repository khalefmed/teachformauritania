'use client'
import {useState, React, useEffect} from 'react';
import '../../../i18n';
import { useTranslation } from "react-i18next";
import { motion, useAnimation } from 'framer-motion';

export const Services = () => {
    const {t, i18n} = useTranslation();


    const [secState, setSecState] = useState(false);
    const [devState, setDevState] = useState(false);
    const [aiState, setAiState] = useState(false);
    
    const [secContent, setSecContent] = useState('');
    const [devContent, setDevContent] = useState('');
    const [aiContent, setAiContent] = useState('');

    useEffect(() => {
        setSecContent(t('cybersecurity_desc'));
        setDevContent(t('development_desc'));
        setAiContent(t('ai_bi_desc'));
        
    }, [t])
    
    function truncateText(text) {
        const maxLength = 50;
        if (text.length > maxLength) {
            return text.slice(0, maxLength) + '...';
        }
        return text;
    }

    return (
        <section id='services' className='overflow-hidden max-w-screen p-28 flex flex-col gap-16 max-lg:p-16 max-sm:px-0 max-sm:8'>
            { i18n.language == "ar" 
            ? 
            <h1 className='text-center max-md:text-3xl text-transparent bg-clip-text font-bold  text-4xl  uppercase bg-gradient-to-r from-main to-second'>{t('services')}</h1>
            : 
            <h1 className='text-center max-md:text-3xl text-transparent bg-clip-text font-bold  text-4xl tracking-[0.25rem] uppercase bg-gradient-to-r from-main to-second'>{t('services')}</h1>
            }
            <div className='flex flex-row max-md:flex-col flex-wrap gap-16  items-start max-sm:items-center justify-center  w-full '>

                {/* Service Card */}
                <motion.div
                initial = {{
                    x : -100,
                    y : 0,
                    opacity : 0,
                }}
                whileInView = {{
                    x : 0,
                    y : 0,
                    opacity : 1,
                    transition : {duration : 1}
                }}
                 className=' w-[300px] relative'>
                    {(!secState) && <div className='w-full h-full  z-0 absolute bg-gradient-to-b from-transparent to-white max-sm:hidden'></div> }
                    <div className=' md:bg-cardGrey rounded-lg p-4  flex flex-col gap-2'>
                        <h4 className='text-blackColor font-semibold text-md'>{t('cybersecurity')}</h4>
                        <p className='text-sm  transition-all duration-500 max-sm:hidden text-blackColor'> {secState ? secContent : secContent.slice(0, 200) } </p>
                        <p className='text-sm  transition-all duration-500 sm:hidden text-blackColor'> {secContent } </p>
                    </div>
                    <div className='w-full absolute z-20 flex justify-center max-sm:hidden'>
                        <button onClick={() => setSecState(!secState)}>
                            <img src="arrow_down.png" className={secState ? 'rotate-180' : ''}   height={30} width={30} alt="" />
                        </button>
                    </div>
                </motion.div>

                {/* Service Card */}
                <motion.div
                initial = {{
                    x : 0,
                    y : 0,
                    scale : 0.8,
                    opacity : 0,
                }}
                whileInView = {{
                    x : 0,
                    y : 0,
                    scale : 1,
                    opacity : 1,
                    transition : {duration : 1}
                }}
                className=' w-[300px] relative'>
                    {(!devState) && <div className='w-full h-full  z-0 absolute bg-gradient-to-b from-transparent to-white max-sm:hidden'></div> }
                    <div className=' md:bg-cardGrey rounded-lg p-4  flex flex-col gap-2'>
                        <h4 className='text-blackColor font-semibold text-md'>{t('development')}</h4>
                        <p className='text-sm  transition-all duration-500 max-sm:hidden text-blackColor'> {devState ? devContent : devContent.slice(0, 200) } </p>
                        <p className='text-sm  transition-all duration-500 sm:hidden text-blackColor'> {devContent} </p>
                    </div>
                    <div className='w-full absolute z-20 flex justify-center max-sm:hidden '>
                        <button onClick={() => setDevState(!devState)}>
                            <img src="arrow_down.png" className={devState ? 'rotate-180' : ''}   height={30} width={30} alt="" />
                        </button>
                    </div>
                </motion.div>

                {/* Service Card */}
                <motion.div
                initial = {{
                    x : 100,
                    y : 0,
                    opacity : 0,
                }}
                whileInView = {{
                    x : 0,
                    y : 0,
                    opacity : 1,
                    transition : {duration : 1}
                }}
                className=' w-[300px] relative'>
                    {(!aiState) && <div className='w-full h-full  z-0 absolute bg-gradient-to-b from-transparent to-white max-sm:hidden'></div> }
                    <div className=' md:bg-cardGrey rounded-lg p-4  flex flex-col gap-2'>
                        <h4 className='text-blackColor font-semibold text-md'>{t('ai_bi')}</h4>
                        <p className='text-sm  transition-all duration-500 max-sm:hidden text-blackColor'> {aiState ? aiContent : aiContent.slice(0, 200) } </p>
                        <p className='text-sm  transition-all duration-500 sm:hidden text-blackColor'> {aiContent } </p>
                    </div>
                    <div className='w-full absolute z-20 flex justify-center max-sm:hidden '>
                        <button onClick={() => setAiState(!aiState)}>
                            <img src="arrow_down.png" className={aiState ? 'rotate-180' : ''}   height={30} width={30} alt="" />
                        </button>
                    </div>
                </motion.div>

                
            </div>
        </section>
    )
}
