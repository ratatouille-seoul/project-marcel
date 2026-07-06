"use client";

import { useState } from "react";
import { isMuted, setMuted } from "../lib/audio";

/** 우하단에 떠 있는 소리 켜기/끄기 버튼 */
export default function AudioToggle() {
  const [muted, setMutedState] = useState(isMuted());

  const toggle = () => {
    const next = !muted;
    setMuted(next);
    setMutedState(next);
  };

  return (
    <button
      type="button"
      className="audio-toggle"
      onClick={toggle}
      aria-label={muted ? "소리 켜기" : "소리 끄기"}
      title={muted ? "소리 켜기" : "소리 끄기"}
    >
      {muted ? "🔇" : "🔊"}
    </button>
  );
}
