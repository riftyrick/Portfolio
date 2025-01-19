"use client";
import {Navigation} from "../components/nav";
import {Card} from "../components/card";
import Footer from "@/app/components/footer";
import React from "react";
import Lang from "@/app/components/lang";
import {useTranslation} from "react-i18next";

const services = [
    {
        title: "provider_1_title",
        description: "provider_1_desc",
        price: "provider_1_price",
        gig: "https://fr.fiverr.com/s/VPrYmY",
        isFiverr: true,
        inDev: false
    },
    {
        title: "provider_2_title",
        description: "provider_2_desc",
        price: "provider_2_price",
        gig: "",
        isFiverr: true,
        inDev: true
    },
    {
        title: "provider_3_title",
        description: "provider_3_desc",
        price: "provider_3_price",
        gig: "",
        isFiverr: true,
        inDev: true
    }
]

export default function provider() {
    const [t] = useTranslation();

    return (
        <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
            <Navigation/>
            <title>{t('provider_title')}</title>
            <div className="container flex flex-col items-center justify-center min-h-screen px-4 mx-auto">
                <Lang/>
                <div id="phone-space"/>
                <div className="flex flex-col items-center justify-center w-full mx-auto text-center mt-20">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">{t('provider_h1')}</h1>
                </div>
                <div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-20 sm:grid-cols-3 lg:gap-16">
                    {services.map((key, index) => (
                        <Card key={index}>
                            <div
                                className="flex flex-col items-center justify-center w-full h-full p-8 mx-auto rounded-lg shadow-lg dark:bg-gray-950">
                                <div
                                    className="flex items-center justify-center w-20 h-20 mb-4 rounded-full bg-gradient-to-tr from-zinc-900 to-zinc-900/0">
                                    {key.isFiverr &&
                                        <img
                                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Fiverr_Logo_09.2020.svg/1280px-Fiverr_Logo_09.2020.svg.png"
                                            alt="Provider"
                                            className="w-150 h-150 p-2"/>
                                    }
                                </div>
                                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">{t(key.title)}</h2>
                                <p className="text-sm text-gray-500 dark:text-gray-400">{t(key.description)}</p>
                                <span className="mt-2 text-gray-500 dark:text-gray-300">{t(key.price)}</span>
                                {key.inDev &&
                                    <a href="/contact">
                                        <button
                                            className="px-4 py-2 mt-4 text-sm font-medium text-white transition duration-500 ease-in-out transform bg-gradient-to-r from-red-500 to-red-500/0 rounded-md hover:to-red-500 hover:from-red-500/0 hover:scale-105 red-gradient">
                                            {t('provider_button_contact')}
                                        </button>
                                    </a>
                                }
                                {!key.inDev &&
                                    <a href={key.gig} target="_blank" rel="noreferrer">

                                        <button
                                            className="px-4 py-2 mt-4 text-sm font-medium text-white transition duration-500 ease-in-out transform bg-gradient-to-r from-green-500 to-green-500/0 rounded-md hover:to-green-500 hover:from-green-500/0 hover:scale-105 green-gradient">
                                            {t('provider_button')}
                                        </button>
                                    </a>
                                }
                            </div>
                            {key.inDev &&
                                <div
                                    className="absolute top-0 right-0 px-3 py-1 text-xs font-bold text-white uppercase bg-red-500 rounded-bl-lg">
                                    {t('provider_not_available')}
                                </div>
                            }
                            {!key.inDev &&
                                <div
                                    className="absolute top-0 right-0 px-3 py-1 text-xs font-bold text-white uppercase bg-green-500 rounded-bl-lg">
                                    {t('provider_available')}
                                </div>
                            }

                        </Card>
                    ))}
                </div>
                <div className="mt-32"/>
            </div>
            <Footer/>
        </div>
    )
}