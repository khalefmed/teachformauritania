'use client';

import { useEffect } from "react";
import { useTranslation } from "next-i18next";
import { AboutPageComponent } from "../components/about_page";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { OurTeam } from "../components/our_team";
import { HeaderInside } from "../components/header_inside";

export default function AboutPage() {
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
      className="bg-white w-screen overflow-x-hidden "
      dir={langDir[i18n.language] || 'ltr'}
    >
      <HeaderInside />
      <AboutPageComponent />
      {/* <OurTeam /> */}
      <Footer />
    </main>
  );
}
