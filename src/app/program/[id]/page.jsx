'use client';

import { useEffect } from "react";
import { useTranslation } from "next-i18next";
import { Footer } from "../../components/footer";
import { HeaderInside } from "../../components/header_inside";
import ProgramDetails from "../../components/program_details";
import { useParams } from "next/navigation";
import { HeaderInside2 } from "@/app/components/header_inside_2";
import { FooterInside2 } from "@/app/components/footer_inside_2";

export default function ProgramDetailsPage() {
  const { t, i18n } = useTranslation();
  const { id } = useParams();

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
      className={"bg-white w-screen overflow-x-hidden"  + (i18n.language == "ar" ? " arabic-content " : " ")}
      dir={langDir[i18n.language] || 'ltr'}
    >
      <HeaderInside2 />
      <ProgramDetails 
        title={t(`program_title_${id}`)}
        image={`../images/program_${id}.jpg`}
        date={t(`program_date_${id}`)}
        script={t(`program_script_${id}`)}
      />
      <FooterInside2 />
    </main>
  );
}
