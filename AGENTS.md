# Project Marcel — 에이전트 공통 안내

인터랙티브 심리 테스트 사이트. 문을 열고 들어가 마르셀(쥐 마스코트)을 만나고,
질문 6개에 답하면 오늘의 기분에 맞는 프랑스 요리·와인·샹송을 추천한다.
클라이언트: 라따뚜이 인 서울 (셰프 Luc Portron, 용산 프렌치 레스토랑).

## 기술 스택
- Next.js 15 (App Router) + React 19 + TypeScript. Tailwind 없음 — 일반 CSS 사용.
- 실행: `npm run dev` (포트 3000)

## 구조 (이 구조를 유지할 것)
- `app/page.tsx` — 장면(Scene) 전환 상태 머신. 장면 순서:
  Opening → Door → Camera → Welcome → Table → Menu → Question(6개) → Result → Ending
- `components/<장면>Scene.tsx` — 장면당 컴포넌트 1개
- `styles/<장면>.css` — 장면당 CSS 1개 (layout.tsx에서 전부 import)
- `data/quiz.ts` — 질문 6개 + 결과 요리 6종 (콘텐츠 수정은 여기서만)
- `lib/config.ts` — 카카오톡 채널 등 외부 링크 (현재 플레이스홀더)

## 이미지 규칙
- 장면 배경: `public/images/bg/` — opening, door, interior, table, menu, question-ui (.jpg)
- 새 이미지는 **같은 파일명으로 덮어쓰기** 하면 코드 수정 없이 반영된다.
- `door.jpg`는 특수: 닫힘/반열림/열림 문이 **가로로 정확히 3등분**된 스프라이트 시트 (1536×1024).
  교체 시 반드시 같은 3등분 구성을 유지할 것.
- 용량: 장당 300KB 이하로 압축해서 넣을 것 (원본 2~3MB는 너무 무겁다).
- 로고(마르셀): `public/images/logo.png` — 흰 배경 포함, 화면에서는 mix-blend-mode: multiply로 사용.

## 글쓰기 톤
- 친근한 존댓말. 과장된 표현·딱딱한 문체 금지.
- 프랑스어 문구는 이탤릭 세리프(Cormorant Garamond)로 분위기를 낸다.

## 디자인
- 에디토리얼 프리미엄 미니멀: 여백과 타이포로 말하기.
- 색: --cream #f6f1e7 / --ink #211d16 / --gold #b08b3e / --navy #171d29 (app/globals.css 참고)
