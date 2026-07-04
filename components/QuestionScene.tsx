"use client";

import type { DishType, QuizQuestion } from "../data/quiz";

/** Scene 7 — 질문. 메뉴판 속지 위에서 6개의 질문이 이어집니다. */
export default function QuestionScene({
  question,
  questionIndex,
  total,
  onAnswer,
}: {
  question: QuizQuestion;
  questionIndex: number;
  total: number;
  onAnswer: (type: DishType) => void;
}) {
  return (
    <section className="scene question-scene">
      {/* key로 질문마다 카드가 새로 떠오르게 합니다 */}
      <div className="question-card" key={questionIndex}>
        <p className="eyebrow">
          Question N°{questionIndex + 1}
        </p>

        <div className="question-card__dots" aria-label={`${total}문항 중 ${questionIndex + 1}번째`}>
          {Array.from({ length: total }).map((_, i) => (
            <i key={i} className={i <= questionIndex ? "is-filled" : ""} />
          ))}
        </div>

        <h2 className="question-card__title">{question.question}</h2>
        <p className="question-card__fr">{question.fr}</p>

        <ul className="question-card__options">
          {question.options.map((opt, i) => (
            <li key={opt.text} style={{ animationDelay: `${0.35 + i * 0.12}s` }}>
              <button type="button" onClick={() => onAnswer(opt.type)}>
                {opt.text}
              </button>
            </li>
          ))}
        </ul>

        <p className="question-card__ornament" aria-hidden>
          ❦
        </p>
      </div>
    </section>
  );
}
