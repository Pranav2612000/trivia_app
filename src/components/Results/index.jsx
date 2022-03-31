/* eslint-disable no-unused-vars */
import React from "react";
import Typography from "../common/Typography";
import Button from "../common/Button";
import convertHTMLEntity from "../../helpers/convertHTMLEntity";
import isTruthy from "../../helpers/isTruthy";
const ResultLine = ({ questionText, isCorrect }) => {
  return (
    <div className="flex items-center">
      <span className="mr-3">{isCorrect ? "✅" : "❌"}</span>
      <Typography
        text={convertHTMLEntity(questionText)}
        container="span"
        variant="secondary"
        size="content"
      />
      <br />
    </div>
  );
};
const Results = ({ questions, answers, resetQuiz }) => {
  console.log({ questions, answers });
  return (
    <div>
      <Typography text={"Results"} container="h2" variant="primary" size="heading" />

      <div className="text-left max-w-md mx-auto my-5 flex flex-col gap-y-4">
        {questions.map((question, index) => {
          return (
            <ResultLine
              key={index}
              questionText={question.question}
              isCorrect={isTruthy(question.correct_answer) === answers[index]}
            />
          );
        })}
      </div>
      <Button onClick={() => resetQuiz()} text="Play Again?" variant="primary" />
    </div>
  );
};
export default Results;
