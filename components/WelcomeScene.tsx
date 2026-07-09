"use client";

/** Scene 3 — 마르셀이 중앙에서 인사합니다.
 *  말풍선(장식 라벨)과 '반가워요, 마르셀!' 버튼은 마르셀 아래에 놓입니다. */
export default function WelcomeScene({ onNext }: { onNext: () => void }) {
  return (
    <section className="scene welcome-scene">
      <div className="welcome__room" aria-hidden />
      <div className="welcome__spotlight" aria-hidden />

      <div className="welcome__stack">
        {/* 마르셀 (중앙, 위쪽) */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="welcome__marcel rise"
          src="/images/marcel-wave.png"
          alt="인사하는 마르셀"
          draggable={false}
        />

        {/* 말풍선 — 장식 라벨 프레임 위에 인사말 */}
        <div className="welcome__bubble rise" style={{ animationDelay: "0.5s" }}>
          <div className="welcome__bubble-inner">
            <p className="welcome__bonjour">Bonjour !</p>
            <p className="welcome__text">
              저는 이 집의 마스코트, <strong>마르셀</strong>이에요.
              <br />
              오늘의 당신에게 어울리는 프랑스 요리를
              <br />
              제가 직접 찾아드릴게요.
            </p>
          </div>
        </div>

        {/* 버튼 — 마르셀·말풍선 아래 */}
        <button
          className="btn-plaque welcome__next rise"
          style={{ animationDelay: "0.85s" }}
          onClick={onNext}
        >
          반가워요, 마르셀!
        </button>
      </div>
    </section>
  );
}
