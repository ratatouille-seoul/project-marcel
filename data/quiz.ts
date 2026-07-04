// ─────────────────────────────────────────────────────────────
// Project Marcel — 심리 테스트 데이터
// 질문 6개, 결과(요리) 6종. 각 선택지는 하나의 요리 타입에 1점씩 더합니다.
// ─────────────────────────────────────────────────────────────

export type DishType =
  | "comfort" // 뵈프 부르기뇽 — 위로가 필요한 날
  | "vitality" // 꼬꼬뱅 — 활력이 넘치는 날
  | "calm" // 라따뚜이 — 차분히 정리하고 싶은 날
  | "escape" // 부야베스 — 떠나고 싶은 날
  | "reward" // 오리 콩피 — 나에게 선물하고 싶은 날
  | "sweet"; // 크렘 브륄레 — 달콤함이 필요한 날

export interface QuizOption {
  text: string;
  type: DishType;
}

export interface QuizQuestion {
  question: string;
  fr: string; // 프랑스어 부제 — 메뉴판 위의 분위기를 살립니다
  options: QuizOption[];
}

export const QUESTIONS: QuizQuestion[] = [
  {
    question: "오늘 하루, 마음의 날씨는 어땠나요?",
    fr: "Quel temps faisait-il dans votre cœur aujourd’hui ?",
    options: [
      { text: "구름이 낮게 깔린, 조금 흐린 날이었어요", type: "comfort" },
      { text: "햇살이 반짝, 맑고 가벼운 하루였어요", type: "vitality" },
      { text: "바람이 살랑이는 잔잔한 오후 같았어요", type: "calm" },
      { text: "소나기처럼 정신없이 지나갔어요", type: "escape" },
    ],
  },
  {
    question: "지금 가장 끌리는 저녁 풍경은 무엇인가요?",
    fr: "Quelle soirée vous attire le plus ?",
    options: [
      { text: "벽난로 앞에서 담요를 덮고 보내는 밤", type: "comfort" },
      { text: "웃음이 끊이지 않는 왁자한 식탁", type: "vitality" },
      { text: "노을이 지는 조용한 창가 자리", type: "calm" },
      { text: "파도 소리가 들리는 항구의 노천 테이블", type: "escape" },
    ],
  },
  {
    question: "요즘 나에게 가장 필요한 것은 무엇일까요?",
    fr: "De quoi avez-vous le plus besoin en ce moment ?",
    options: [
      { text: "고생한 나를 위한 작은 사치", type: "reward" },
      { text: "아무 걱정 없는 달콤한 휴식", type: "sweet" },
      { text: "어디로든 떠나는 짧은 여행", type: "escape" },
      { text: "따뜻한 위로 한 그릇", type: "comfort" },
    ],
  },
  {
    question: "파리에 도착했다면, 가장 먼저 가고 싶은 곳은?",
    fr: "À Paris, où iriez-vous en premier ?",
    options: [
      { text: "센 강변을 따라 걷는 저녁 산책", type: "calm" },
      { text: "몽마르트 언덕, 거리 악사의 연주 앞", type: "vitality" },
      { text: "오래된 와인 저장고 투어", type: "reward" },
      { text: "디저트 가게가 늘어선 골목", type: "sweet" },
    ],
  },
  {
    question: "오늘의 에너지는 몇 퍼센트쯤인가요?",
    fr: "Quel est votre niveau d’énergie aujourd’hui ?",
    options: [
      { text: "20% — 따뜻한 충전이 필요해요", type: "comfort" },
      { text: "50% — 그럭저럭 버티는 중이에요", type: "calm" },
      { text: "80% — 꽤 괜찮은 하루예요", type: "vitality" },
      { text: "120% — 뭐든 할 수 있을 것 같아요", type: "escape" },
    ],
  },
  {
    question: "식사를 마치고, 어떤 기분으로 문을 나서고 싶나요?",
    fr: "Avec quel sentiment aimeriez-vous repartir ?",
    options: [
      { text: "속까지 든든하게 채워진 만족감", type: "reward" },
      { text: "콧노래가 나오는 가벼운 설렘", type: "sweet" },
      { text: "하루가 차분히 정리된 편안함", type: "calm" },
      { text: "내일이 기대되는 활력", type: "vitality" },
    ],
  },
];

export interface DishResult {
  type: DishType;
  dishFr: string;
  dishKr: string;
  tagline: string;
  mood: string; // "오늘의 당신" 한 줄
  story: string[];
  wine: { name: string; note: string };
  music: { title: string; artist: string; note: string; youtubeQuery: string };
  marcelSays: string;
  frenchLine: { fr: string; kr: string };
}

export const RESULTS: Record<DishType, DishResult> = {
  comfort: {
    type: "comfort",
    dishFr: "Bœuf Bourguignon",
    dishKr: "뵈프 부르기뇽",
    tagline: "마음까지 데워줄 한 그릇이 필요한 날이에요.",
    mood: "오늘의 당신 — 조용한 위로가 필요한 사람",
    story: [
      "뵈프 부르기뇽은 프랑스 부르고뉴 지방의 시골 부엌에서 태어난 요리예요. 밭일을 마친 농부들이 질긴 소고기를 지역 와인에 담가 화덕 한쪽에서 반나절 뭉근히 끓이던 것이 시작이었죠.",
      "오래 끓일수록 고기는 부드러워지고, 와인은 소스가 되어 깊어져요. 미국에 프랑스 요리를 알린 셰프 줄리아 차일드는 이 요리를 두고 '인간이 만든 가장 맛있는 소고기 요리'라고 했답니다.",
      "서두르지 않고 천천히 완성되는 요리라서, 지친 하루의 끝에 가장 잘 어울려요.",
    ],
    wine: {
      name: "부르고뉴 피노 누아 (Bourgogne Pinot Noir)",
      note: "요리에 들어간 와인과 같은 고향의 와인을 곁들이는 것이 프랑스식 페어링의 기본이에요. 부드러운 산미가 진한 소스를 산뜻하게 받쳐줍니다.",
    },
    music: {
      title: "La Vie en rose",
      artist: "Édith Piaf",
      note: "'장밋빛 인생'이라는 뜻이에요. 오늘 하루가 어땠든, 이 노래가 흐르는 동안만큼은 세상이 조금 따뜻해 보일 거예요.",
      youtubeQuery: "Edith Piaf La Vie en rose",
    },
    marcelSays: "천천히 오래 끓인 것들은 배신하지 않아요. 오늘의 당신에게 꼭 필요한 온기예요.",
    frenchLine: { fr: "Petit à petit, l'oiseau fait son nid.", kr: "새는 조금씩 조금씩 둥지를 짓는답니다." },
  },
  vitality: {
    type: "vitality",
    dishFr: "Coq au Vin",
    dishKr: "꼬꼬뱅",
    tagline: "좋은 기운을 더 크게 키워줄 요리를 준비했어요.",
    mood: "오늘의 당신 — 에너지가 반짝이는 사람",
    story: [
      "꼬꼬뱅은 '와인 속의 수탉'이라는 뜻이에요. 닭고기를 와인과 버섯, 베이컨과 함께 뭉근히 조려내는 프랑스의 대표 가정식이죠.",
      "16세기 앙리 4세는 '일요일마다 모든 백성의 냄비에 닭 한 마리가 있게 하겠다'고 약속했어요. 그래서 꼬꼬뱅은 지금도 프랑스인들에게 '풍요로운 일상'의 상징으로 남아 있답니다.",
      "활기찬 날에는 이렇게 이야기가 많은 요리가 어울려요. 한 입마다 대화가 끊이지 않거든요.",
    ],
    wine: {
      name: "보졸레 (Beaujolais, 가메)",
      note: "체리처럼 상큼한 과일향의 가벼운 레드예요. 경쾌한 오늘의 기분처럼, 무겁지 않게 즐기기 좋아요.",
    },
    music: {
      title: "Emmenez-moi",
      artist: "Charles Aznavour",
      note: "'나를 데려가 주오'라는 뜻의 신나는 샹송이에요. 어깨가 절로 들썩이는 리듬이 오늘의 에너지와 꼭 닮았어요.",
      youtubeQuery: "Charles Aznavour Emmenez-moi",
    },
    marcelSays: "좋은 기분은 좋은 식탁에서 두 배가 돼요. 오늘은 마음껏 즐기셔도 좋아요!",
    frenchLine: { fr: "L'appétit vient en mangeant.", kr: "식욕은 먹다 보면 생기는 법이죠." },
  },
  calm: {
    type: "calm",
    dishFr: "Ratatouille",
    dishKr: "라따뚜이",
    tagline: "복잡한 마음엔 프로방스의 햇살을 처방해 드릴게요.",
    mood: "오늘의 당신 — 마음을 정돈하고 싶은 사람",
    story: [
      "라따뚜이는 남프랑스 프로방스, 니스의 채소 스튜예요. 가지·호박·토마토·파프리카를 올리브오일과 허브로 천천히 익혀내는, 햇살을 그대로 접시에 옮긴 듯한 요리죠.",
      "영화 〈라따뚜이〉에서 차가운 평론가 이고는 이 요리를 한 입 먹고 어린 시절 엄마의 부엌으로 돌아가요. 화려한 기교가 아니라 소박한 진심이 사람의 마음을 움직인다는 걸 보여주는 장면이에요.",
      "복잡했던 하루의 끝, 단순하고 정직한 맛이 마음을 가지런히 정리해 줄 거예요.",
    ],
    wine: {
      name: "프로방스 로제 (Rosé de Provence)",
      note: "연한 살구빛의 드라이 로제예요. 채소의 단맛과 허브 향을 가장 예쁘게 감싸주는, 남프랑스 여름의 와인이랍니다.",
    },
    music: {
      title: "À bicyclette",
      artist: "Yves Montand",
      note: "자전거를 타고 시골길을 달리는 노래예요. 페달을 밟듯 잔잔한 리듬이 마음의 속도를 늦춰줍니다.",
      youtubeQuery: "Yves Montand A bicyclette",
    },
    marcelSays: "제 이름을 건 요리예요. 가장 소박한 것이 가장 오래 기억에 남는답니다.",
    frenchLine: { fr: "Rien ne sert de courir, il faut partir à point.", kr: "서두를 필요 없어요. 제때 출발하면 충분해요." },
  },
  escape: {
    type: "escape",
    dishFr: "Bouillabaisse",
    dishKr: "부야베스",
    tagline: "지금 필요한 건 지중해의 바닷바람이네요.",
    mood: "오늘의 당신 — 어디론가 떠나고 싶은 사람",
    story: [
      "부야베스는 지중해 항구 도시 마르세유의 생선 수프예요. 어부들이 그날 팔고 남은 생선을 큰 솥에 넣고 끓여 먹던 것에서 시작됐죠.",
      "사프란과 펜넬, 오렌지 껍질이 들어가 국물에서 이국적인 향이 피어올라요. 마르세유 사람들은 '진짜 부야베스'의 기준을 헌장으로 만들 만큼 이 요리에 진심이랍니다.",
      "한 숟갈 뜨는 순간, 미뤄둔 여행 대신 지중해의 파도가 식탁 위로 밀려올 거예요.",
    ],
    wine: {
      name: "카시스 화이트 (Cassis Blanc)",
      note: "마르세유 옆 바닷가 마을 카시스의 화이트 와인이에요. 바다 내음이 스민 미네랄 향이 생선 수프와 완벽한 짝을 이뤄요.",
    },
    music: {
      title: "La Mer",
      artist: "Charles Trenet",
      note: "'바다'라는 제목 그대로, 기차 창밖으로 지중해를 바라보며 20분 만에 쓰였다는 곡이에요. 눈을 감으면 파도가 보여요.",
      youtubeQuery: "Charles Trenet La Mer",
    },
    marcelSays: "떠나지 못하는 날엔, 떠나온 요리를 먹으면 돼요. 마르세유는 생각보다 가까이 있어요.",
    frenchLine: { fr: "Les voyages forment la jeunesse.", kr: "여행은 사람을 젊게 만들어요." },
  },
  reward: {
    type: "reward",
    dishFr: "Confit de Canard",
    dishKr: "콩피 드 카나르 (오리 콩피)",
    tagline: "오늘의 당신에겐 근사한 보상이 필요해요.",
    mood: "오늘의 당신 — 스스로에게 선물이 필요한 사람",
    story: [
      "콩피 드 카나르는 프랑스 남서부 가스코뉴 지방의 요리예요. 오리 다리를 소금에 절인 뒤, 오리 기름 속에서 낮은 온도로 몇 시간이고 천천히 익혀내죠.",
      "원래는 냉장고가 없던 시절 고기를 오래 보관하기 위한 지혜였는데, 그 기다림이 오히려 최고의 맛을 만들어냈어요. 겉은 바삭하게 구워내고 속은 포크만 대도 결결이 부서질 만큼 부드럽답니다.",
      "성실하게 버틴 시간은 결국 근사한 결과가 되어 돌아와요. 이 요리처럼, 그리고 당신처럼요.",
    ],
    wine: {
      name: "카오르 말벡 (Cahors Malbec)",
      note: "'검은 와인'이라 불릴 만큼 진한 남서부의 레드예요. 진득한 타닌이 오리의 풍미를 당당하게 받아줍니다.",
    },
    music: {
      title: "La Javanaise",
      artist: "Serge Gainsbourg",
      note: "프랑스식 세련됨이 무엇인지 보여주는 곡이에요. 와인 잔을 천천히 돌리며 듣기에 이보다 좋은 노래는 없죠.",
      youtubeQuery: "Serge Gainsbourg La Javanaise",
    },
    marcelSays: "오늘만큼은 아끼지 마세요. 열심히 산 사람에겐 바삭한 껍질을 누릴 자격이 있어요.",
    frenchLine: { fr: "Après l'effort, le réconfort.", kr: "수고 뒤엔 달콤한 보상이 따르는 법이에요." },
  },
  sweet: {
    type: "sweet",
    dishFr: "Crème Brûlée",
    dishKr: "크렘 브륄레",
    tagline: "달콤하게 토닥여줄 마무리가 어울리는 날이에요.",
    mood: "오늘의 당신 — 작은 달콤함이 필요한 사람",
    story: [
      "크렘 브륄레는 '불에 그을린 크림'이라는 뜻이에요. 부드러운 커스터드 위에 설탕을 얇게 뿌리고 토치로 그을려 유리처럼 얇은 캐러멜 층을 만들죠.",
      "이 디저트의 하이라이트는 스푼으로 캐러멜을 '톡' 하고 깨는 순간이에요. 영화 〈아멜리에〉의 주인공도 이 순간을 인생의 작은 기쁨으로 꼽았답니다.",
      "큰 행복이 아니어도 괜찮아요. 얇은 캐러멜이 깨지는 그 짧은 순간이, 오늘 하루를 충분히 근사하게 만들어줄 테니까요.",
    ],
    wine: {
      name: "소테른 (Sauternes)",
      note: "꿀과 살구 향이 흐르는 보르도의 스위트 와인이에요. 디저트와 함께라면 식사의 마지막이 가장 빛나는 순간이 됩니다.",
    },
    music: {
      title: "Le Temps de l'Amour",
      artist: "Françoise Hardy",
      note: "청춘의 설렘을 담은 60년대 프렌치 팝이에요. 달콤한 것들은 언제나 조금 아련한 법이죠.",
      youtubeQuery: "Francoise Hardy Le Temps de l'Amour",
    },
    marcelSays: "인생의 비밀 하나 알려드릴까요? 달콤한 건 아껴두지 말고, 오늘 먹는 거예요.",
    frenchLine: { fr: "La vie est courte, mangez le dessert d'abord.", kr: "인생은 짧으니, 디저트부터 드세요." },
  },
};

/** 답변 배열로 결과 요리를 계산합니다. 동점이면 더 나중에 고른 타입을 우선합니다. */
export function computeResult(answers: DishType[]): DishResult {
  const counts = new Map<DishType, number>();
  answers.forEach((t) => counts.set(t, (counts.get(t) ?? 0) + 1));

  let best: DishType = answers[answers.length - 1] ?? "calm";
  let bestScore = -1;
  counts.forEach((count, type) => {
    const lastIndex = answers.lastIndexOf(type);
    const score = count * 100 + lastIndex; // 동점 시 최근 선택 우선
    if (score > bestScore) {
      bestScore = score;
      best = type;
    }
  });
  return RESULTS[best];
}
