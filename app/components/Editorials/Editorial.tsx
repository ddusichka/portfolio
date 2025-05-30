"use client";
import { Editorial } from "@/app/content/articles";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

const EditorialPage = (editorial: Editorial) => {
  const [plaintext, setPlaintext] = useState(false);

  const togglePlaintext = () => {
    setPlaintext((prev) => !prev);
  };

  return (
    <div className="px-4 tablet:px-36">
      <div className="flex justify-between">
        <p className="text-2xl font-bold mb-8">
          Issue {editorial.id}: {editorial.theme}
        </p>
        <Button variant="outline" onClick={() => togglePlaintext()}>
          View as {plaintext ? "PDF" : "Plaintext"}
        </Button>
      </div>
      {plaintext && (
        <div>
          <p className="font-bold text-2xl font-montserrat">
            Letter from the Editor
          </p>
          <div className="flex flex-col space-y-4 my-4 text-lg text-justify font-montserrat">
            {editorial.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>
      )}

      <iframe
        style={{ display: plaintext ? "none" : "block" }}
        src={`${editorial.pdf}/#embedded=true&toolbar=0&view=fitW`}
        className="w-full h-screen tablet:h-[700px]"
      ></iframe>
    </div>
  );
};

export default EditorialPage;
