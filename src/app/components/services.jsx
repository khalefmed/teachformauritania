'use client'
import {useState, React} from 'react';
import '../../../i18n';
import { useTranslation } from "react-i18next";

export const Services = () => {
    const {t} = useTranslation();


    const [secState, setSecState] = useState(false);
    const [devState, setDevState] = useState(false);
    const [aiState, setAiState] = useState(false);
    
    const [secContent, setSecContent] = useState(t('cybersecurity_desc'));
    const [devContent, setDevContent] = useState(t('development_desc'));
    const [aiContent, setAiContent] = useState(t('ai_bi_desc'));
    
    function truncateText(text) {
        const maxLength = 50;
        if (text.length > maxLength) {
            return text.slice(0, maxLength) + '...';
        }
        return text;
    }

    return (
        <section id='services' className='p-28 flex flex-col gap-16 max-md:p-16 max-sm:px-0 max-sm:8'>
            <h1 className='text-center max-md:text-3xl text-transparent bg-clip-text font-bold  text-4xl tracking-[0.25rem] uppercase bg-gradient-to-r from-mainGreen to-secondGreen'>{t('services')}</h1>
            <div className='flex flex-row max-md:flex-col flex-wrap gap-16  items-start max-sm:items-center justify-center  w-full '>

                {/* Service Card */}
                <div className=' w-[300px] relative'>
                    {(!secState) && <div className='w-full h-full  z-10 absolute bg-gradient-to-b from-transparent to-white'></div> }
                    <div className=' bg-cardGrey rounded-lg p-4  flex flex-col gap-2'>
                        <h4 className='text-blackColor font-semibold text-md'>{t('cybersecurity')}</h4>
                        <p className='text-sm  transition-all duration-500'> {secState ? secContent : secContent.slice(0, 200) } </p>
                    </div>
                    <div className='w-full absolute z-20 flex justify-center '>
                        <button onClick={() => setSecState(!secState)}>
                            <img src="arrow_down.png" className={secState ? 'rotate-180' : ''}   height={30} width={30} alt="" />
                        </button>
                    </div>
                </div>

                {/* Service Card */}
                <div className=' w-[300px] relative'>
                    {(!devState) && <div className='w-full h-full  z-10 absolute bg-gradient-to-b from-transparent to-white'></div> }
                    <div className=' bg-cardGrey rounded-lg p-4  flex flex-col gap-2'>
                        <h4 className='text-blackColor font-semibold text-md'>{t('development')}</h4>
                        <p className='text-sm  transition-all duration-500'> {devState ? devContent : devContent.slice(0, 200) } </p>
                    </div>
                    <div className='w-full absolute z-20 flex justify-center '>
                        <button onClick={() => setDevState(!devState)}>
                            <img src="arrow_down.png" className={devState ? 'rotate-180' : ''}   height={30} width={30} alt="" />
                        </button>
                    </div>
                </div>

                {/* Service Card */}
                <div className=' w-[300px] relative'>
                    {(!aiState) && <div className='w-full h-full  z-10 absolute bg-gradient-to-b from-transparent to-white'></div> }
                    <div className=' bg-cardGrey rounded-lg p-4  flex flex-col gap-2'>
                        <h4 className='text-blackColor font-semibold text-md'>{t('ai_bi')}</h4>
                        <p className='text-sm  transition-all duration-500'> {aiState ? aiContent : aiContent.slice(0, 200) } </p>
                    </div>
                    <div className='w-full absolute z-20 flex justify-center '>
                        <button onClick={() => setAiState(!aiState)}>
                            <img src="arrow_down.png" className={aiState ? 'rotate-180' : ''}   height={30} width={30} alt="" />
                        </button>
                    </div>
                </div>

                
            </div>
        </section>
    )
}
