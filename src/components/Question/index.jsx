import React from "react";
import convertHTMLEntity from "../../helpers/convertHTMLEntity";
import Typography from "../common/Typography";

const Question = ({ category, question }) => {
  return (
    <>
      <Typography text={category} container="h2" variant="primary" size="heading" />
      <Typography
        text={convertHTMLEntity(question)}
        container="p"
        variant="secondary"
        size="content"
        className="mt-10 font-bold"
      />
    </>
  );
};

export default Question;
