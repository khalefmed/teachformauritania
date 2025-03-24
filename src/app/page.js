'use client';

import { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import { About } from "./components/about";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { ActualSituation } from "./components/actual_situation";
import { Goal } from "./components/goal";
import { Partners } from "./components/partners";
import { Activities } from "./components/activities";
import { Program } from "./components/program";
import client from './sanityClient';

export default function Home() {
  const { t, i18n } = useTranslation();
  const [content, setContent] = useState();
  const [contact, setContact] = useState();

  useEffect(() => {
      const fetchNews = async () => {
        const query = `{
          "content": *[_type == "content"][0],
          "contact": *[_type == "contact"][0]
        }`;
          
          const data = await client.fetch(query);
          setContent(data['content']);
          setContact(data['contact']);
          console.log(data)
      };

      fetchNews();
  }, []);
  

  useEffect(() => {
    const lang = window.localStorage.getItem('language') || 'fr';
    i18n.changeLanguage(lang);
  }, [i18n]);

  const langDir = {
    ar: 'rtl',
    en: 'ltr',
    fr: 'ltr',
  };

  return (
    <main
      className="bg-white  "
      dir={langDir[i18n.language] || 'ltr'}
    >
      <Header />
      <Hero />
      <About />
      {content && content.current_situation ? <ActualSituation /> : <></> }
      {content && content.goal ? <Goal /> : <></> }
      {content && content.partners ? <Partners /> : <></> }
      {content && content.program_koudwa ? <Program /> : <></> }
      {content && content.news ? <Activities /> : <></> }
      {contact && <Contact contact={contact} />}
      {contact && <Footer contact={contact} />}
    </main>
  );
}
