// ─────────────────────────────────────────────────────────────
// 레스토랑 정보 & 링크 설정
// TODO: 카카오톡 채널 주소를 실제 주소로 바꿔주세요.
// ─────────────────────────────────────────────────────────────

export const RESTAURANT = {
  nameFr: "Ratatouille in Séoul",
  nameKr: "라따뚜이 인 서울",
  chef: "Luc Portron",
  subtitle: "FRENCH RESTAURANT · SEOUL",
  kakaoChannelUrl: "https://pf.kakao.com/_라따뚜이채널주소", // ← 실제 카카오톡 채널 주소로 교체
  instagramUrl: "https://www.instagram.com/", // ← 실제 인스타그램 주소로 교체
};

export function youtubeSearchUrl(query: string): string {
  return `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
}
