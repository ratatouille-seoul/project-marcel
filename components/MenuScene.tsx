"use client";

import { useState } from "react";

/** Scene 6 — 메뉴북. 닫힌 표지를 누르면 책이 펼쳐집니다. */
export default function MenuScene({ onNext }: { onNext: () => void }) {
  const [opened, setOpened] = useState(false);

  return (
    <section className={`scene menu-scene ${opened ? "is-open" : ""}`}>
      {/* 닫힌 메뉴북 (테이블 클로즈업) */}
      <div className="menu-bg menu-bg--closed" aria-hidden />
      {/* 펼쳐진 메뉴북 */}
      <div className="menu-bg menu-bg--open" aria-hidden />

      <div className="menu-scene__ui">
        {!opened ? (
          <>
            <p className="menu-scene__hint">메뉴판이 당신을 기다려요</p>
            <button
              type="button"
              className="btn btn--gold"
              onClick={() => setOpened(true)}
            >
              메뉴북 펼치기
            </button>
          </>
        ) : (
          <>
            <p className="menu-scene__hint menu-scene__hint--open rise">
              여섯 개의 질문에 답해주시면,
              <br />
              마르셀이 오늘의 요리를 골라드릴게요.
            </p>
            <button
              type="button"
              className="btn btn--gold rise"
              style={{ animationDelay: "0.4s" }}
              onClick={onNext}
            >
              첫 번째 질문 보기
            </button>
          </>
        )}
      </div>
    </section>
  );
}
