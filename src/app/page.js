'use client';

import { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { About } from "./components/about";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { Services } from "./components/services";
import { WhyUs } from "./components/why_us";
import { ActualSituation } from "./components/actual_situation";
import { Goal } from "./components/goal";
import { Partners } from "./components/partners";
import { Activities } from "./components/activities";
import { Program } from "./components/program";
import client from './sanityClient';

export default function Home() {
  const { t, i18n } = useTranslation();
  const [content, setContent] = useState();

  useEffect(() => {
      const fetchNews = async () => {
          const query = `*[_type == "content"][0]`;
          
          const data = await client.fetch(query);
          setContent(data);
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
      {content && content.program_koudwa ? <Program /> : <></> }
      {content && content.partners ? <Partners /> : <></> }
      {content && content.news ? <Activities /> : <></> }
      {content && content.current_situation ? <ActualSituation /> : <></> }
      <Contact />
      <Footer />
    </main>
  );
}
