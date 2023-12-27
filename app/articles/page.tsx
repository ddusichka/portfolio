import content from "../content/content";
import ArticleCard from "../components/Articles/ArticleCard";

export default function Articles() {
  return (
    <div>
      <h1>Articles</h1>
      <p>
        I&apos;m currently a writer for NU Sci, Northeastern&apos;s student-run
        science magazine.
      </p>
      <div className="grid grid-cols-1 gap-4 laptop:grid-cols-4 laptop:gap-6 my-5">
        {content.articles.map((proj, index) => (
          <ArticleCard {...proj} key={index} />
        ))}
      </div>
    </div>
  );
}
