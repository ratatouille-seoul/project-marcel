// 문에 달린 종소리를 Web Audio로 합성합니다 (오디오 파일 불필요).
export function ringDoorBell() {
  try {
    const AudioCtx =
      window.AudioContext ??
      (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    const ctx = new AudioCtx();
    const now = ctx.currentTime;

    // 종의 배음 두 개를 겹쳐 "딸랑" 소리를 만듭니다.
    const tones = [
      { freq: 1568, delay: 0, gain: 0.14 },
      { freq: 2093, delay: 0.05, gain: 0.1 },
      { freq: 1568, delay: 0.22, gain: 0.09 },
      { freq: 2093, delay: 0.27, gain: 0.07 },
    ];

    tones.forEach(({ freq, delay, gain }) => {
      const osc = ctx.createOscillator();
      const g = ctx.createGain();
      osc.type = "sine";
      osc.frequency.value = freq;
      g.gain.setValueAtTime(0.0001, now + delay);
      g.gain.exponentialRampToValueAtTime(gain, now + delay + 0.012);
      g.gain.exponentialRampToValueAtTime(0.0001, now + delay + 1.1);
      osc.connect(g);
      g.connect(ctx.destination);
      osc.start(now + delay);
      osc.stop(now + delay + 1.3);
    });

    setTimeout(() => ctx.close(), 2200);
  } catch {
    // 오디오가 차단된 환경에서는 조용히 넘어갑니다.
  }
}
