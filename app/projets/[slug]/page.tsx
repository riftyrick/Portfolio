import {notFound} from "next/navigation";
import {allProjects} from "contentlayer/generated";
import {Mdx} from "@/app/components/mdx";
import {Header} from "./header";
import "./mdx.css";
import {ReportView} from "./view";
import Footer from "@/app/components/footer";
import React from "react";

export const revalidate = 60;

type Props = {
    params: {
        slug: string;
    };
};

export async function generateStaticParams(): Promise<Props["params"][]> {
    return allProjects
        .filter((p) => p.published)
        .map((p) => ({
            slug: p.slug,
        }));
}

export default async function PostPage({params}: Props) {
    const slug = params?.slug;
    const project = allProjects.find((project) => project.slug === slug);

    if (!project) {
        notFound();
    }

    let views = 0;
    try {
        const res = await fetch(`https://api.farmeurimmo.fr/v1/portfolio/article/${slug}`);
        views = await res.json()
    } catch (e) {
    }

    return (
        <div className="overflow-hidden bg-gradient-to-tl from-black via-zinc-900 to-black min-h-screen">
            <Header project={project} views={views}/>
            <ReportView slug={project.slug}/>

            <div
                className="relative w-full h-px -mt-px bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0"/>

            <article className="px-4 py-12 mx-auto prose prose-invert prose-quoteless">
                <Mdx code={project.body.code}/>
            </article>

            <Footer/>
        </div>
    );
}
