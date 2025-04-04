'use client';

import { useEffect } from "react";
import { useTranslation } from "next-i18next";
import { Footer } from "../components/footer";
import { HeaderInside } from "../components/header_inside";
import { ApplyPage } from "../components/apply_form";

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
      className={"bg-white w-screen overflow-x-hidden font-poppins" + (i18n.language == "ar" ? " arabic-content " : " ")}
      dir={langDir[i18n.language] || 'ltr'}
    >
      <HeaderInside />
      <ApplyPage />
      <Footer />
    </main>
  );
}
