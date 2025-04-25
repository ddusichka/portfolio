"use client";

import { useState, useEffect } from "react";
import content from "../content/content";
import { motion } from "framer-motion";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import {
  Article,
  ArticleCategory,
  categoryColors,
  Editorial,
} from "../content/articles";
import ArticleCard from "../components/Articles/ArticleCard";
import Link from "next/link";

export default function Articles(): JSX.Element {
  const [articles, setArticles] = useState<Article[]>(content.articles);
  const [editorials, setEditorials] = useState<Editorial[]>([]);
  const [selectedCategory, setSelectedCategory] =
    useState<ArticleCategory | null>(null);

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
          I&apos;m currently the Editor-in-Chief of{" "}
          <Link
            className="font-bold text-purple-700 hover:text-purple-900 transition-colors duration-300"
            href="https://nuscimagazine.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            NU Sci
          </Link>
          , Northeastern&apos;s student-run science magazine. While managing the
          magazine&apos;s editorial team, I also write 2 articles per semester
          and contribute a letter from the editor in each issue.
        </p>
      </motion.div>

      <Tabs defaultValue="articles" className="w-full">
        {/* <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="articles" className="flex items-center gap-2">
            <PiPencilLine className="h-5 w-5" />
            <span>Articles</span>
          </TabsTrigger>
          <TabsTrigger value="editorials" className="flex items-center gap-2">
            <PiNewspaper className="h-5 w-5" />
            <span>Letters from the Editor</span>
          </TabsTrigger>
        </TabsList> */}

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
                  className={`cursor-pointer items-center px-3 py-1 rounded-md font-medium ${
                    categoryColors[category as ArticleCategory]
                  } ${
                    category == selectedCategory && "border-black border"
                  } text-black`}
                >
                  {category}
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
            <div className="space-y-8">
              {editorials.length > 0 ? (
                editorials.map((editorial, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
                  >
                    <div className="md:flex">
                      <div className="md:w-1/3 h-48 md:h-auto">
                        <img
                          src={
                            editorial.cardImage ||
                            "/images/editorial-placeholder.jpg"
                          }
                          alt={`${editorial.issue}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-6 md:w-2/3">
                        <div className="uppercase tracking-wide text-sm text-purple-600 font-semibold mb-2">
                          Letter from the Editor — {editorial.issue}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                          {editorial.title || `Thoughts on ${editorial.issue}`}
                        </h3>
                        <p className="text-gray-600 mb-4 line-clamp-3">
                          {editorial.summary ||
                            "In this letter, I share thoughts on the theme of this issue and the collaborative process behind creating a student-run science magazine."}
                        </p>
                        <div className="flex flex-wrap gap-3">
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                            {editorial.date}
                          </span>
                          <a
                            href={`/editorials/${editorial.id}`}
                            className="text-sm font-medium text-purple-600 hover:text-purple-900 transition-colors duration-300"
                          >
                            Read Full Letter →
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="bg-white rounded-xl shadow-sm p-8 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Sample Letter from the Editor
                  </h3>
                  <div className="mt-6">
                    <img
                      src="/images/editor-letter-sample.jpg"
                      alt="Sample letter from the editor"
                      className="mx-auto max-w-full h-auto rounded-lg"
                    />
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
