
export default  function TestPage() {
    return(<div></div>)
}
// import gsap from "gsap";
// import "../../styles/components/projects/Projects.scss";
// import { useScrollAnimations } from "../../hooks/useScrollAnimations";
// import { projects } from "data/Project";
// import ProjectDetail from "./ProjectDetail";
// import { useState, useRef, useEffect } from "react";

// export default function Projects() {
//   useScrollAnimations(".cloumn", ".cloumn--item-img img");

//   const [selectProject, setSelectProject] = useState<number | null>(null);
//   const detailRef = useRef<HTMLDivElement | null>(null);

//   const groupedProjects = projects.reduce((result, project, index) => {
//     const groupIndex = Math.floor(index / 3);
//     if (!result[groupIndex]) {
//       result[groupIndex] = [];
//     }
//     result[groupIndex].push(project);
//     return result;
//   }, [] as Array<typeof projects>);

//   // GSAP 애니메이션 효과
//   useEffect(() => {
//     if (selectProject !== null) {
//       gsap.to(detailRef.current, {
//         x: 0, // 화면에 나타남
//         duration: 0.8,
//         ease: "power3.out",
//       });
//     } else {
//       gsap.to(detailRef.current, {
//         x: "100%", // 화면 밖으로 이동
//         duration: 0.8,
//         ease: "power3.in",
//       });
//     }
//   }, [selectProject]);

//   return (
//     <section className="section--projects-Home">
//       <div className="padding-global is-full-height">
//         <div className="intro">
//           <h1>PROJECTS</h1>
//         </div>
//         <div className="cloumns">
//           {groupedProjects.map((group, colIndex) => (
//             <div className="cloumn" key={colIndex}>
//               {group.map((project) => (
//                 <figure
//                   className="cloumn--item"
//                   key={project.id}
//                   onClick={() => setSelectProject(project.id)}
//                 >
//                   <div className="cloumn--item-imgwrap">
//                     <div className="cloumn--item-img">
//                       <img src={project.image} alt={project.title} />
//                     </div>
//                     {selectProject === project.id && (
//                       <div className="project-detail-overlay">
//                         <div className="overlay-content">
//                           <h3>{project.title}</h3>
//                           <p>click</p>
//                         </div>
//                         {/* <ProjectDetail project={project} /> */}
//                       </div>
//                     )}
//                   </div>
//                 </figure>
//               ))}
//               {/* 프로젝트가 3배수가 아닐 경우 빈 공간 추가 */}
//               {Array.from({ length: 3 - group.length }).map((_, idx) => (
//                 <figure
//                   className="cloumn--item placeholder"
//                   key={placeholder-${colIndex}-${idx}}
//                 >
//                   <div className="cloumn--item-imgwrap placeholder">
//                     <div className="cloumn--item-img placeholder">
//                       <img className="placeholder" alt="placeholder" />
//                     </div>
//                   </div>
//                 </figure>
//               ))}
//             </div>
//           ))}
//         </div>
//         <div
//           className="project-detail-container"
//           ref={detailRef} // Ref 추가
//         >
//           {selectProject !== null && (
//             <ProjectDetail
//               project={
//                 projects.find((project) => project.id === selectProject)!
//               }
//             />
//           )}
//           <button className="close-btn" onClick={() => setSelectProject(null)}>
//             Close
//           </button>
//         </div>
//         <div className="outro">
//           <div className="text-wrap">
//             <h3>THANK YOU</h3>
//             <p>Made by @geabonglee</p>
//             <div className="link-github">
//               <a href="https://github.com/gaebonglee">Git Hub</a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }