"use client";

import { useState } from "react";
import { ringDoorBell } from "../lib/bell";
import { startAmbience } from "../lib/audio";

type Stage = "facade" | "closed" | "half" | "open";

/**
 * Scene 2 — 레스토랑 앞.
 * 문 스프라이트가 파사드 이미지의 문 위치에 합성되어 있어서,
 * 클릭하면 배경 그대로 카메라가 다가가며 문이 그 자리에서 열립니다.
 * (스프라이트가 파사드와 같은 좌표계에 있어 어떤 화면 크기에서도 정렬이 유지됩니다)
 */
export default function DoorScene({ onNext }: { onNext: () => void }) {
  const [stage, setStage] = useState<Stage>("facade");

  const openDoor = () => {
    if (stage !== "facade") return;
    ringDoorBell();
    startAmbience(); // 문이 열리며 레스토랑의 웅성거림이 들려옵니다
    setStage("closed"); // 카메라가 문으로 다가갑니다
    setTimeout(() => setStage("half"), 1900);
    setTimeout(() => setStage("open"), 2700);
    setTimeout(onNext, 4300);
  };

  return (
    <section className={`scene door-scene door-scene--${stage}`}>
      {/* 파사드 무대: 이미지 비율 고정, 화면을 덮도록 확대 */}
      <div className="facade-stage" aria-hidden>
        <span className="facade-stage__img" />
        <span className="facade-stage__interior" />
        <span className="facade-stage__door" />
      </div>

      {/* 어두운 비네트 (줌과 무관하게 고정) */}
      <div className="door-scene__vignette" aria-hidden />

      <div className="door-scene__ui">
        <p className="door-scene__hint">저기, 불빛이 새어 나오는 문이 보여요</p>
        <button type="button" className="btn-plaque door-scene__enter" onClick={openDoor}>
          문을 열고 들어가기
        </button>
      </div>
    </section>
  );
}
