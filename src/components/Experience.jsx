// import { VerticalTimelineElement } from "react-vertical-timeline-component";
// import "react-vertical-timeline-component/style.min.css";

import experience from "../data/experience";

import SectionHeading from "./SectionHeading";
import EducationExperienceCard from "./EducationCard";

const Experience = () => {
  return (
    <div id="experience" data-aos="fade-down">
      <SectionHeading title="Experience" />
      {/* {experience.map((e, index) => (
        <div className="mb-10" key={index}>
          <VerticalTimelineElement
            contentStyle={{
              background: "#1d1836",
              color: "#fff",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #232631" }}
            date={e.startEndDate}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={
              <div className="flex justify-center items-center w-full h-full">
                <img
                  src={e.icon}
                  alt={e.alt}
                  className="w-[100%] rounded-full h-[100%] "
                />
              </div>
            }
          >
            <h3 className="text-white text-[24px] bg-[#1d1836] font-bold text-left">
              {e.title}
            </h3>
            <h4 className="text-navColor bg-[#1d1836] text-left">
              {e.company}, {e.place}
            </h4>
            <p
              className="text-white bg-[#1d1836] text-[16px] font-medium text-left pt-4"
              style={{ margin: 0 }}
            >
              {e.desc}
            </p>
          </VerticalTimelineElement>
        </div>
      ))} */}
      {experience.map((e, index) => (
        <EducationExperienceCard
          key={index}
          date={e.startEndDate}
          desc={e.desc}
          icon={e.icon}
          place={e.place}
          title={e.title}
        />
      ))}
    </div>
  );
};

export default Experience;
