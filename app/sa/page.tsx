"use client";
import {Navigation} from "../components/nav";
import {Card} from "../components/card";
import Footer from "@/app/components/footer";
import React from "react";
import Lang from "@/app/components/lang";
import {useTranslation} from "react-i18next";

const competences = [
    {
        name: "as_skills_ndd",
    },
    {
        name: "as_skills_linux_install",
    },
    {
        name: "as_skills_install_services",
    },
    {
        name: "as_skills_install_web",
    },
    {
        name: "as_skills_install_db",
    },
    {
        name: "as_skills_install_games",
    },
    {
        name: "as_skills_tunnels",
    },
]

export default function As() {
    const [t] = useTranslation();

    return (
        <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
            <Navigation/>
            <title>{t('as_title')}</title>
            <div className="container flex flex-col items-center justify-center min-h-screen px-4 mx-auto">
                <Lang/>
                <div id="phone-space"/>
                <div className="flex flex-col items-center justify-center w-full mx-auto text-center mt-20">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">{t('as_skills')}</h1>
                </div>
                <div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-20 sm:grid-cols-3 lg:gap-16">
                    {competences.map((competence, index) => (
                        <Card>
                            <div className="flex flex-col items-center justify-center w-full h-full p-8">
                                <h3 className="text-2xl text-white">{t(competence.name)}</h3>
                            </div>
                        </Card>
                    ))}
                </div>
                <div className="mt-32"/>
            </div>
            <Footer/>
        </div>
    )
}