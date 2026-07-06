# Project Marcel 🐭

**Ratatouille in Séoul** 의 인터랙티브 심리 테스트 사이트입니다.
문을 열고 들어가 마르셀을 만나고, 6개의 질문에 답하면
오늘의 기분에 어울리는 **프랑스 요리 + 와인 + 샹송**을 추천해 드려요.

## 실행 방법

```bash
npm install   # 처음 한 번만
npm run dev   # http://localhost:3000 에서 확인
```

## 장면(Scene) 흐름

| 순서 | 장면 | 파일 |
|---|---|---|
| 1 | Bienvenue 오프닝 | `components/OpeningScene.tsx` |
| 2 | 레스토랑 정면 · 문이 그 자리에서 열림 (종소리) | `components/DoorScene.tsx` |
| 3 | 마르셀의 인사 (실내) | `components/WelcomeScene.tsx` |
| 4 | 마르셀이 메뉴판을 들고 안내 | `components/MenuScene.tsx` |
| 5 | 질문 6개 | `components/QuestionScene.tsx` |
| 6 | 결과 (요리·이야기·와인·음악·카톡 CTA) | `components/ResultScene.tsx` |
| 7 | Au revoir 엔딩 | `components/EndingScene.tsx` |

- 장면 전환과 답변 상태는 `app/page.tsx` 가 관리합니다.
- 장면별 스타일은 `styles/` 폴더에 같은 이름의 CSS 파일로 나뉘어 있습니다.

## 콘텐츠 수정하는 곳

- **질문·결과 내용**: `data/quiz.ts`
  - 질문 6개, 결과 요리 6종 (뵈프 부르기뇽 / 꼬꼬뱅 / 라따뚜이 / 부야베스 / 오리 콩피 / 크렘 브륄레)
  - 각 결과에 요리 이야기, 와인, 음악, 마르셀의 한마디가 들어 있어요.
- **카카오톡 채널 · 인스타그램 링크**: `lib/config.ts` ← ⚠️ **실제 주소로 꼭 교체하세요**
- **로고**: `public/images/logo.png` (쥐 = 마르셀. 화면에서는 쥐 부분만 잘라서 사용)

## 이미지

장면 배경 이미지는 `public/images/bg/`에 있습니다
(원본: `C:\Users\User\.vscode\Projects\project-marcel\public\assets\backgrounds`, 웹용으로 압축해서 복사함).

- `opening.jpg` — 오프닝 & 엔딩 배경 (파리의 밤, 창가의 마르셀)
- `facade.jpg` — 레스토랑 정면 (문 클릭 전 전경)
- `door-sprite.png` — 문 3단계 스프라이트 (닫힘/반열림/열림, 가로 3등분, **투명 배경 필수**)
- `interior.jpg` — 카메라 무빙 + 문틈으로 보이는 실내 + 마르셀 인사 배경
- `question-ui.jpg` — 질문 장면 배경
- `table.jpg`, `menu.jpg` — (예비) 지금은 안 쓰는 메뉴북 이미지

캐릭터 (투명 배경 PNG):
- `public/images/marcel-wave.png` — 손 흔드는 마르셀 (인사 장면)
- `public/images/marcel-menu.png` — 메뉴판 든 마르셀 (안내 장면)

이미지를 새로 바꾸려면 같은 파일명으로 덮어쓰면 됩니다.
(door-sprite.png는 '닫힘·반열림·열림' 가로 3등분 + 투명 배경을 유지해야 해요.)

## 배포

[Vercel](https://vercel.com)에 무료로 배포할 수 있습니다.
GitHub에 올린 뒤 Vercel에서 저장소를 연결하면 끝이에요.
배포된 주소를 인스타그램 프로필 링크에 걸어주세요.
