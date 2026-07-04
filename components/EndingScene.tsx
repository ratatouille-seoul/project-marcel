"use client";

import { RESTAURANT } from "../lib/config";
import Marcel from "./Marcel";

/** Scene 9 — Au revoir. */
export default function EndingScene({ onRestart }: { onRestart: () => void }) {
  return (
    <section className="scene ending-scene">
      <div className="ending__inner">
        <h1 className="ending__title rise">Au revoir</h1>
        <p className="ending__desc rise" style={{ animationDelay: "0.35s" }}>
          와주셔서 고마워요.
          <br />
          오늘의 요리가 당신의 저녁을
          <br />
          조금 더 근사하게 만들어주기를 바랄게요.
        </p>

        <div className="ending__marcel rise" style={{ animationDelay: "0.6s" }}>
          <Marcel size={190} animation="sway" />
          <hr className="ending__marcel-line" />
          <p className="ending__marcel-caption">— 마르셀이 문 앞까지 배웅해 드렸어요 —</p>
        </div>

        <div className="ending__actions rise" style={{ animationDelay: "0.9s" }}>
          <a className="btn btn--gold" href={RESTAURANT.kakaoChannelUrl} target="_blank" rel="noreferrer">
            카카오톡 채널 방문하기
          </a>
          <button type="button" className="ending__restart" onClick={onRestart}>
            처음부터 다시 하기
          </button>
        </div>

        <p className="ending__brand rise" style={{ animationDelay: "1.2s" }}>
          {RESTAURANT.nameFr} · Chef {RESTAURANT.chef}
        </p>
      </div>
    </section>
  );
}
