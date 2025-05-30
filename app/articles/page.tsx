"use client";

import { useState, useEffect } from "react";
import content from "../content/content";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Article, ArticleCategory, categoryEmojis } from "../content/articles";
import ArticleCard from "../components/Articles/ArticleCard";
import Link from "next/link";

export default function Articles(): JSX.Element {
  const [articles, setArticles] = useState<Article[]>(content.articles);
  const [selectedCategory, setSelectedCategory] =
    useState<ArticleCategory | null>(null);

  console.log("object keys: ");
  console.log(Object.keys(ArticleCategory));

  useEffect(() => {
    // Sort articles by ID (newest first)
    let sortedArticles = [...content.articles].sort((a, b) => b.id - a.id);
    if (selectedCategory) {
      sortedArticles = sortedArticles.filter(
        (article) =>
          article.category === selectedCategory || selectedCategory === null
      );
    }
    setArticles(sortedArticles);
  }, [selectedCategory]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Articles</h1>
        <p className="text-lg text-gray-600">
          In college, I was the Editor-in-Chief of{" "}
          <Link
            className="font-bold text-purple-700 hover:text-purple-900 transition-colors duration-300"
            href="https://nuscimagazine.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            NU Sci
          </Link>
          , Northeastern&apos;s student-run science magazine. While managing the
          magazine&apos;s editorial team through the production of 4 print
          magazines, I also wrote an article and a &quot;Letter from the
          Editor&quot; for each issue.
        </p>
      </motion.div>

      <Tabs defaultValue="articles" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="articles" className="flex items-center gap-2">
            <span>Articles</span>
          </TabsTrigger>
          <TabsTrigger value="editorials" className="flex items-center gap-2">
            <span>Letters from the Editor</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="articles" className="mt-0">
          {/* Articles Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              Published Articles
            </h2>
            {/* Category filters */}
            <div className="flex flex-wrap gap-4 mb-6">
              {selectedCategory && (
                <div
                  onClick={() => setSelectedCategory(null)}
                  className="cursor-pointer items-center px-3 py-1 rounded-full font-medium bg-gray-200 text-gray-800 bg-opacity-50"
                >
                  View all
                </div>
              )}
              {Object.keys(ArticleCategory).map((category) => (
                <div
                  key={category}
                  onClick={() =>
                    setSelectedCategory(category as ArticleCategory)
                  }
                  className={`cursor-pointer flex space-x-2 items-center px-3 py-1 rounded-md font-medium  border border-gray-400

                    ${
                      category == selectedCategory
                        ? "border-black bg-[#81559B] text-white"
                        : "bg-gray-100"
                    } text-black`}
                >
                  <p>{category}</p>
                  <p> {categoryEmojis[category as ArticleCategory]}</p>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {articles.map((article, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <ArticleCard {...article} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </TabsContent>

        <TabsContent value="editorials" className="mt-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              Letters from the Editor
            </h2>
            <div className="flex w-full space-x-6">
              {content.editorials.map((editorial, index) => (
                <Link key={index} href={`/editorials/${editorial.id}`}>
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="bg-white cursor-pointer rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
                  >
                    <div className="">
                      <img src={editorial.coverImage} alt={`${editorial.id}`} />
                      <div className="p-6">
                        <div className="uppercase tracking-wide text-sm text-purple-600 font-semibold mb-2">
                          Issue {editorial.id}: {editorial.theme}
                        </div>

                        <div className="flex justify-between">
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                            {editorial.date}
                          </span>
                          <a
                            href={`/editorials/${editorial.id}`}
                            className="text-sm font-medium text-purple-600 hover:text-purple-900 transition-colors duration-300"
                          >
                            Read →
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
