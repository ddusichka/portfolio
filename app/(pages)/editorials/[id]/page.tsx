import React from "react";
import content from "@/app/content/content";
import EditorialPage from "@/app/components/Editorials/Editorial";

const Editorial = async (props: { params: Promise<{ id: string }> }) => {
  const params = await props.params;
  const editorial = content.editorials.find(
    (i) => i.id === parseInt(params.id)
  );

  if (!editorial) {
    return <div>Editorial not found</div>;
  }

  return <EditorialPage {...editorial} />;
};

export default Editorial;
