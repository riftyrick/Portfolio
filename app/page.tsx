"use client";
import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import Footer from "@/app/components/footer";
import './i18n';
import {useTranslation} from 'react-i18next';
import Lang from "@/app/components/lang";

const navigation = [
    {name: "nav_dev", href: "/dev"},
    {name: "nav_as", href: "/sa"},
    {name: "nav_provider", href: "/provider", isAnimated: true},
    {name: "nav_stats", href: "/stats"},
    {name: "nav_bep", href: "/projects"},
    {name: "nav_contact", href: "/contact"},
];

export default function Home() {
    const {t, i18n} = useTranslation();

    return (
        <div
            className="flex flex-col items-center justify-center min-h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
            <div className="mt-4"/>
            <Lang/>
            <nav className="my-16 animate-fade-in" id="home">
                <ul className="flex items-center justify-center gap-4">
                    {navigation.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
                        >
                            {t(item.name)}
                            {item.isAnimated && <div className="bg-blue-800 w-1 h-0.5 rounded-full animate-bar"/>}
                        </Link>
                    ))}
                </ul>
            </nav>
            <title>{t('app_title')}</title>
            <div
                className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0"/>
            <Particles
                className="absolute inset-0 -z-10 animate-fade-in"
                quantity={100}
            />
            <h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text"
                id="name">
                Farmeurimmo
            </h1>

            <div
                className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0"/>
            <div className="my-16 text-left animate-fade-in" id="home">
                <p className="text-sm text-zinc-400 ">
                    {t('desc_dev')}
                    <br/>
                    <br/>
                    {t('desc_as')}
                    <br/>
                    <br/>
                    {t('desc_am_ai')}
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    {t('devat_noctis')}
                    <Link
                        target="_blank"
                        href="https://lastjourney.fr"
                        className="underline duration-500 hover:text-zinc-300"
                    >
                        LastJourney
                    </Link>
                    <br/>
                    <br/>
                    {t('devat_noctis')}
                    <Link
                        target="_blank"
                        href="https://edmine.fr"
                        className="underline duration-500 hover:text-zinc-300"
                    >
                        Edmine
                    </Link>
                    <br/>
                    <br/>
                    (not public) {t('devat_noctis')}
                    <Link
                        target="_blank"
                        href="https://noctis.rip"
                        className="underline duration-500 hover:text-zinc-300"
                    >
                        Noctis
                    </Link>
                    <br/>
                    <br/>
                </p>
            </div>
            <Footer/>
        </div>
    );
}
