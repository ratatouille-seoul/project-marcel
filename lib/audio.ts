// ─────────────────────────────────────────────────────────────
// 배경 음악(아코디언) & 레스토랑 앰비언스 관리
// 파일 위치: public/audio/bgm.mp3, public/audio/ambience.mp3
// 브라우저 정책상 사용자가 버튼을 누른 뒤에만 재생을 시작할 수 있습니다.
// ─────────────────────────────────────────────────────────────

let bgm: HTMLAudioElement | null = null;
let ambience: HTMLAudioElement | null = null;
let muted = false;

function make(src: string, volume: number): HTMLAudioElement {
  const audio = new Audio(src);
  audio.loop = true;
  audio.volume = volume;
  audio.preload = "auto";
  return audio;
}

/** 오프닝에서 '레스토랑 앞으로 가기'를 누르면 아코디언 음악 시작 */
export function startBgm() {
  if (typeof window === "undefined") return;
  if (!bgm) bgm = make("/audio/bgm.mp3", 0.55);
  bgm.muted = muted;
  bgm.play().catch(() => {
    /* 파일이 없거나 자동재생이 막히면 조용히 넘어갑니다 */
  });
}

/** 문을 여는 순간부터 레스토랑의 웅성거림 시작 */
export function startAmbience() {
  if (typeof window === "undefined") return;
  if (!ambience) ambience = make("/audio/ambience.mp3", 0.1);
  ambience.muted = muted;
  ambience.play().catch(() => {});
}

export function setMuted(next: boolean) {
  muted = next;
  [bgm, ambience].forEach((a) => {
    if (a) a.muted = next;
  });
}

export function isMuted() {
  return muted;
}
