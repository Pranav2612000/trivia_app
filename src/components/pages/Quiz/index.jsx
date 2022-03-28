import React, { useEffect, useState } from "react";
import fetchQuestions from "../../../api/fetchQuestions";
import Typography from "../../common/Typography";
import Question from "../../Question";

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchQuestions();
      setQuestions(data);
    };

    fetchData();
  }, []);
  return (
    <>
      {questions.length > 0 && (
        <Question category={questions[0].category} question={questions[0].question} />
      )}
      {questions.length === 0 && (
        <Typography
          text="Questions could not be fetched. Try reloading the page!"
          container="p"
          variant="secondary"
          size="content"
          className="mt-20"
        />
      )}
    </>
  );
};

export default Quiz;
