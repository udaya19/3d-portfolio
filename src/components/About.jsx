import SectionHeading from "./SectionHeading";

const About = () => {
  return (
    <div id="about" className="relative" data-aos="fade-right">
      {/* <div className="text-white text-[30px] absolute left-0 font-extrabold ">
        Overview
      </div> */}
      <SectionHeading title="Overview" />
      <div className="text-navColor absolute left-0  text-left lg:font-[20px] sm:font-[16px]">
        I am a passionate web developer,learner and currently a student. I am a{" "}
        <br />
        JavaScript developer currently learning Node.js and React, Express and{" "}
        <br />
        Mongo.I am MERN stack developer with good coding and communication{" "}
        <br />
        skills.I love sharing different ideas with my team and implement them in{" "}
        <br />
        real-world.I believe coding is secondary and sharing ideas,knowledge and{" "}
        <br />
        good communication with team is more important. Even I am open for{" "}
        <br />
        mentoring CSE students for free till they graduate or till they get{" "}
        <br />
        their job.
      </div>
    </div>
  );
};

export default About;
