"use client";

/** Scene 4 — 마르셀이 중앙에서 메뉴판을 들고 심리 테스트를 안내합니다.
 *  말풍선과 '첫 번째 질문 보기' 버튼은 마르셀 아래에 놓입니다. */
export default function MenuScene({ onNext }: { onNext: () => void }) {
  return (
    <section className="scene menu-scene">
      <div className="menu-scene__room" aria-hidden />
      <div className="menu-scene__spotlight" aria-hidden />

      <div className="menu-scene__stack">
        {/* 마르셀 (중앙) */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="menu-scene__marcel rise"
          src="/images/marcel-menu.png"
          alt="메뉴판을 들고 있는 마르셀"
          draggable={false}
        />

        {/* 말풍선 — 장식 라벨 프레임 위에 안내 문구 */}
        <div className="menu-scene__bubble rise" style={{ animationDelay: "0.5s" }}>
          <p>
            오늘 당신의 기분과 마음에 어울리는
            <br />
            프랑스 요리를 함께 찾아봐요
          </p>
        </div>

        {/* 첫 번째 질문 보기 버튼 (이미지) */}
        <button
          type="button"
          className="menu-scene__cta rise"
          style={{ animationDelay: "0.85s" }}
          onClick={onNext}
          aria-label="첫 번째 질문 보기"
        />
      </div>
    </section>
  );
}
