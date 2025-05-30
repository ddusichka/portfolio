import React from "react";
import content from "@/app/content/content";
import EditorialPage from "@/app/components/Editorials/Editorial";

const Editorial = ({ params }: { params: { id: string } }) => {
  const editorial = content.editorials.find(
    (i) => i.id === parseInt(params.id)
  );

  if (!editorial) {
    return <div>Editorial not found</div>;
  }

  return <EditorialPage {...editorial} />;
};

export default Editorial;
