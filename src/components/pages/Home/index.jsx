import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../common/Button";
import Typography from "../../common/Typography";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="p-8 flex flex-col h-full justify-between items-center">
      <Typography
        text="Welcome to Trivia Challenge"
        container="h1"
        variant="primary"
        size="heading"
      />

      <div>
        <Typography
          text="You will be presented with 10 True or False Questions"
          container="p"
          variant="secondary"
          size="content"
        />
        <Typography
          text="Can you score 100%"
          container="p"
          variant="secondary"
          size="content"
          className="mt-10 font-bold"
        />
      </div>

      <Button onClick={() => navigate("/quiz")} text="Begin" variant="primary" />
    </div>
  );
};
export default Home;
