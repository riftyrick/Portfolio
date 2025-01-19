"use client";
import {Navigation} from "../components/nav";
import {Card} from "../components/card";
import Footer from "@/app/components/footer";
import React from "react";
import {useTranslation} from "react-i18next";
import Lang from "@/app/components/lang";

export default function Stats() {
    const [t] = useTranslation();

    return (
        <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
            <Navigation/>
            <title>{t('stats_title')}</title>
            <div id="space" className="container flex flex-col items-center justify-center min-h-screen px-4 mx-auto">
                <Lang/>
                <div id="space2" className="flex flex-col items-center justify-center w-full mx-auto text-center mt-20">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">{t('stats_desc')}</h1>
                </div>
                <div className="mt-20"/>
                <div className="flex flex-col items-center justify-center w-full mx-auto text-center my-auto gap-8">
                    <Card>
                        <div className="flex flex-col items-center justify-center w-full mx-auto text-center mt-20">
                            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">{t('stats_readme_stats')}</h1>
                            <img className="m-10 mt-20"
                                 src="https://github-readme-stats.farmeurimmo.fr/api?username=Farmeurimmo&count_private=true&show_icons=true&theme=radical"
                                 alt="Stats github readme"/>
                        </div>
                    </Card>
                    <Card>
                        <div className="flex flex-col items-center justify-center w-full mx-auto text-center mt-20">
                            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">{t('stats_wakatime')}</h1>
                            <img className="m-10 mt-20"
                                 src="https://raw.githubusercontent.com/Farmeurimmo/Farmeurimmo/main/images/stat.svg"
                                 alt="Stats wakatime"/>
                        </div>
                    </Card>
                    <Card>
                        <div className="flex flex-col items-center justify-center w-full mx-auto text-center mt-20">
                            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">{t('stats_timeline')}</h1>
                            <img className="m-10 mt-20"
                                 src="https://raw.githubusercontent.com/Farmeurimmo/Farmeurimmo/main/assets/bar_graph.png"
                                 alt="Stats wakatime"/>
                        </div>
                    </Card>
                </div>
                <div className="mt-20"/>
            </div>
            <Footer/>
        </div>
    );
}