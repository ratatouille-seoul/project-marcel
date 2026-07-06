"use client";

import { useCallback, useMemo, useState } from "react";
import { QUESTIONS, computeResult, type DishType } from "../data/quiz";
import OpeningScene from "../components/OpeningScene";
import DoorScene from "../components/DoorScene";
import WelcomeScene from "../components/WelcomeScene";
import MenuScene from "../components/MenuScene";
import QuestionScene from "../components/QuestionScene";
import ResultScene from "../components/ResultScene";
import EndingScene from "../components/EndingScene";

type Scene =
  | "opening"
  | "door"
  | "welcome"
  | "menu"
  | "question"
  | "result"
  | "ending";

export default function Page() {
  const [scene, setScene] = useState<Scene>("opening");
  const [answers, setAnswers] = useState<DishType[]>([]);

  const result = useMemo(
    () => (answers.length >= QUESTIONS.length ? computeResult(answers) : null),
    [answers],
  );

  const handleAnswer = useCallback((type: DishType) => {
    setAnswers((prev) => {
      const next = [...prev, type];
      if (next.length >= QUESTIONS.length) {
        setScene("result");
      }
      return next;
    });
  }, []);

  const restart = useCallback(() => {
    setAnswers([]);
    setScene("opening");
  }, []);

  const retakeQuiz = useCallback(() => {
    setAnswers([]);
    setScene("menu");
  }, []);

  return (
    <main className="stage">
      {scene === "opening" && <OpeningScene onNext={() => setScene("door")} />}
      {scene === "door" && <DoorScene onNext={() => setScene("welcome")} />}
      {scene === "welcome" && <WelcomeScene onNext={() => setScene("menu")} />}
      {scene === "menu" && <MenuScene onNext={() => setScene("question")} />}
      {scene === "question" && (
        <QuestionScene
          questionIndex={answers.length}
          question={QUESTIONS[Math.min(answers.length, QUESTIONS.length - 1)]}
          total={QUESTIONS.length}
          onAnswer={handleAnswer}
        />
      )}
      {scene === "result" && result && (
        <ResultScene result={result} onRetake={retakeQuiz} onEnd={() => setScene("ending")} />
      )}
      {scene === "ending" && <EndingScene onRestart={restart} />}
    </main>
  );
}
