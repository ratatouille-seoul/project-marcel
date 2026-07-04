"use client";

import { useState } from "react";
import { ringDoorBell } from "../lib/bell";

type Stage = "facade" | "closed" | "half" | "open";

/**
 * Scene 2 — 레스토랑 앞.
 * 파사드 전경 → 문을 클릭하면 종이 울리고 카메라가 문으로 다가간 뒤,
 * 문이 3단계(닫힘 → 반열림 → 활짝)로 열리며 문틈으로 실내가 보입니다.
 */
export default function DoorScene({ onNext }: { onNext: () => void }) {
  const [stage, setStage] = useState<Stage>("facade");

  const approach = () => {
    if (stage !== "facade") return;
    ringDoorBell();
    setStage("closed"); // 파사드 줌인 시작
    setTimeout(() => setStage("half"), 1600);
    setTimeout(() => setStage("open"), 2300);
    setTimeout(onNext, 3800);
  };

  return (
    <section className={`scene door-scene door-scene--${stage}`}>
      {/* 파사드 전경 */}
      <div className="facade-view" aria-hidden />

      {/* 문 클로즈업 (스프라이트 + 문틈으로 보이는 실내) */}
      <div className="door-stage" aria-hidden>
        <span className="door-stage__interior" />
        <span className="door-stage__sprite" />
      </div>

      {/* UI */}
      <div className="door-scene__ui">
        <p className="door-scene__hint">저기, 불빛이 새어 나오는 문이 보여요</p>
        <button type="button" className="btn btn--gold door-scene__enter" onClick={approach}>
          문을 열고 들어가기
        </button>
      </div>
    </section>
  );
}
