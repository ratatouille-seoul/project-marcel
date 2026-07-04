"use client";

import type { DishResult } from "../data/quiz";
import { RESTAURANT, youtubeSearchUrl } from "../lib/config";
import Marcel from "./Marcel";

/** Scene 8 — 결과. 오늘의 요리 + 이야기 + 와인 + 음악. */
export default function ResultScene({
  result,
  onRetake,
  onEnd,
}: {
  result: DishResult;
  onRetake: () => void;
  onEnd: () => void;
}) {
  return (
    <section className="scene result-scene">
      <article className="result">
        {/* 헤더 */}
        <header className="result__header rise">
          <p className="eyebrow">Le Plat du Jour</p>
          <p className="result__mood">{result.mood}</p>
          <h1 className="result__dish-fr">{result.dishFr}</h1>
          <p className="result__dish-kr">{result.dishKr}</p>
          <hr className="rule" />
          <p className="result__tagline">{result.tagline}</p>
        </header>

        {/* 마르셀의 한마디 */}
        <div className="result__marcel rise">
          <Marcel size={150} animation="peek" />
          <hr className="result__marcel-line" />
          <p className="result__marcel-says">
            <span>Marcel</span>
            {result.marcelSays}
          </p>
        </div>

        {/* 요리 이야기 */}
        <section className="result__section rise">
          <h2>
            <em>L&rsquo;Histoire</em> 요리 이야기
          </h2>
          {result.story.map((p) => (
            <p key={p.slice(0, 18)}>{p}</p>
          ))}
        </section>

        {/* 와인 */}
        <section className="result__section rise">
          <h2>
            <em>Le Vin</em> 어울리는 와인
          </h2>
          <p className="result__pairing-name">{result.wine.name}</p>
          <p>{result.wine.note}</p>
        </section>

        {/* 음악 */}
        <section className="result__section rise">
          <h2>
            <em>La Musique</em> 오늘의 프랑스 음악
          </h2>
          <p className="result__pairing-name">
            {result.music.artist} — 〈{result.music.title}〉
          </p>
          <p>{result.music.note}</p>
          <a
            className="result__music-link"
            href={youtubeSearchUrl(result.music.youtubeQuery)}
            target="_blank"
            rel="noreferrer"
          >
            ▶ 유튜브에서 듣기
          </a>
        </section>

        {/* 프랑스 속담 */}
        <blockquote className="result__quote rise">
          <p className="result__quote-fr">&ldquo;{result.frenchLine.fr}&rdquo;</p>
          <p className="result__quote-kr">{result.frenchLine.kr}</p>
        </blockquote>

        {/* CTA */}
        <footer className="result__cta rise">
          <p className="result__cta-lead">
            오늘의 요리, 사진이 아니라 진짜로 맛보고 싶다면 —
            <br />
            셰프 {RESTAURANT.chef}의 주방이 기다리고 있어요.
          </p>
          <a
            className="btn result__cta-main"
            href={RESTAURANT.kakaoChannelUrl}
            target="_blank"
            rel="noreferrer"
          >
            카카오톡으로 예약 문의하기
          </a>
          <div className="result__cta-row">
            <button type="button" onClick={onRetake}>
              테스트 다시 하기
            </button>
            <button type="button" onClick={onEnd}>
              레스토랑 나서기 →
            </button>
          </div>
        </footer>
      </article>
    </section>
  );
}
