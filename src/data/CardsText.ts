export type CardCategory = "library" | "frontend" | "backend" | "design" | "collabTools";

interface CardInfo {
  title: string;
  subtitles: string[];
  descriptions: string[];
}


export const CardData: Record<CardCategory, CardInfo> = {
  library: {
    title: "라이브러리",
    subtitles: ["Swiper", "GSAP", "Tailwind", "Bootstrap"],
    descriptions: [
      "다양한 유형의 슬라이더를 구현하기 위해 사용했습니다.",
      "고급 애니메이션 효과를 부드럽게 구현하기 위해 활용했습니다.",
      "간결하고 직관적인 UI 디자인을 빠르게 구현하기 위해 사용했습니다.",
      "반응형 디자인과 일관된 스타일링을 간편하게 구현하기 위해 사용했습니다.",
    ],
  },
  frontend: {
    title: "프론트엔드",
    subtitles: ["HTML, CSS, JavaScript", "React"],
    descriptions: [
      "웹 페이지의 구조를 설계하고 스타일링을 추가하며 동적인 기능을 구현하기 위해 사용했습니다.",
      "컴포넌트 기반의 구조를 통해 재사용 가능한 UI를 설계하고 효율적인 상태 관리를 위해 사용했습니다.",
    ],
  },
  backend: {
    title: "백엔드",
    subtitles: ["MySQL", "Firebase"],
    descriptions: [
      "데이터베이스를 설계하고 CRUD 작업을 통해 데이터를 관리하는 경험을 했습니다.",
      "사용자 인증 및 실시간 데이터 처리를 구현하며 백엔드의 주요 기능을 경험했습니다.",
    ],
  },
  design: {
    title: "디자인",
    subtitles: ["Figma"],
    descriptions: [
      "사용자 경험(UX)과 인터페이스(UI)를 고려하여 효율적으로 디자인 작업을 수행했습니다.",
    ],
  },
  collabTools: {
    title: "협업 도구",
    subtitles: ["Git", "Notion"],
    descriptions: [
      "프로젝트의 버전 관리 및 협업을 위해 Git을 사용하고 있습니다.",
      "작업 계획, 아이디어 정리, 개인적인 문서 관리에 활용하고 있습니다.",
    ],
  },
};
