"use client";

import { useState } from "react";
import type { DishResult } from "../data/quiz";
import { RESTAURANT, youtubeSearchUrl } from "../lib/config";

/* ── 장식 SVG ─────────────────────────────────────────── */

function ChefHat() {
  return (
    <svg className="rs-hat" viewBox="0 0 48 40" aria-hidden>
      <path
        d="M12 26h24v9a2 2 0 0 1-2 2H14a2 2 0 0 1-2-2v-9Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M12 27c-5 0-8-3.4-8-7.6 0-3.6 2.6-6.4 6-6.8C10.4 8.6 13.8 6 18 6c2.6 0 4.8 1 6 2.7C25.2 7 27.4 6 30 6c4.2 0 7.6 2.6 8 6.6 3.4.4 6 3.2 6 6.8 0 4.2-3 7.6-8 7.6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path d="M18 27v-5M24 27v-6M30 27v-5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
    </svg>
  );
}

/** 좌우 잎사귀 장식이 달린 구분선 */
function Flourish({ className = "" }: { className?: string }) {
  return (
    <svg className={`rs-flourish ${className}`} viewBox="0 0 200 12" aria-hidden>
      <path d="M0 6h72M128 6h72" stroke="currentColor" strokeWidth="1" opacity=".55" />
      <path
        d="M100 1.5c3 2 5 3.2 8 4.5-3 1.3-5 2.5-8 4.5-3-2-5-3.2-8-4.5 3-1.3 5-2.5 8-4.5Z"
        fill="currentColor"
        opacity=".9"
      />
      <circle cx="86" cy="6" r="1.6" fill="currentColor" opacity=".7" />
      <circle cx="114" cy="6" r="1.6" fill="currentColor" opacity=".7" />
    </svg>
  );
}

const ICONS = {
  sun: (
    <svg viewBox="0 0 32 32" aria-hidden>
      <circle cx="16" cy="16" r="6" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <g stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        <path d="M16 3v4M16 25v4M3 16h4M25 16h4M6.8 6.8l2.9 2.9M22.3 22.3l2.9 2.9M25.2 6.8l-2.9 2.9M9.7 22.3l-2.9 2.9" />
      </g>
    </svg>
  ),
  music: (
    <svg viewBox="0 0 32 32" aria-hidden>
      <path
        d="M12 22V8l12-2.5v14"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <ellipse cx="9" cy="22.5" rx="3.6" ry="3" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <ellipse cx="21" cy="19.5" rx="3.6" ry="3" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 12.5l12-2.5" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  ),
  wine: (
    <svg viewBox="0 0 32 32" aria-hidden>
      <path
        d="M10 5h12l-1 8a5 5 0 0 1-10 0l-1-8Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M16 18v8M11 26h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
};

/** 카드 우측(모바일) / 하단(PC) 판화풍 일러스트 */
const ART = {
  cafe: (
    <svg viewBox="0 0 120 80" aria-hidden>
      <g fill="none" stroke="currentColor" strokeWidth="1" strokeLinejoin="round">
        <path d="M14 70h92M20 70V34h80v36" />
        <path d="M20 34l6-10h68l6 10" />
        <path d="M26 24v-6h68v6" />
        <path d="M32 70V52h14v18M56 70V52h12v18M78 70V52h12v18" />
        <path d="M30 44h60" strokeDasharray="3 3" />
        <path d="M20 34h80" />
        <path d="M36 62h6M60 62h6M82 62h6" strokeWidth=".8" />
      </g>
      <g fill="currentColor" opacity=".55">
        <circle cx="42" cy="28" r="1.4" />
        <circle cx="60" cy="28" r="1.4" />
        <circle cx="78" cy="28" r="1.4" />
      </g>
    </svg>
  ),
  gramophone: (
    <svg viewBox="0 0 120 80" aria-hidden>
      <g fill="none" stroke="currentColor" strokeWidth="1" strokeLinejoin="round">
        <path d="M40 66h44v6H40zM48 66V50h28v16" />
        <path d="M62 50V32" />
        <path d="M62 32c0-8 6-14 14-16 5-1.4 9 1 9 6 0 7-8 14-16 15-4 .6-7-1-7-5Z" />
        <path d="M66 34c1-5 5-9 10-10" strokeWidth=".8" opacity=".7" />
      </g>
      <g fill="none" stroke="currentColor" strokeWidth="1" opacity=".8">
        <path d="M24 30v10M24 30l8-2v10" />
        <ellipse cx="21.5" cy="41" rx="3" ry="2.4" />
        <ellipse cx="29.5" cy="39" rx="3" ry="2.4" />
        <path d="M96 44v8M96 44l6-1.6v8" />
        <ellipse cx="94" cy="53" rx="2.4" ry="2" />
        <ellipse cx="100" cy="51.4" rx="2.4" ry="2" />
      </g>
    </svg>
  ),
  bottle: (
    <svg viewBox="0 0 120 80" aria-hidden>
      <g fill="none" stroke="currentColor" strokeWidth="1" strokeLinejoin="round">
        <path d="M52 72V40c0-5 4-7 4-12v-8h10v8c0 5 4 7 4 12v32Z" />
        <path d="M52 48h18" />
        <path d="M56 16h6v4h-6z" />
        <path d="M84 30h16l-2 11a6 6 0 0 1-12 0l-2-11Z" />
        <path d="M92 47v18M86 65h12" />
      </g>
      <g fill="none" stroke="currentColor" strokeWidth="1" opacity=".75">
        <circle cx="24" cy="56" r="4" />
        <circle cx="33" cy="60" r="4" />
        <circle cx="28" cy="66" r="4" />
        <path d="M26 50c1-5 4-8 8-9" strokeLinecap="round" />
      </g>
    </svg>
  ),
  street: (
    <svg viewBox="0 0 140 90" aria-hidden>
      <g fill="none" stroke="currentColor" strokeWidth="1" strokeLinejoin="round">
        <path d="M8 80h124" />
        <path d="M18 80V26h48v54M66 80V38h40v42" />
        <path d="M18 26l8-8h34l6 8M66 38l8-7h26l6 7" />
        <path d="M26 40h12v12H26zM46 40h12v12H46zM74 48h10v10H74zM92 48h8v10h-8z" />
        <path d="M30 80V64h16v16" />
        <path d="M112 80V44M106 44h12l-2-6h-8z" />
        <path d="M112 44v-8" />
      </g>
      <g fill="currentColor" opacity=".4">
        <circle cx="112" cy="34" r="2" />
      </g>
      <path d="M18 26h48" stroke="currentColor" strokeWidth="1.4" opacity=".8" fill="none" />
    </svg>
  ),
};

/* ── 결과 화면 ─────────────────────────────────────────── */

export default function ResultScene({
  result,
  onRetake,
  onEnd,
}: {
  result: DishResult;
  onRetake: () => void;
  onEnd: () => void;
}) {
  const [shared, setShared] = useState(false);

  // "오늘의 당신 — ○○한 사람" 에서 뒷부분만 사용
  const moodText = result.mood.includes("—") ? result.mood.split("—")[1].trim() : result.mood;

  const share = async () => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    const text = `${result.typeTitle} 오늘의 요리는 ${result.dishKr}!`;
    try {
      if (navigator.share) {
        await navigator.share({ title: "오늘의 프랑스 요리", text, url });
        return;
      }
      await navigator.clipboard.writeText(`${text} ${url}`);
      setShared(true);
      setTimeout(() => setShared(false), 2200);
    } catch {
      /* 사용자가 취소했거나 지원하지 않는 환경 */
    }
  };

  return (
    <section className="scene rs">
      {/* 배경: 파리 스카이라인 워터마크 */}
      <div className="rs__skyline" aria-hidden>
        <svg viewBox="0 0 1200 120" preserveAspectRatio="xMidYMax slice">
          <g fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M40 120V70h34v50M48 70V56h18v14M57 56V44" />
            <path d="M150 120l26-64 26 64M163 92h26" />
            <path d="M280 120V60h60v60M290 60l20-22 20 22M300 78h8v14h-8zM322 78h8v14h-8z" />
            <path d="M430 120V48h44v72M440 48l12-16 12 16M446 66h10v18h-10z" />
            <path d="M560 120V74h70v46M575 74V58h40v16M584 90h12v14h-12zM610 90h12v14h-12z" />
            <path d="M720 120l30-72 30 72M736 100h28M750 48V34" />
            <path d="M850 120V64h56v56M862 64l16-18 16 18M872 84h12v16h-12z" />
            <path d="M980 120V52h40v68M986 52l14-18 14 18M994 74h12v18h-12z" />
            <path d="M1080 120V78h60v42M1094 78V62h32v16M1102 94h14v16h-14z" />
          </g>
        </svg>
      </div>

      {/* ── 상단 바 ── */}
      <header className="rs-nav">
        <div className="rs-nav__brand">
          <span className="rs-nav__kicker">Project Marcel</span>
          <span className="rs-nav__name">
            <ChefHat />
            Marcel
            <span className="rs-nav__paw" aria-hidden>
              🐾
            </span>
          </span>
          <span className="rs-nav__sub">Le petit cœur de Ratatouille in Séoul</span>
        </div>

        <nav className="rs-nav__links" aria-label="메뉴">
          <button type="button" onClick={onRetake}>
            Quiz
          </button>
          <a href="#histoire">Story</a>
          <a href={RESTAURANT.naverPlaceUrl} target="_blank" rel="noreferrer">
            Menu
          </a>
          <a href="#marcel">Marcel</a>
          <a href={RESTAURANT.instagramUrl} target="_blank" rel="noreferrer">
            Boutique
          </a>
        </nav>

        <button type="button" className="rs-nav__retry" onClick={onRetake}>
          <span aria-hidden>↻</span> 다시 테스트하기
        </button>
      </header>

      {/* ── 요리 사진 배너 (상단 전체 폭) ── */}
      <div
        className="rs-banner"
        style={{ backgroundImage: `url(${result.image})` }}
        role="img"
        aria-label={`${result.dishKr} 사진`}
      >
        <div className="rs-banner__scrim" aria-hidden />

        {/* 위쪽: 심리 결과 (밝은 파치먼트 영역) */}
        <div className="rs-banner__top">
          <div className="rs-verdict">
            <ChefHat />
            <p className="rs-verdict__eyebrow">
              <span aria-hidden>✦</span> Votre résultat ! <span aria-hidden>✦</span>
            </p>
          </div>
          <h1 className="rs-type">{result.typeTitle}</h1>
          <p className="rs-type__desc">{result.typeDesc}</p>
          <Flourish />
        </div>

        {/* 아래쪽: 추천 요리 (어두운 영역, 밝은 글씨) */}
        <div className="rs-banner__bottom">
          <div className="rs-banner__dish">
            <p className="rs-dish__label">Recommended Dish</p>
            <h2 className="rs-dish__fr">
              {result.dishFr}
              <span className="rs-dish__lys" aria-hidden>
                ⚜
              </span>
            </h2>
            <p className="rs-dish__kr">{result.dishKr}</p>
            <p className="rs-dish__desc">{result.tagline}</p>
          </div>

          <div className="rs-banner__marcel" id="marcel">
            <div className="rs-bubble">
              <p>{result.marcelSays}</p>
              <span className="rs-bubble__heart" aria-hidden>
                ♥
              </span>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/marcel-wave.png" alt="마르셀" draggable={false} />
          </div>
        </div>
      </div>

      {/* ── 오늘의 심리 한 줄 ── */}
      <div className="rs-psych">
        <p className="rs-psych__label">
          <span aria-hidden>❧</span> 오늘의 심리 한 줄 <span aria-hidden>❧</span>
        </p>
        <p className="rs-psych__body">{result.psychLine}</p>
      </div>

      {/* ── 정보 카드 ── */}
      <div className="rs-cards">
        <article className="rs-card">
          <span className="rs-card__icon">{ICONS.sun}</span>
          <div className="rs-card__body">
            <h3>오늘의 당신</h3>
            <p className="rs-card__main">{moodText}</p>
            <p className="rs-card__note">{result.psychLine}</p>
          </div>
          <span className="rs-card__art">{ART.cafe}</span>
        </article>

        <article className="rs-card">
          <span className="rs-card__icon">{ICONS.music}</span>
          <div className="rs-card__body">
            <h3>어울리는 음악</h3>
            <p className="rs-card__main rs-card__main--fr">
              {result.music.title}
              <span>{result.music.artist}</span>
            </p>
            <p className="rs-card__note">{result.music.note}</p>
            <a
              className="rs-card__link"
              href={youtubeSearchUrl(result.music.youtubeQuery)}
              target="_blank"
              rel="noreferrer"
            >
              플레이리스트 듣기 <span aria-hidden>▶</span>
            </a>
          </div>
          <span className="rs-card__art">{ART.gramophone}</span>
        </article>

        <article className="rs-card">
          <span className="rs-card__icon">{ICONS.wine}</span>
          <div className="rs-card__body">
            <h3>추천 와인</h3>
            <p className="rs-card__main rs-card__main--fr">{result.wine.name}</p>
            <p className="rs-card__note">{result.wine.note}</p>
            <a
              className="rs-card__link"
              href={RESTAURANT.naverPlaceUrl}
              target="_blank"
              rel="noreferrer"
            >
              와인 더 알아보기 <span aria-hidden>▶</span>
            </a>
          </div>
          <span className="rs-card__art">{ART.bottle}</span>
        </article>

        {/* 요리 이야기 */}
        <article className="rs-card rs-card--histoire" id="histoire">
          <span className="rs-card__art rs-card__art--lead">{ART.street}</span>
          <div className="rs-card__body">
            <p className="rs-histoire__title">
              <span aria-hidden>✦</span> L&rsquo;Histoire <span aria-hidden>✦</span>
            </p>
            <p className="rs-histoire__sub">요리 이야기</p>
            {result.story.slice(0, 2).map((p) => (
              <p key={p.slice(0, 16)} className="rs-card__note">
                {p}
              </p>
            ))}
            <p className="rs-histoire__french">
              &ldquo;{result.frenchLine.fr}&rdquo; <span>{result.frenchLine.kr}</span>
            </p>
          </div>
        </article>
      </div>

      {/* ── 액션 ── */}
      <div className="rs-actions">
        <a
          className="rs-act rs-act--red"
          href={RESTAURANT.naverPlaceUrl}
          target="_blank"
          rel="noreferrer"
        >
          <span className="rs-act__top">
            <span aria-hidden>🗓</span> 예약하러 가기
          </span>
          <span className="rs-act__sub">
            {RESTAURANT.nameFr}에서
            <br />
            특별한 시간을 예약해보세요.
          </span>
        </a>

        <button type="button" className="rs-act rs-act--navy" onClick={share}>
          <span className="rs-act__top">
            <span aria-hidden>↗</span> {shared ? "링크를 복사했어요!" : "결과 공유하기"}
          </span>
          <span className="rs-act__sub">
            친구들에게 오늘의
            <br />
            프랑스 요리를 자랑해보세요!
          </span>
        </button>

        <button type="button" className="rs-act rs-act--cream" onClick={onRetake}>
          <span className="rs-act__top">
            <span aria-hidden>↻</span> 테스트 다시하기
          </span>
          <span className="rs-act__sub">
            새로운 질문으로 또 다른
            <br />
            나를 만나보세요.
          </span>
        </button>
      </div>

      <footer className="rs-merci">
        <Flourish />
        <p onClick={onEnd} role="button" tabIndex={0} onKeyDown={(e) => e.key === "Enter" && onEnd()}>
          Merci d&rsquo;avoir voyagé avec Marcel aujourd&rsquo;hui.
        </p>
        <Flourish />
      </footer>
    </section>
  );
}
