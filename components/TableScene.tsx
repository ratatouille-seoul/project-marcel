"use client";

import { useState } from "react";

/** Scene 5 — 당신의 자리. '자리에 앉기'를 누르면 테이블 위 메뉴북으로 다가갑니다. */
export default function TableScene({ onNext }: { onNext: () => void }) {
  const [sitting, setSitting] = useState(false);

  const sitDown = () => {
    if (sitting) return;
    setSitting(true);
    setTimeout(onNext, 1500);
  };

  return (
    <section className={`scene table-scene ${sitting ? "is-sitting" : ""}`}>
      <div className="table-room" aria-hidden />

      <div className="table-scene__ui">
        <button
          className="btn btn--gold table-scene__sit rise"
          style={{ animationDelay: "0.6s" }}
          onClick={sitDown}
        >
          자리에 앉기
        </button>
      </div>
    </section>
  );
}
