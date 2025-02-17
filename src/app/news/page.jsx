'use client';

import { useEffect } from "react";
import { useTranslation } from "next-i18next";
import { Footer } from "../components/footer";
import { HeaderInside } from "../components/header_inside";
import { ActivitiesList } from "../components/activities_list";

export default function NewsPage() {
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
      className="bg-white w-screen overflow-x-hidden"
      dir={langDir[i18n.language] || 'ltr'}
    >
      <HeaderInside />
      <ActivitiesList />
      <Footer />
    </main>
  );
}
