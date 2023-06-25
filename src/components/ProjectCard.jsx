import { AiFillGithub } from "react-icons/ai";

/* eslint-disable react/prop-types */
const ProjectCard = ({ title, desc, image, tags, link }) => {
  return (
    <div className="w-[360px] rounded-3xl bg-card mt-2 p-5 " data-aos="flip-up">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full bg-card h-[230px] rounded-xl object-contain"
        />
        <div className="absolute top-0 right-0">
          <a href={link} target="_blank" rel="noreferrer">
            <AiFillGithub color="white" size={25} />
          </a>
        </div>
      </div>
      <h2 className="text-white bg-card font-extrabold mt-3 text-[20px]">
        {title}
      </h2>
      <p className="text-navColor bg-card">{desc}</p>
      <div className="flex gap-1 bg-card ">
        {tags?.map((t, index) => (
          <p className={`bg-card ${t.color}`} key={index}>
            #{t.name}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
