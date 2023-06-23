import { Tilt } from "react-tilt";

import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";

import projects from "../data/project";

const Project = () => {
  const defaultOptions = {
    reverse: false, // reverse the tilt direction
    max: 35, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
  };
  return (
    <div id="projects">
      <SectionHeading title="Projects" />
      <p className="text-navColor font-[1.5rem] -mt-[1.5rem]">
        Following projects showcases my skills and experience through real-world{" "}
        <br />
        examples of my work. Each project is briefly described with links to{" "}
        <br />
        code repositories in it. It reflects my ability to solve complex <br />
        problems, work with different technologies, and manage projects <br />
        effectively.
      </p>
      <div className="flex flex-wrap gap-3 ">
        {projects.map((p, index) => (
          <Tilt options={defaultOptions} key={index}>
            <ProjectCard
              key={index}
              desc={p.description}
              image={p.image}
              tags={p.tags}
              title={p.title}
              link={p.source_code_link}
            />
          </Tilt>
        ))}
      </div>
    </div>
  );
};

export default Project;
