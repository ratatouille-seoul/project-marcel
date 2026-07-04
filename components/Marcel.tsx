/**
 * 마르셀 — 레스토랑 로고의 쥐 마스코트.
 * 로고 이미지에서 쥐 부분만 잘라 보여주고, 살짝 갸웃거리는 애니메이션을 더합니다.
 * (mix-blend-mode: multiply 로 흰 배경을 지워 어떤 배경에도 자연스럽게 얹힙니다)
 */
export default function Marcel({
  size = 220,
  animation = "peek",
}: {
  size?: number;
  animation?: "peek" | "sway" | "none";
}) {
  return (
    <div
      className={`marcel marcel--${animation}`}
      style={{ width: size, height: size * 0.62 }}
      aria-label="마스코트 마르셀"
      role="img"
    >
      {/* 로고 상단(쥐)만 보이도록 잘라냅니다 */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/logo.png" alt="" draggable={false} />
    </div>
  );
}
