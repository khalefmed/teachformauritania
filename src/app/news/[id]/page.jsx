'use client';

import { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import { useParams } from 'next/navigation';
import dynamic from "next/dynamic";
import { HeaderInside2 } from "@/app/components/header_inside_2";
import { FooterInside2 } from "@/app/components/footer_inside_2";

const NewsDetails = dynamic(() => import("@/app/components/news_details"), { ssr: true });

export default function NewsDetailsPage() {
  const { i18n } = useTranslation();
  const { id } = useParams();
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const lang = window.localStorage.getItem('language') || 'en';
    setLanguage(lang);
    i18n.changeLanguage(lang);
  }, [i18n]);

  const langDir = {
    ar: 'rtl',
    en: 'ltr',
    fr: 'ltr',
  };

  return (
    <main
      className="bg-white w-screen overflow-x-hidden min-h-[100vh]"
      dir={langDir[language] || 'ltr'}
    >
      {id && <HeaderInside2 />}
      {id &&  <NewsDetails id={id} />} 
      {id && <FooterInside2 />}
    </main>
  );
}
