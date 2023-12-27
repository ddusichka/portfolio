import content from "../content/content";
import ArticleCard from "../components/Articles/ArticleCard";

export default function Articles() {
  return (
    <div>
      <h1>Articles</h1>
      <p>
        I&apos;m currently a writer and an editor for{" "}
        <a
          className="font-bold text-blue-800"
          href="https://nuscimagazine.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          NU Sci
        </a>
        , Northeastern&apos;s student-run science magazine. I write 2 articles
        per semester and work with other student writers to edit around 10
        articles per semester. Here is my currently published work!
      </p>

      <div className="grid grid-cols-1 gap-4 laptop:grid-cols-4 laptop:gap-6 my-5">
        {content.articles
          .sort((a, b) => b.id - a.id)
          .map((proj, index) => (
            <ArticleCard {...proj} key={index} />
          ))}
      </div>
    </div>
  );
}
