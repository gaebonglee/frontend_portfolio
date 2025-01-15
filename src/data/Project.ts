export interface ProjectType {
  id: number;
  title: string;
  subTitle: string;
  description: string;
  period: string;
  library: string;
  framework: string;
  image: string;
  projectLink: string;
  githubLink: string;
  contribution: string;
  type: string;
}

export const projects = [
  {
    id: 1,
    title: "TMP",
    subTitle: "Trainer Matching Project",
    description: "팀프로젝트로 진행한 회원-트레이너 매칭사이트 입니다.",
    type: "",
    period: "2024.04.01 ~ 2024.05.17",
    library: "Figma, React, Scss, JavaScript, MySQL",
    framework: "",
    image: "/images/project/TMP.png",
    projectLink:
      "https://gayounglee.notion.site/Trainer-Matching-Project-PPT-6c02aff850184dbeb843dff6fd695f81",
    githubLink: "https://github.com/gaebonglee/TMP.git",
    contribution: "",
  },
  {
    id: 2,
    title: "LUKS",
    subTitle: "ShoppingMall",
    description:
      "개인프로젝트로 문자인증과 주소찾기 API를 활용한 쇼핑몰 사이트입니다.",
    type: "",
    period: "2024.05.25 ~ 2024.06.14 (continue)",
    library: "React, Scss, JavaScript, API, MySQL",
    framework: "",
    image: "/images/qna/vision.png",
    projectLink:
      "https://gayounglee.notion.site/Luks-PPT-2ecadfde50dd4f1f9fc3e6fe6043708d?pvs=4",
    githubLink: "https://github.com/gaebonglee/luks.git",
    contribution: "",
  },
  {
    id: 3,
    title: "Portfolio",
    subTitle: "WebSite",
    description:
      "웹사이트 기준으로 제작된 포트폴리오 사이트입니다.(반응형 업데이트 예정),웹사이트 기준으로 제작된 포트폴리오 사이트입니다.(반응형 업데이트 예정)",
    type: "",
    period: "2024.08.04 ~ 2024.08.11",
    library: "React, TypeScript, Scss, GSAP",
    framework: "",

    image: "/images/project/TMP.png",
    projectLink: "https://gaebonglee.github.io/gayoung_portfolio/",
    githubLink: "https://github.com/gaebonglee/gayoung_portfolio.git",
    contribution: "",
  },
  {
    id: 4,
    title: "Exchange Currency",
    subTitle: "Naver",
    description: "네이버의 <환율계산> 영역을 마크업한 결과물입니다.",
    type: "",
    period: "2024.05.23 ~ 2024.05.24",
    library: "HTML5, CSS3, JavaScript",
    framework: "",

    image: "/images/project/TMP.png",
    projectLink:
      "https://gaebonglee.github.io/gayoung_portfolio/exchangeCurrency/index.html",
    githubLink: "https://github.com/gaebonglee/exchangeCurrency.git",
    contribution: "",
  },
  {
    id: 5,
    title: "Header",
    subTitle: "Kurly",
    description: "마켓컬리의 헤더부분을 마크업한 결과물입니다.",
    type: "",
    period: "2024.06.28 ~ 2024.07.01",
    library: "HTML5, CSS3",
    framework: "",

    image: "/images/project/TMP.png",
    projectLink:
      "https://gaebonglee.github.io/gayoung_portfolio/kurly/kurlyHeader/kurlyHeader.html",
    githubLink: "https://github.com/gaebonglee/kurly.git",
    contribution: "",
  },
  {
    id: 6,
    title: "ProductTimer",
    subTitle: "Kurly",
    description:
      "마켓컬리의 카테고리 영역을 마크업한 결과물입니다. 24시간마다 시간이 리셋됩니다.",
    type: "",
    period: "2024.06.28 ~ 2024.07.01",
    library: "HTML5, CSS3, JavaScript",
    framework: "",

    image: "/images/project/TMP.png",
    projectLink: `https://gaebonglee.github.io/gayoung_portfolio/kurly/timerProduct/timerProduct.html`,
    githubLink: "https://github.com/gaebonglee/kurly.git",
    contribution: "",
  },
  {
    id: 7,
    title: "Category",
    subTitle: "Kurly",
    description: "마켓컬리의 카테고리 영역을 마크업한 결과물입니다.",
    type: "",
    period: "2024.06.28 ~ 2024.07.01",
    library: "HTML5, CSS3, JavaScript",
    framework: "",

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
    library: "HTML5, CSS3, JavaScript",
    framework: "",
    image: "/images/project/TMP.png",
    projectLink:
      "https://gaebonglee.github.io/gayoung_portfolio/toDoList/myToDoList.html",
    githubLink: "https://github.com/gaebonglee/toDoList.git",
    contribution: "",
  },
];
