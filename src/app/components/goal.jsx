"use client";
import { useState, useEffect } from "react";
import "../../../i18n";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export const Goal = () => {
    const { t, i18n } = useTranslation();

    return (
        <section id="goal" className="overflow-hidden max-w-screen px-28 py-20 flex flex-col gap-16 max-lg:p-16 max-sm:px-0 max-sm:8">
            <div className="flex flex-col gap-4 items-center">
                <h1 className={`text-center max-md:text-3xl text-transparent bg-clip-text font-bold text-4xl ${i18n.language === "ar" ? "" : "tracking-[0.25rem]"} uppercase bg-gradient-to-r from-main to-second`}>
                    {t("goal")}
                </h1>
                <hr className="w-40 text-center border-black border-[1.75px] rounded-full" />
            </div>
            <div className="flex flex-row max-md:flex-col flex-wrap items-start max-sm:items-center justify-center">
                <StatBox number={1000} suffix="+" label={t("goal_1")} />
                <StatBox number={85} suffix="%" label={t("goal_2")} />
                <StatBox number={30} suffix="+" label={t("goal_3")} />
                <StatBox number={3} suffix={" "+t('years')} label={t("goal_4")} />
            </div>
        </section>
    );
};

const StatBox = ({ number, suffix, label }) => {
    const [count, setCount] = useState(0);

    const startAnimation = () => {
        setCount(0); // Réinitialise le compteur
        let start = 0;
        const duration = 1500; // Durée de l'animation en ms
        const stepTime = 20; // Fréquence de mise à jour en ms
        const steps = duration / stepTime;
        const increment = number / steps;

        const timer = setInterval(() => {
            start += increment;
            if (start >= number) {
                setCount(number);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, stepTime);

        return () => clearInterval(timer);
    };

    return (
        <motion.div 
            className="w-[200px] px-6 py-8 flex flex-col items-center justify-center gap-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            onViewportEnter={startAnimation} // Lancement de l'animation à chaque apparition
            viewport={{ once: false, amount: 0.5 }} // Répète l'animation chaque fois que visible
        >
            <h2 className="font-bold text-4xl text-blackColor">
                {count}{suffix}
            </h2>
            <p className="font-normal text-xs text-center">{label}</p>
        </motion.div>
    );
};
