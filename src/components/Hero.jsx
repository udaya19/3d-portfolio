import Intro from "./Intro";
import SkillsBall from "./SkillsBall";

const Hero = () => {
  return (
    <div className="lg:flex md:flex  lg:items-center lg:h-[500px] md:h-[250px] mt-10 w-full">
      <Intro />
      <SkillsBall />
    </div>
  );
};

export default Hero;
