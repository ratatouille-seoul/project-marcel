"use client";

import { RESTAURANT } from "../lib/config";
import { startBgm } from "../lib/audio";

/** Scene 1 — Bienvenue. 어두운 막이 오르기 전, 초대장. */
export default function OpeningScene({ onNext }: { onNext: () => void }) {
  return (
    <section className="scene opening">
      <div className="opening__inner">
        <p className="eyebrow rise" style={{ animationDelay: "0.2s" }}>
          {RESTAURANT.subtitle}
        </p>
        <h1 className="opening__title rise" style={{ animationDelay: "0.5s" }}>
          Bienvenue
        </h1>
        <hr className="rule rise" style={{ animationDelay: "0.8s" }} />
        <p className="opening__desc rise" style={{ animationDelay: "1.0s" }}>
          오늘 하루, 수고 많으셨어요.
          <br />
          당신의 마음에 어울리는 프랑스 요리 한 접시를
          <br />
          마르셀이 찾아드릴게요.
        </p>
        <button
          className="btn-plaque rise"
          style={{ animationDelay: "1.4s" }}
          onClick={() => {
            startBgm(); // 첫 클릭과 함께 아코디언 음악 시작
            onNext();
          }}
        >
          레스토랑 앞으로 가기
        </button>
        <p className="opening__brand rise" style={{ animationDelay: "1.7s" }}>
          {RESTAURANT.nameFr}
        </p>
      </div>
    </section>
  );
}
