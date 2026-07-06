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
        <h1 className="opening__name rise" style={{ animationDelay: "0.4s" }}>
          {RESTAURANT.nameFr}
        </h1>
        <p className="opening__name-kr rise" style={{ animationDelay: "0.55s" }}>
          {RESTAURANT.nameKr}
        </p>
        <p className="opening__welcome rise" style={{ animationDelay: "0.75s" }}>
          Bienvenue
        </p>
        <p className="opening__welcome-kr rise" style={{ animationDelay: "0.9s" }}>
          어서오세요
        </p>
        <hr className="rule rise" style={{ animationDelay: "1s" }} />
        <p className="opening__desc rise" style={{ animationDelay: "1.1s" }}>
          오늘 하루, 수고 많으셨어요.
          <br />
          당신의 마음에 어울리는 프랑스 요리 한 접시를
          <br />
          마르셀이 찾아드릴게요.
        </p>
        <button
          className="btn-plaque rise"
          style={{ animationDelay: "1.5s" }}
          onClick={() => {
            startBgm(); // 첫 클릭과 함께 아코디언 음악 시작
            onNext();
          }}
        >
          레스토랑 앞으로 가기
        </button>
      </div>
    </section>
  );
}
