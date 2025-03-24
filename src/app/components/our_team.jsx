'use client'
import {React, useState, useEffect} from 'react';
import '../../../i18n';
import { useTranslation } from "react-i18next";
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import client from '../sanityClient';
import { urlFor } from '../sanityImage';

export const OurTeam = () => {
    const {t, i18n} = useTranslation();
    const [members, setMembers] = useState([])

    useEffect(() => {
        const fetchNews = async () => {
            const query = `*[_type == "member"]`;
            
            const data = await client.fetch(query);
            setMembers(data);
        };
        fetchNews();
    }, []);

    // const members = [
    //     {
    //         "name" : "Mohamed Khalef",
    //         "title" : "Directeur Géneral",
    //         "image" : "/images/person.jpg"
    //     },
    //     {
    //         "name" : "Mohamed Khalef",
    //         "title" : "Directeur Géneral",
    //         "image" : "/images/person.jpg"
    //     },
    //     {
    //         "name" : "Mohamed Khalef",
    //         "title" : "Directeur Géneral",
    //         "image" : "/images/person.jpg"
    //     },
    //     {
    //         "name" : "Mohamed Khalef",
    //         "title" : "Directeur Géneral",
    //         "image" : "/images/person.jpg"
    //     },
    //     {
    //         "name" : "Mohamed Khalef",
    //         "title" : "Directeur Géneral",
    //         "image" : "/images/person.jpg"
    //     },
    // ]
    return (
        (members && members.length > 0 ? 
            <section id="team" className='overflow-hidden flex flex-col  items-center px-12 py-28 gap-12 max-lg:p-8   '>
            <div className='flex flex-col gap-4 items-center'>
            { i18n.language == "ar" 
            ? 
            <h1 className='text-center max-md:text-3xl text-transparent bg-clip-text font-bold  text-4xl  uppercase bg-gradient-to-r from-main to-second'>{t('team')}</h1>
            : 
            <h1 className='text-center max-md:text-3xl text-transparent bg-clip-text font-bold  text-4xl tracking-[0.25rem] uppercase bg-gradient-to-r from-main to-second'>{t('team')}</h1>
            }
            <hr className='w-40 text-center border-black border-[1.75px] rounded-full' />
            </div>
            <div className='flex flex-row max-md:flex-col flex-wrap gap-16 max-xl:gap-4 items-center justify-center  max-lg:items-center '>
                {members.map((e) => {
                    return <motion.div 
                    initial = {{
                        x : 0,
                        y : 50,
                        opacity : 0,
                    }}
                    whileInView = {{
                        x : 0,
                        y : 0,
                        opacity : 1,
                        transition : {duration : 1}
                    }}
                    className={' text-blackColor flex flex-col gap-4 font-medium text-md  px-4 h-fit '}>
                        <div className="h-36 w-36 border-4 rounded-full border-main overflow-hidden">
                            <img
                                src={e.image? urlFor(e.image).width(300).url() : "/images/person.jpg"} 
                                className="h-full w-full object-cover"
                                alt=""
                                height={50}
                                width={50}
                                quality={100}
                            />
                        </div>
                        <div className='flex flex-col items-center'>
                            <h3 className='font-bold text-lg'>{e["name_"+i18n.language]}</h3>
                            <p className='text-fieldText text-sm font-regular'>{e["title_"+i18n.language]}</p>
                        </div>
                    </motion.div>
                })}
               
                

            </div>

        </section> 
        :
        <></>
          
    ))
}
