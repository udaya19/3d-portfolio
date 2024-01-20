import SectionHeading from "./SectionHeading";
import Text3DComponent from "./Text3D";

const Skills = () => {
  return (
    <div>
      <SectionHeading title="Skills" />
      <div className="flex flex-wrap">
        <Text3DComponent word1="HTML5" word2="" />
        <Text3DComponent word1="CSS3" word2="" />
        <Text3DComponent word1="Java" word2="Script" />
        <Text3DComponent word1="Type" word2="Script" />
        <Text3DComponent word1="SQL" word2="" />
        <Text3DComponent word1="NoSQL" word2="" />
        <Text3DComponent word1="ReactJS" word2="" />
        <Text3DComponent word1="React" word2="Native" />
        <Text3DComponent word1="NodeJs" word2="" />
        <Text3DComponent word1="System" word2="Design" />
        <Text3DComponent word1="AWS" word2="" />
        <Text3DComponent word1="Docker" word2="" />
        <Text3DComponent word1="Jenkins" word2="CI/CD" />
      </div>
    </div>
  );
};

export default Skills;
