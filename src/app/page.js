'use client'
import { useEffect } from "react";
import { changeLanguage } from "i18next";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { About } from "./components/about";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { Services } from "./components/services";
import { WhyUs } from "./components/why_us";

export default function Home() {
  const {i18n} = useTranslation();

  useEffect(() => {
    const lang = window.localStorage.getItem('language');
    if (lang != null) {
      changeLanguage(lang);
    }
  }, []);



  const lang_dir = {
    "ar" : 'rtl',
    "en" : "ltr",
    "fr" : "ltr"
  }
  return (
      <main className={"bg-white   "+ i18n.language == "ar" ? "" : ""} dir={lang_dir[i18n.language]} >
        <Header/>
        <Hero/>
        <About/>
        <Services/>
        <WhyUs/>
        <Contact/>
        <Footer/>
      </main>
    
  );
}
