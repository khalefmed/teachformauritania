'use client';

import { useEffect } from "react";
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

export default function Home() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const lang = window.localStorage.getItem('language') || 'en';
    i18n.changeLanguage(lang);
  }, [i18n]);

  const langDir = {
    ar: 'rtl',
    en: 'ltr',
    fr: 'ltr',
  };

  return (
    <main
      className="bg-white font-poppins "
      dir={langDir[i18n.language] || 'ltr'}
    >
      <Header />
      <Hero />
      <About />
      <ActualSituation />
      <Goal />
      <Program />
      <Partners />
      <Activities />
      <Contact />
      <Footer />
    </main>
  );
}
