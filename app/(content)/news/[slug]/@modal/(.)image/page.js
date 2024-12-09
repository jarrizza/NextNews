import { notFound } from "next/navigation";
//import { ModalBackdrop } from "@/components/modal-backdrop";
import { getNewsItem } from "@/app/lib/news";

export default async function InterceptedImagePage({ params }) {

    const p = await params;
    const newsSlug = p.slug;
    const newsItem = await getNewsItem(newsSlug);

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
<div className="modal-backdrop" />
            <ModalBackdrop />
            */