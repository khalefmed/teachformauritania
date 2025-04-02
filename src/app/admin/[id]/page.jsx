'use client';

import { useEffect } from "react";
import { useTranslation } from "next-i18next";
import { AboutPageComponent } from "../../components/about_page";
import { HeaderInside } from "../../components/header_inside";
import ApplicationDetails from "@/app/components/application_details";
import { FooterInside2 } from "@/app/components/footer_inside_2";
import { HeaderInside2 } from "@/app/components/header_inside_2";


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
      {/* <HeaderInside2 /> */}
      <ApplicationDetails />
      {/* <FooterInside2 /> */}
    </main>
  );
}
