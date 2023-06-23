import education from "../data/education";
import EducationExperienceCard from "./EducationCard";
import SectionHeading from "./SectionHeading";

const Education = () => {
  return (
    <div id="education">
      <SectionHeading title="Education" />
      {education.map((e, index) => (
        <EducationExperienceCard
          key={index}
          title={e.title}
          date={e.date}
          score={e.score}
          grade={e.grade}
          place={e.place}
          icon={e.icon}
        />
      ))}
    </div>
  );
};

export default Education;
