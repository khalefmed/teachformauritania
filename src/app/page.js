'use client'
import { changeLanguage } from "i18next";
import Image from "next/image";
import { About } from "./components/about";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { Services } from "./components/services";
import { WhyUs } from "./components/why_us";

export default function Home() {
  var lang = window.localStorage.getItem('lang');

  if (lang != null) {
    changeLanguage(lang)

  }
  return (
      <main className="bg-white font-poppins">
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
