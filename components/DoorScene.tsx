"use client";

import { useState } from "react";
import { RESTAURANT } from "../lib/config";
import { ringDoorBell } from "../lib/bell";

type DoorStage = "closed" | "half" | "open";

/** Scene 2 — 레스토랑의 문. 클릭하면 종이 울리며 닫힘 → 반열림 → 활짝 열림. */
export default function DoorScene({ onNext }: { onNext: () => void }) {
  const [stage, setStage] = useState<DoorStage>("closed");

  const openDoor = () => {
    if (stage !== "closed") return;
    ringDoorBell();
    setStage("half");
    setTimeout(() => setStage("open"), 650);
    setTimeout(onNext, 2100);
  };

  return (
    <section className={`scene door-scene door-scene--${stage}`}>
      <div className="door-scene__top">
        <p className="eyebrow">{RESTAURANT.nameFr}</p>
        <p className={`door-scene__hint ${stage !== "closed" ? "is-hidden" : ""}`}>
          문을 살짝 눌러, 안으로 들어가 보세요
        </p>
      </div>

      <button
        type="button"
        className={`door-sprite door-sprite--${stage}`}
        onClick={openDoor}
        aria-label="문 열기"
      />

      <p className={`door-scene__bell-note ${stage !== "closed" ? "is-ringing" : ""}`} aria-hidden>
        ✦ 딸랑 —
      </p>
    </section>
  );
}
