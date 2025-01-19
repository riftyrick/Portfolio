"use client";
import {ArrowLeft} from "lucide-react";
import Link from "next/link";
import React, {useEffect, useRef, useState} from "react";

export const Navigation: React.FC = () => {
    const ref = useRef<HTMLElement>(null);
    const [isIntersecting, setIntersecting] = useState(true);

    useEffect(() => {
        if (!ref.current) return;
        const observer = new IntersectionObserver(([entry]) =>
            setIntersecting(entry.isIntersecting),
        );

        observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    //const {t} = useTranslation();

    return (
        <header ref={ref}>
            <div
                className={`fixed inset-x-0 top-0 z-50 backdrop-blur  duration-200 border-b  ${
                    isIntersecting
                        ? "bg-zinc-900/0 border-transparent"
                        : "bg-zinc-900/500  border-zinc-800 "
                }`}
            >
                <div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
                    <div className="flex justify-between gap-8">
                        <Link
                            href="/dev"
                            className="duration-200 text-zinc-400 hover:text-zinc-100">
                            Developer
                        </Link>
                        <Link
                            href={"/sa"}
                            className="duration-200 text-zinc-400 hover:text-zinc-100">
                            System Administrator
                        </Link>
                        <Link href={"/provider"}
                              className="duration-200 text-zinc-400 hover:text-zinc-100">
                            Provider
                            <div className="bg-blue-800 w-1 h-0.5 rounded-full animate-bar"/>
                        </Link>
                        <Link
                            href="/stats"
                            className="duration-200 text-zinc-400 hover:text-zinc-100">
                            Stats
                        </Link>
                        <Link
                            href="/projects"
                            className="duration-200 text-zinc-400 hover:text-zinc-100"
                        >
                            Blog & Projects
                        </Link>
                        <Link
                            href="/contact"
                            className="duration-200 text-zinc-400 hover:text-zinc-100"
                        >
                            Contact
                        </Link>
                    </div>

                    <Link
                        href="/"
                        className="duration-200 text-zinc-300 hover:text-zinc-100"
                    >
                        <ArrowLeft className="w-6 h-6 "/>
                    </Link>
                </div>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </header>
    );
};
