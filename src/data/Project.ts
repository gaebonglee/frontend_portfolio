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
    description: "팀프로젝트로 진행한 회원-트레이너 매칭사이트 입니다.",
    type: "PC",
    period: "2024.04.01 ~ 2024.05.17",
    skills: "Figma, React, Scss, JavaScript, MySQL",
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
    description:
      "개인프로젝트로 문자인증과 주소찾기 API를 활용한 쇼핑몰 사이트입니다.",
    type: "PC",
    period: "2024.05.25 ~ 2024.06.14 (continue)",
    skills: "React, Scss, JavaScript, API, MySQL",
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
    description:
      "웹사이트 기준으로 제작된 포트폴리오 사이트입니다.(반응형 업데이트 예정),웹사이트 기준으로 제작된 포트폴리오 사이트입니다.(반응형 업데이트 예정)",
    type: "",
    period: "2025.01.13 ~ 2025.01.18",
    skills: "React, TypeScript, Scss, GSAP",
    image: "/images/project/TMP.png",
    projectLink: "https://gaebonglee.github.io/gayoung_portfolio/",
    githubLink: "https://github.com/gaebonglee/gayoung_portfolio.git",
    contribution: "",
  },

  {
    id: 4,
    title: "StarBucks",
    subTitle: "WebSite",
    description:
      "스타벅스 홈페이지 클론코딩입니다. css와 javascript를 활용하여 애니메이션을 구현했습니다다.",
    type: "",
    period: "2024.06.28 ~ 2024.07.01",
    skills: "HTML5, CSS3, JavaScript",
    image: "/images/project/TMP.png",
    projectLink:
      "https://gaebonglee.github.io/gayoung_portfolio/kurly/kurlyCategory/category.html",
    githubLink: "https://github.com/gaebonglee/kurly.git",
    contribution: "",
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
    title: "G Blog",
    subTitle: "WebSite Blog",
    description:
      "반응형으로 제작된 blog-app입니다. Firebase로 백엔드 연동하여 사용자 및 내용 관리가 가능합니다.",
    type: "",
    period: "2025.01.09 ~ 2025.01.10",
    skills: "React, TypeScript, CSS3, Firebase",
    image: "/images/project/TMP.png",
    projectLink: "https://react-blog-app-c3c2f.web.app/",
    githubLink: "https://github.com/gaebonglee/blog-app",
    contribution: "",
  },
  {
    id: 7,
    title: "Movie App",
    subTitle: "OMDB",
    description:
      "OMDB MOVIE API를 활용하여 영화 검색 사이트를 제작하였습니다. 영문으로 영화제목 입력 시 확인할 수 있습니다. 짧은 줄거리, 평점, 출연배우 등의 정보를 확인할 수 있습니다.",
    type: "",
    period: "2025.01.01 ~ 2025.01.02",
    skills: "HTML5, CSS3, JavaScript",
    image: "/images/project/TMP.png",
    projectLink: `https://gaebonglee.github.io/gayoung_portfolio/kurly/timerProduct/timerProduct.html`,
    githubLink: "https://github.com/gaebonglee/kurly.git",
    contribution: "",
  },
  {
    id: 8,
    title: "StarBucks",
    subTitle: "WebSite",
    description:
      "스타벅스 홈페이지 클론코딩입니다. css와 javascript를 활용하여 애니메이션을 구현했습니다다.",
    type: "",
    period: "2024.06.28 ~ 2024.07.01",
    skills: "HTML5, CSS3, JavaScript",
    image: "/images/project/TMP.png",
    projectLink:
      "https://gaebonglee.github.io/gayoung_portfolio/kurly/kurlyCategory/category.html",
    githubLink: "https://github.com/gaebonglee/kurly.git",
    contribution: "",
  },
  {
    id: 8,
    title: "To Do List",
    subTitle: "Task Management",
    description:
      "반응형으로 구현한 My To Do List 입니다. 할 일의 추가, 완료, 삭제 가능합니다.",
    type: "",
    period: "2024.07.18 ~ 2024.07.19",
    skills: "HTML5, CSS3, JavaScript",
    image: "/images/project/TMP.png",
    projectLink:
      "https://gaebonglee.github.io/gayoung_portfolio/toDoList/myToDoList.html",
    githubLink: "https://github.com/gaebonglee/toDoList.git",
    contribution: "",
  },
];
