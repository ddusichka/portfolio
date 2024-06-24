import content from "../content/content";
import ArticleCard from "../components/Articles/ArticleCard";

export default function Articles() {
  return (
    <div>
      <h1>Articles</h1>
      <p>
        I&apos;m currently the Editor-in-Chief of{" "}
        <a
          className="font-bold text-blue-800"
          href="https://nuscimagazine.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          NU Sci
        </a>
        , Northeastern&apos;s student-run science magazine. While managing the
        magazine's editorial team, I also write 2 articles per semester. Here
        are the articles I've written throughout my time with NU Sci!
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
