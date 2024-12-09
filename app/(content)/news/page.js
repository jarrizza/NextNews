import { getAllNews } from "@/app/lib/news";
import NewsList from "@/components/news-list";
import { DUMMY_NEWS } from "@/dummy-news";

export default async function NewsPage() {
  // const news = getAllNewsImmediate(); // No need for async/await for this
  const news = await getAllNews();

  return (
    <>
    <h1>News Page</h1>
    <NewsList news={news} />
    </>
  );
}
