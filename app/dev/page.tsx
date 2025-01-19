"use client";
import {Navigation} from "../components/nav";
import {Card} from "../components/card";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Link from "next/link";
import {faCss3, faHtml5, faJava, faJs, faPython, faReact} from '@fortawesome/free-brands-svg-icons'
import Footer from "@/app/components/footer";
import React from "react";
import Lang from "@/app/components/lang";
import {useTranslation} from "react-i18next";


const skills = [
    {
        name: 'dev_langs_java',
        href: "https://java.com",
        description: "dev_langs_java_desc",
        niveau: 5,
        icon: <FontAwesomeIcon icon={faJava} className="h-12 w-12"/>,
        handle: "",
    },
    {
        name: "dev_langs_html",
        href: "https://fr.wikipedia.org/wiki/Hypertext_Markup_Language",
        description: "dev_langs_html_desc",
        icon: <FontAwesomeIcon icon={faHtml5} className="h-12 w-12"/>,
        niveau: 5,
    },
    {
        name: "dev_langs_css",
        href: "https://fr.wikipedia.org/wiki/Feuilles_de_style_en_cascade",
        description: "dev_langs_css_desc",
        niveau: 5,
        icon: <FontAwesomeIcon icon={faCss3} className="h-12 w-12"/>,
    },
    {
        name: "dev_langs_python",
        href: "https://fr.wikipedia.org/wiki/Python_(langage)",
        description: "dev_langs_python_desc",
        niveau: 4,
        icon: <FontAwesomeIcon icon={faPython} className="h-12 w-12"/>,
    },
    {
        name: "dev_langs_sql",
        href: "https://fr.wikipedia.org/wiki/Structured_Query_Language",
        description: "dev_langs_sql_desc",
        niveau: 3,
        icon: <i className="fas fa-database">SQL</i>,
    },
    {
        name: "dev_langs_js",
        href: "https://fr.wikipedia.org/wiki/JavaScript",
        description: "dev_langs_js_desc",
        niveau: 2,
        icon: <FontAwesomeIcon icon={faJs} className="h-12 w-12"/>,
    },
    {
        name: "dev_langs_ts",
        href: "https://fr.wikipedia.org/wiki/TypeScript",
        description: "dev_langs_ts_desc",
        niveau: 2,
        icon: <i className="fab fa-microsoft">TS</i>,
    },
];

const apis = [
    {
        name: "dev_apis_spigot",
        href: "https://papermc.io",
        description: "dev_apis_spigot_desc",
        niveau: 5,
        icon: <i className="fab fa-paper-plane">Paper</i>,
    },
    {
        name: "dev_apis_velocity",
        href: "https://velocitypowered.com",
        description: "dev_apis_velocity_desc",
        niveau: 5,
        icon: <i className="fab fa-rocket">Velocity</i>,
    },
    {
        name: "dev_apis_bungeecord",
        href: "https://www.spigotmc.org",
        description: "dev_apis_bungeecord_desc",
        niveau: 5,
        icon: <i className="fab fa-rocket">BungeeCord</i>,
    },
]

const frameworks = [
    {
        name: "dev_frameworks_spring",
        href: "https://spring.io",
        description: "dev_frameworks_spring_desc",
        niveau: 4,
        icon: <i className="fab fa-spring">Spring</i>,
    },
    {
        name: "dev_frameworks_react",
        href: "https://reactjs.org",
        description: "dev_frameworks_react_desc",
        niveau: 4,
        icon: <FontAwesomeIcon icon={faReact} className="h-12 w-12"/>,
    },
]

const listOfLevels = [
    {
        name: "dev_level_1",
        num: 1,
    },
    {
        name: "dev_level_2",
        num: 2,
    },
    {
        name: "dev_level_3",
        num: 3,
    },
    {
        name: "dev_level_4",
        num: 4,
    },
    {
        name: "dev_level_5",
        num: 5,
    },
]

export default function Dev() {
    const {t} = useTranslation();

    return (
        <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
            <Navigation/>
            <title>{t('dev_title')}</title>
            <div className="container flex flex-col items-center justify-center min-h-screen px-4 mx-auto">
                <Lang/>
                <div id="phone-space"/>
                <div className="flex flex-col items-center justify-center w-full mx-auto text-center mt-20">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">{t('dev_langs')}</h1>
                </div>
                <div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-20 sm:grid-cols-3 lg:gap-16">
                    {skills.map((s, index) => (
                        <Card>
                            <Link
                                href={s.href}
                                target="_blank"
                                className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-18 lg:pb-20 md:p-16"
                            >
								<span
                                    className="absolute w-px h-1/4 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
                                    aria-hidden="true"
                                />
                                <span
                                    className="relative z-10 flex items-center justify-center w-20 h-20 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
									{s.icon}
								</span>{" "}
                                <div className="z-10 flex flex-col items-center">
									<span
                                        className="text-xl font-medium duration-150 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
										{s.handle}
									</span>
                                    <span
                                        className="text-sm font-medium duration-150 lg:text-1xl text-zinc-200 group-hover:text-white font-display">
                                        {t(s.name)}
                                    </span>
                                    <span className="mt-4 text-sm text-center text-zinc-400 group-hover:text-zinc-200">
                                        {t(s.description)}
                                    </span>
                                    <div className="mt-4 text-sm text-center text-zinc-400 group-hover:text-zinc-200">
                                        {listOfLevels.map((l) => (
                                            <span className="font-bold">
                                                {l.num <= s.niveau ? <span className="text-green-400">■</span> :
                                                    <span className="text-red-400">■</span>}
                                            </span>
                                        ))}
                                        <p>{t('dev_level')} {listOfLevels.map((l) => (
                                            <span className="font-bold">
                                                {l.num === s.niveau ? <span>{t(l.name)}</span> : null}
                                            </span>
                                        ))}</p>
                                    </div>
                                </div>
                            </Link>
                        </Card>
                    ))}
                </div>
                <div className="flex flex-col items-center justify-center w-full mx-auto text-center mt-32">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">{t('dev_apis')}</h1>
                </div>
                <div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-20 sm:grid-cols-3 lg:gap-16">
                    {apis.map((s, index) => (
                        <Card>
                            <Link
                                href={s.href}
                                target="_blank"
                                className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-18 lg:pb-20 md:p-16"
                            >
                                <span
                                    className="absolute w-px h-1/4 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
                                    aria-hidden="true"
                                />
                                <span
                                    className="relative z-10 flex items-center justify-center w-20 h-20 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
                                    {s.icon}
                                </span>{" "}
                                <div className="z-10 flex flex-col items-center">
                                    <span
                                        className="text-sm font-medium duration-150 lg:text-1xl text-zinc-200 group-hover:text-white font-display">
                                        {t(s.name)}
                                    </span>
                                    <span className="mt-4 text-sm text-center text-zinc-400 group-hover:text-zinc-200">
                                        {t(s.description)}
                                    </span>
                                    <div className="mt-4 text-sm text-center text-zinc-400 group-hover:text-zinc-200">
                                        {listOfLevels.map((l) => (
                                            <span className="font-bold">
                                                {l.num <= s.niveau ? <span className="text-green-400">■</span> :
                                                    <span className="text-red-400">■</span>}
                                            </span>
                                        ))}
                                        <p>{t('dev_level')} {listOfLevels.map((l) => (
                                            <span className="font-bold">
                                                {l.num === s.niveau ? <span>{t(l.name)}</span> : null}
                                            </span>
                                        ))}</p>
                                    </div>
                                </div>
                            </Link>
                        </Card>
                    ))}
                </div>
                <div className="flex flex-col items-center justify-center w-full mx-auto text-center mt-32">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">{t('dev_frameworks')}</h1>
                </div>
                <div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-20 sm:grid-cols-3 lg:gap-16">
                    {frameworks.map((s, index) => (
                        <Card>
                            <Link
                                href={s.href}
                                target="_blank"
                                className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-18 lg:pb-20 md:p-16"
                            >
                                <span
                                    className="absolute w-px h-1/4 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
                                    aria-hidden="true"
                                />
                                <span
                                    className="relative z-10 flex items-center justify-center w-20 h-20 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
                                    {s.icon}
                                </span>{" "}
                                <div className="z-10 flex flex-col items-center">
                                    <span
                                        className="text-sm font-medium duration-150 lg:text-1xl text-zinc-200 group-hover:text-white font-display">
                                        {t(s.name)}
                                    </span>
                                    <span className="mt-4 text-sm text-center text-zinc-400 group-hover:text-zinc-200">
                                        {t(s.description)}
                                    </span>
                                    <div className="mt-4 text-sm text-center text-zinc-400 group-hover:text-zinc-200">
                                        {listOfLevels.map((l) => (
                                            <span className="font-bold">
                                                {l.num <= s.niveau ? <span className="text-green-400">■</span> :
                                                    <span className="text-red-400">■</span>}
                                            </span>
                                        ))}
                                        <p>{t('dev_level')} {listOfLevels.map((l) => (
                                            <span className="font-bold">
                                                {l.num === s.niveau ? <span>{t(l.name)}</span> : null}
                                            </span>
                                        ))}</p>
                                    </div>
                                </div>
                            </Link>
                        </Card>
                    ))}
                </div>
                <div className="mt-32"/>
            </div>
            <Footer/>
        </div>
    );
}