"use client";

/** Scene 4 — 마르셀이 메뉴판을 들고 나와 심리 테스트를 안내합니다. */
export default function MenuScene({ onNext }: { onNext: () => void }) {
  return (
    <section className="scene menu-scene">
      <div className="menu-scene__room" aria-hidden />
      <div className="menu-scene__spotlight" aria-hidden />

      <div className="menu-scene__bubble rise" style={{ animationDelay: "0.7s" }}>
        <p>
          오늘 당신의 기분과 마음에 어울리는
          <br />
          프랑스 요리를 함께 찾아봐요
        </p>
        {/* 버튼을 말풍선 안에 넣어 마르셀을 가리지 않게 합니다 */}
        <button type="button" className="btn-plaque menu-scene__start" onClick={onNext}>
          첫 번째 질문 보기
        </button>
      </div>

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="menu-scene__marcel"
        src="/images/marcel-menu.png"
        alt="메뉴판을 들고 있는 마르셀"
        draggable={false}
      />
    </section>
  );
}
