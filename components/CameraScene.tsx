"use client";

import { useEffect } from "react";

/** Scene 3 — 카메라가 레스토랑 안으로 천천히 들어갑니다. (자동 진행) */
export default function CameraScene({ onNext }: { onNext: () => void }) {
  useEffect(() => {
    const t = setTimeout(onNext, 3600);
    return () => clearTimeout(t);
  }, [onNext]);

  return (
    <section className="scene camera-scene">
      <div className="interior" aria-hidden />
      <p className="camera-scene__caption">따뜻한 불빛 속으로, 천천히…</p>
    </section>
  );
}
