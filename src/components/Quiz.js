import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { BlueButton } from "./BlueButton";
import Progress from "./Progress";
import { check, next } from "./../store/module/score";
import styled from "styled-components";

const Img = styled.img`
  width: inherit;
  margin-bottom: 50px;
`;

export function Quiz() {
  const dispatch = useDispatch();
  const quiz = useSelector((state) => state.score.quizs);
  const page = useSelector((state) => state.score.page);

  return (
    <>
      <h1>{quiz[page - 1].q}</h1>
      {quiz[page - 1].img && <Img src={quiz[page - 1].img} />}
      {quiz[page - 1].a.map((item) => {
        return (
          <BlueButton
            text={item.text}
            key={item.text}
            clickEvent={() => {
              dispatch(check({ isCorrect: item.isCorrect }));
              dispatch(next());
            }}
          />
        );
      })}
      <Progress page={page} maxPage={quiz.length} />
    </>
  );
}
