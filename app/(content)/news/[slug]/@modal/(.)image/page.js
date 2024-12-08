import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";

export default async function InterceptedImagePage({ params }) {

    const p = await params;
    const newsSlug = p.slug;
    const newsItem = DUMMY_NEWS.find(news => news.slug === newsSlug);

    if (!newsItem) {
        notFound();
    }

    return (
        <>
            <div className="modal-backdrop" />
            <dialog className="modal" open>
                <div className="fullscreen-image">
                    <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
                </div>
            </dialog> 
        </>
    );
}


/*
'use client';

import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";
import { useRouter } from "next/router";

export default function ImagePage({ params }) {
    const router = useRouter();

    const p = params;
    const newsSlug = p.slug;
    const newsItem = DUMMY_NEWS.find(news => news.slug === newsSlug);

    if (!newsItem) {
        notFound();
        return null;
    }

    const handleImageClick = () => {
        console.log("Image clicked");
        if (typeof window !== "undefined") {
            router.back();
        }
    }

    return (
        <div className="fullscreen-image" onClick={handleImageClick}>
            <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
    );
}
    */