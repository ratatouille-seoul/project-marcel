"use client";

import type { DishResult } from "../data/quiz";
import { RESTAURANT, youtubeSearchUrl } from "../lib/config";

/**
 * Scene 6 — 결과.
 * 상단 네비 → 오늘의 요리 히어로 → 정보 카드 3종 → 마르셀의 한마디
 * → 요리 이야기 → 하단 액션 바 (예약·네이버·다시하기) 순서의 다크 에디토리얼 페이지.
 */
export default function ResultScene({
  result,
  onRetake,
  onEnd,
}: {
  result: DishResult;
  onRetake: () => void;
  onEnd: () => void;
}) {
  // "오늘의 당신 — ○○한 사람" 에서 뒷부분만 카드에 씁니다
  const moodText = result.mood.includes("—")
    ? result.mood.split("—")[1].trim()
    : result.mood;

  return (
    <section className="scene result-scene">
      {/* ── 상단 네비 ── */}
      <header className="result-nav">
        <span className="result-nav__brand">
          {RESTAURANT.nameFr}
        </span>
        <nav className="result-nav__links">
          <button type="button" onClick={onRetake}>Quiz</button>
          <a href="#histoire">Story</a>
          <a href={RESTAURANT.naverPlaceUrl} target="_blank" rel="noreferrer">
            Menu
          </a>
        </nav>
      </header>

      <article className="result">
        {/* ── 히어로: 오늘의 요리 ── */}
        <header className="result__hero rise">
          <p className="result__hero-eyebrow">— Le Plat du Jour —</p>
          <p className="result__hero-sub">오늘 당신에게 어울리는 한 접시</p>
          <h1 className="result__dish-fr">{result.dishFr}</h1>
          <p className="result__dish-kr">{result.dishKr}</p>
          <p className="result__tagline">{result.tagline}</p>
        </header>

        {/* ── 정보 카드 3종 ── */}
        <div className="result__cards rise">
          <div className="result-card">
            <p className="result-card__label">☀ 오늘의 당신</p>
            <p className="result-card__title">{moodText}</p>
          </div>
          <div className="result-card">
            <p className="result-card__label">♪ 어울리는 음악</p>
            <p className="result-card__title">
              {result.music.artist}
              <br />〈{result.music.title}〉
            </p>
            <p className="result-card__note">{result.music.note}</p>
            <a
              className="result-card__link"
              href={youtubeSearchUrl(result.music.youtubeQuery)}
              target="_blank"
              rel="noreferrer"
            >
              ▶ 유튜브에서 듣기
            </a>
          </div>
          <div className="result-card">
            <p className="result-card__label">🍷 어울리는 와인</p>
            <p className="result-card__title">{result.wine.name}</p>
            <p className="result-card__note">{result.wine.note}</p>
          </div>
        </div>

        {/* ── 마르셀의 한마디 ── */}
        <div className="result__marcel rise">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/marcel-menu.png" alt="마르셀" draggable={false} />
          <div className="result__marcel-text">
            <p className="result-card__label">Marcel의 한마디 🐾</p>
            <p className="result__marcel-says">{result.marcelSays}</p>
            <p className="result__marcel-fr">
              &ldquo;{result.frenchLine.fr}&rdquo;
              <span>{result.frenchLine.kr}</span>
            </p>
          </div>
        </div>

        {/* ── 요리 이야기 ── */}
        <section id="histoire" className="result__histoire rise">
          <h2>
            <em>L&rsquo;Histoire</em> 요리 이야기
          </h2>
          {result.story.map((p) => (
            <p key={p.slice(0, 18)}>{p}</p>
          ))}
        </section>

        {/* ── 하단 액션 바 ── */}
        <footer className="result__actions rise">
          <p className="result__actions-lead">
            오늘의 한 접시가 마음에 들었다면,
            <br />
            {RESTAURANT.nameFr}에서 작은 프랑스 여행을 이어가 보세요.
          </p>
          <div className="result__actions-main">
            <a
              className="result-act result-act--red"
              href={RESTAURANT.kakaoChannelUrl}
              target="_blank"
              rel="noreferrer"
            >
              예약하러 가기 →
            </a>
            <a
              className="result-act result-act--gold"
              href={RESTAURANT.naverPlaceUrl}
              target="_blank"
              rel="noreferrer"
            >
              프랑스 음식 먹어보러 가기
            </a>
          </div>
          <div className="result__actions-sub">
            <button type="button" onClick={onRetake}>
              테스트 다시하기 ↻
            </button>
            <span aria-hidden>·</span>
            <button type="button" onClick={onEnd}>
              레스토랑 나서기 →
            </button>
          </div>
        </footer>

        <p className="result__merci">
          Merci beaucoup ! <span>당신의 취향이 곧, 우리의 이야기가 됩니다 ♥</span>
        </p>
      </article>
    </section>
  );
}
