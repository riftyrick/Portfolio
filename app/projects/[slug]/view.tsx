"use client";

import {useEffect} from "react";

export const ReportView: React.FC<{ slug: string }> = ({slug}) => {
    useEffect(() => {
        fetch("https://api.farmeurimmo.fr/v1/portfolio/article/" + slug, {
            method: "POST",
        });
    }, [slug]);

    return null;
};
