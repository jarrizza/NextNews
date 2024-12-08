import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";

export default async function ImagePage({ params }) {
    const p = await params;
    const newsSlug = p.slug;
    const newsItem = DUMMY_NEWS.find(news => news.slug === newsSlug);

    if (!newsItem) {
        notFound();
    }

    return (
        <div className="fullscreen-image">
            <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
    );
}
