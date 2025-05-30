import { Editorial } from "@/app/content/articles";
import React from "react";

const EditorialPage = (editorial: Editorial) => {
  return (
    <div className="px-36">
      <p className="font-bold text-2xl">Letter from the Editor</p>
      <p className="text-2xl">
        Issue {editorial.id}: {editorial.theme}
      </p>
      <div className="flex flex-col space-y-4 my-8 text-lg text-justify">
        {editorial.content.map((paragraph) => (
          <p>{paragraph}</p>
        ))}
      </div>
    </div>
  );
};

export default EditorialPage;
