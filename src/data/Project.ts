export interface ProjectType {
  id: number;
  title: string;
  subTitle: string;
  description: string | string[];
  type: string;
  period: string;
  skills: string;
  image: string;
  projectLink: string;
  githubLink: string;
  contribution: string;
}

export const projects = [
  {
    id: 1,
    title: "TMP",
    subTitle: "Trainer Matching Project",
    description: [
      "소비자를 보호하고 정보 비대칭을 해소하기 위해 더 많은 정보와 선택지를 제공하는 플랫폼을 개발했습니다.",
      "카카오톡, 네이버, 구글을 통한 소셜 로그인 기능을 지원합니다.",
      "VR 기능을 활용하여 트레이너가 속한 센터의 전경을 묘사할 수 있습니다.",
      "트레이너 및 헬스장 정보를 열람하고, 날짜·시간·목표를 설정하여 예약할 수 있습니다.",
      "트레이너 및 사용자의 CRUD(생성, 조회, 수정, 삭제) 기능을 구현했습니다.",
    ],
    type: "PC",
    period: "2024.04.01 ~ 2024.05.17",
    skills: "Figma, React, Scss, JavaScript, API(Map, Login), MySQL",
    image: "/images/project/TMP.png",
    projectLink:
      "https://gayounglee.notion.site/Trainer-Matching-Project-PPT-6c02aff850184dbeb843dff6fd695f81",
    githubLink: "https://github.com/gaebonglee/TMP.git",
    contribution: "프론트60%, 백엔드30%",
  },
  {
    id: 2,
    title: "LUKS",
    subTitle: "ShoppingMall",
    description: [
      "다음 주소찾기 API를 적용하여 정확한 배송지 입력을 지원했습니다.",
      "비밀번호 재입력 검증 기능을 통해 입력 오류를 방지하고 사용자 경험을 개선했습니다.",
      "CoolSMS API를 활용한 문자인증 기능을 적용하여 회원가입 시 본인 인증 절차를 강화했습니다. ",
      "상품 좋아요, 장바구니, 구매, 후기 등록 기능을 구현하여 사용자 편의성과 쇼핑 경험을 향상시켰습니다.",
    ],
    type: "PC",
    period: "2024.05.25 ~ 2024.06.14 (진행중)",
    skills: "React, Scss, JavaScript, API(CoolSMS, Daum), MySQL",
    image: "/images/qna/vision.png",
    projectLink:
      "https://gayounglee.notion.site/Luks-PPT-2ecadfde50dd4f1f9fc3e6fe6043708d?pvs=4",
    githubLink: "https://github.com/gaebonglee/luks.git",
    contribution: "프론트100%, 백엔드 100%",
  },
  {
    id: 3,
    title: "Portfolio",
    subTitle: "WebSite",
    description: [
      "프로젝트별 코드 및 데모를 쉽게 확인할 수 있도록 구성했습니다.",
      "GSAP를 활용하여 부드러운 스크롤 효과를 적용한 포트폴리오 사이트입니다.",
      "GitHub Pages를 이용해 프로젝트를 배포했습니다.",
    ],
    type: "PC",
    period: "2025.01.13 ~ 2025.01.18",
    skills: "React, TypeScript, Scss, GSAP",
    image: "/images/project/TMP.png",
    projectLink: "https://gaebonglee.github.io/gayoung_portfolio/",
    githubLink: "https://github.com/gaebonglee/gayoung_portfolio.git",
    contribution: "프론트 100%",
  },

  {
    id: 4,
    title: "StarBucks",
    subTitle: "WebSite",
    description:
      "스타벅스 홈페이지 클론코딩입니다. css와 javascript를 활용하여 애니메이션을 구현했습니다.",
    type: "PC",
    period: "2024.06.28 ~ 2024.07.01",
    skills: "HTML, CSS, JavaScript, Swiper, GSAP",
    image: "/images/project/TMP.png",
    projectLink: "https://gaebonglee.github.io/StarBucks_Demo/",
    githubLink: "https://github.com/gaebonglee/StarBucks_Demo",
    contribution: "프론트 100%",
  },

  {
    id: 5,
    title: "G Blog",
    subTitle: "WebSite Blog",
    description: [
      "반응형으로 제작된 Blog-App입니다.",
      "게시글의 작성, 수정, 삭제 기능을 구현했습니다.",
      "댓글 작성, 수정, 삭제 기능을 추가했습니다.",
      "Firebase Auth를 활용하여 사용자 인증 및 권한 관리를 구현했습니다.",
      "Firebase Firestore를 이용해 실시간 데이터 저장 및 관리를 지원했습니다.",
      "라이트 모드 및 다크 모드 테마를 적용했습니다.",
    ],
    type: "PC",
    period: "2025.01.09 ~ 2025.01.10",
    skills: "React, CSS, Firebase",
    image: "/images/project/TMP.png",
    projectLink: "https://react-blog-app-c3c2f.web.app/",
    githubLink: "https://github.com/gaebonglee/blog-app",
    contribution: "프론트 100%, 백엔드 100%",
  },
  {
    id: 6,
    title: "Movie App",
    subTitle: "OMDB",
    description: [
      "OMDb API를 활용한 Vanilla JavaScript 기반의 영화 검색 애플리케이션을 개발했습니다.",
      "영화 상세 페이지에서 줄거리, 출연 배우, 평점 등의 정보를 제공합니다.",
      "Vercel을 통해 애플리케이션을 배포했습니다.",
      "로딩 화면과 스켈레톤 UI를 적용하여 자연스러운 사용자 경험을 제공합니다.",
    ],
    type: "PC",
    period: "2025.01.01 ~ 2025.01.02",
    skills: "HTML, CSS, JavaScript, Vercel",
    image: "/images/project/TMP.png",
    projectLink: `https://movie-app-delta-ten-33.vercel.app/#/`,
    githubLink: "https://github.com/gaebonglee/movie-app",
    contribution: "프론트 100%",
  },
  // {
  //   id: 7,
  //   title: "",
  //   subTitle: "",
  //   description: [
  //     "",
  //     "",
  //   ],
  //   type: "",
  //   period: "",
  //   skills: "",
  //   image: "",
  //   projectLink: ``,
  //   githubLink: "",
  //   contribution: "",
  // },
  // {
  //   id: 8,
  //   title: "",
  //   subTitle: "",
  //   description: [
  //     "",
  //     "",
  //   ],
  //   type: "",
  //   period: "",
  //   skills: "",
  //   image: "",
  //   projectLink: ``,
  //   githubLink: "",
  //   contribution: "",
  // },
  // {
  //   id: 9,
  //   title: "",
  //   subTitle: "",
  //   description: [
  //     "",
  //     "",
  //   ],
  //   type: "",
  //   period: "",
  //   skills: "",
  //   image: "",
  //   projectLink: ``,
  //   githubLink: "",
  //   contribution: "",ㄴㄴ
  // },
];
