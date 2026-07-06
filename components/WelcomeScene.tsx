"use client";

/** Scene 4 — 마르셀이 실내에서 손을 흔들며 인사합니다. */
export default function WelcomeScene({ onNext }: { onNext: () => void }) {
  return (
    <section className="scene welcome-scene">
      <div className="welcome__room" aria-hidden />
      <div className="welcome__spotlight" aria-hidden />

      <div className="welcome__bubble rise" style={{ animationDelay: "0.9s" }}>
        <p className="welcome__bonjour">Bonjour !</p>
        <p>
          저는 이 집의 마스코트, <strong>마르셀</strong>이에요.
          <br />
          오늘의 당신에게 어울리는 프랑스 요리를
          <br />
          제가 직접 찾아드릴게요.
        </p>
      </div>

      <button
        className="btn-plaque welcome__next rise"
        style={{ animationDelay: "1.4s" }}
        onClick={onNext}
      >
        반가워요, 마르셀!
      </button>

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="welcome__marcel"
        src="/images/marcel-wave.png"
        alt="손을 흔들며 인사하는 마르셀"
        draggable={false}
      />
    </section>
  );
}
