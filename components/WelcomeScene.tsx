"use client";

import Marcel from "./Marcel";

/** Scene 4 — 마르셀이 인사합니다. */
export default function WelcomeScene({ onNext }: { onNext: () => void }) {
  return (
    <section className="scene welcome-scene">
      <div className="welcome__bubble rise" style={{ animationDelay: "0.7s" }}>
        <p className="welcome__bonjour">Bonjour !</p>
        <p>
          저는 이 집의 마스코트, <strong>마르셀</strong>이에요.
          <br />
          오늘의 당신에게 어울리는 프랑스 요리를
          <br />
          제가 직접 찾아드릴게요.
        </p>
      </div>

      <div className="welcome__ledge rise" style={{ animationDelay: "0.25s" }}>
        <Marcel size={230} animation="peek" />
        <hr className="welcome__ledge-line" />
      </div>

      <button className="btn rise" style={{ animationDelay: "1.2s" }} onClick={onNext}>
        반가워요, 마르셀!
      </button>
    </section>
  );
}
