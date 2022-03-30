import React from "react";
import convertHTMLEntity from "../../helpers/convertHTMLEntity";
import Typography from "../common/Typography";
import Button from "../common/Button";

const Question = ({ category, question, addAnswer }) => {
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

      <div className="mx-auto max-w-md flex gap-x-4 mt-20">
        <Button onClick={() => addAnswer(true)} text="True" variant="primary" />
        <Button onClick={() => addAnswer(false)} text="False" variant="primary" />
      </div>
    </>
  );
};

export default Question;
