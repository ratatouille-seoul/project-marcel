"use client";

import type { DishType, QuizQuestion } from "../data/quiz";

/**
 * Scene 5 — 질문.
 * 가로 화면: question-ui.jpg에 그려진 메뉴판과 4개 카드 슬롯 위에
 *           텍스트를 %좌표로 직접 얹습니다 (이미지와 항상 정렬).
 * 세로 화면(모바일): 종이 카드 레이아웃으로 대체합니다.
 */
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
  const dots = Array.from({ length: total });

  return (
    <section className="scene question-scene">
      {/* ── 가로 화면: 이미지 위 합성 레이아웃 ── */}
      <div className="q-stage" key={`stage-${questionIndex}`} aria-hidden={false}>
        <div className="q-stage__page">
          <p className="q-stage__eyebrow">
            오늘의 질문 <span>Question du Jour</span>
          </p>
          <h2 className="q-stage__title">{question.question}</h2>
          <p className="q-stage__fr">{question.fr}</p>
          <p className="q-stage__sign">— Marcel —</p>
        </div>

        <ul className="q-stage__options">
          {question.options.map((opt, i) => (
            <li key={opt.text} style={{ animationDelay: `${0.3 + i * 0.12}s` }}>
              <button type="button" onClick={() => onAnswer(opt.type)}>
                {opt.text}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* 진행 표시 (화면 기준 고정 — 이미지에 새겨진 정적 점들을 가립니다) */}
      <div className="question-scene__progress">
        <span className="question-scene__progress-label">
          Question N°{questionIndex + 1}
        </span>
        <span className="question-scene__progress-dots">
          {dots.map((_, i) => (
            <i key={i} className={i <= questionIndex ? "is-filled" : ""} />
          ))}
        </span>
      </div>

      {/* ── 세로 화면(모바일): 카드 레이아웃 ── */}
      <div className="question-card" key={`card-${questionIndex}`}>
        <p className="eyebrow">Question N°{questionIndex + 1}</p>

        <div className="question-card__dots" aria-label={`${total}문항 중 ${questionIndex + 1}번째`}>
          {dots.map((_, i) => (
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
