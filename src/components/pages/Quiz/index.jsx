import React, { useEffect, useState } from "react";
import fetchQuestions from "../../../api/fetchQuestions";
import Typography from "../../common/Typography";
import Question from "../../Question";

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await fetchQuestions();
      setQuestions(data);
      setLoading(false);
    };

    fetchData();
  }, []);
  return (
    <>
      {loading && (
        <Typography
          text="Loading..."
          container="p"
          variant="secondary"
          size="content"
          className="mt-20"
        />
      )}
      {questions.length > 0 && (
        <Question category={questions[0].category} question={questions[0].question} />
      )}
      {!loading && questions.length === 0 && (
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
