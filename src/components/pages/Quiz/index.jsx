import React, { useEffect, useState } from "react";
import fetchQuestions from "../../../api/fetchQuestions";
import Typography from "../../common/Typography";
import Question from "../../Question";

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currQuestionIndex, setCurrQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
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

  const addAnswer = (questionIndex, answer) => {
    const newAnswers = { ...answers, [questionIndex]: answer };
    setAnswers(newAnswers);
    setCurrQuestionIndex((val) => val + 1);
    return;
  };

  return (
    <div className="p-8">
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
        <Question
          category={questions[currQuestionIndex].category}
          question={questions[currQuestionIndex].question}
          addAnswer={(answer) => addAnswer(currQuestionIndex, answer)}
        />
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
    </div>
  );
};

export default Quiz;
