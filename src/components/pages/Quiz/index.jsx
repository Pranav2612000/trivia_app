import React, { useEffect, useState } from "react";
import fetchQuestions from "../../../api/fetchQuestions";
import Typography from "../../common/Typography";
import Question from "../../Question";
import Results from "../../Results";

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

  const resetQuiz = async () => {
    setAnswers({});
    setCurrQuestionIndex(0);
    setLoading(true);
    const data = await fetchQuestions();
    setQuestions(data);
    setLoading(false);
  };

  const renderUIForCurrentState = () => {
    if (loading) {
      return (
        <Typography
          text="Loading..."
          container="p"
          variant="secondary"
          size="content"
          className="mt-20"
        />
      );
    } else if (!loading && questions.length === 0) {
      return (
        <Typography
          text="Questions could not be fetched. Try reloading the page!"
          container="p"
          variant="secondary"
          size="content"
          className="mt-20"
        />
      );
    } else if (questions.length > 0 && currQuestionIndex < questions.length) {
      return (
        <Question
          category={questions[currQuestionIndex].category}
          question={questions[currQuestionIndex].question}
          addAnswer={(answer) => addAnswer(currQuestionIndex, answer)}
        />
      );
    } else {
      return <Results questions={questions} answers={answers} resetQuiz={resetQuiz} />;
    }
  };

  return <div className="p-8">{renderUIForCurrentState()}</div>;
};

export default Quiz;
