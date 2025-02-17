'use client';
import { useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";
import client from '../sanityClient';
import { urlFor } from '../sanityImage';
import { motion, useAnimation } from 'framer-motion';

export const Activities = () => {
    const { t, i18n } = useTranslation();
    const [news, setNews] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            const query = `*[_type == "news"] | order(news_date desc) [0..2]`;
            
            const data = await client.fetch(query);
            setNews(data);
        };
        fetchNews();
    }, []);

    return (
        <section id='activities' className='overflow-hidden max-w-screen px-28 py-20 flex flex-col gap-16 max-lg:p-16 max-sm:px-0 max-sm:8'>
            <div className='flex flex-col gap-4 items-center'>
                <h1 className='text-center max-md:text-3xl text-transparent bg-clip-text font-bold text-4xl uppercase bg-gradient-to-r from-main to-second'>
                    {t('activities')}
                </h1>
                <hr className='w-40 text-center border-black border-[1.75px] rounded-full' />
            </div>
            <div className='flex flex-row max-md:flex-col gap-12 flex-wrap items-center max-sm:items-center justify-center'>
                {news.map((item, index) => (
                    <motion.a key={index} href={`/news/${item._id}`} passHref
                    initial = {{
                        x : 0,
                        y : 70,
                        opacity : 0,
                    }}
                    whileInView = {{
                        x : 0,
                        y : 0,
                        opacity : 1,
                        transition : {duration : 1.5}
                    }}
                     className='w-[300px] px-2 py-2 cursor-pointer hover:scale-50 transform rounded-lg shadow-lg flex flex-col items-start justify-start gap-4'>
                        <div className="w-full h-48 rounded-lg">
                            <img 
                                src={item.news_image ? urlFor(item.news_image).width(300).url() : "/images/placeholder.jpg"} 
                                alt="News" 
                                className="w-full h-full object-cover rounded-lg" 
                            />
                        </div>
                        <div className='px-2 pb-5'>
                            <p className='font-normal text-xs text-start text-blackColor mb-2'>
                                {new Date(item.news_date).toLocaleDateString('fr-FR')}
                            </p>
                            <h2 className='font-medium text-md text-blackColor'>
                                {item[`news_headline_${i18n.language}`]}
                            </h2>
                        </div>
                    </motion.a>
                ))}
                
            </div>
            <div className='flex items-center justify-center' >
                <a href='/news'>
                    <div className='px-8 py-3 rounded-md bg-gradient-to-r from-main to-second w-fit text-white font-md  mt-4 text-md'>
                        {t('all_news')}
                    </div>
                    
                </a>
            </div>
        </section>
    );
};
