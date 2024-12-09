
import { notFound } from "next/navigation";
import { getNewsItem } from "@/app/lib/news";

export default async function ImagePage({ params }) {
    const p = await params;
    const newsSlug = p.slug;
    const newsItem = await getNewsItem(newsSlug);

    if (!newsItem) {
        notFound();
    }

    return (
        <div className="fullscreen-image">
            <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
    );
}
