/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const EducationExperienceCard = ({
  icon,
  title,
  grade,
  place,
  date,
  score,
  desc,
  company,
}) => {
  return (
    <div className="flex gap-7 mb-10">
      <div className="text-white">
        <img
          src={icon}
          alt=""
          width={70}
          height={70}
          className="rounded-[50%]"
        />
      </div>
      <div
        className={`w-[100%] ${
          desc ? "h-[200px]" : "h-[150px]"
        } bg-card p-[20px] border-b-2 border-white rounded-lg `}
      >
        <h1 className="text-white font-bold text-[24px] bg-card">
          {title}{" "}
          {grade && (
            <span className="text-navColor text-[1rem] bg-card">{grade}</span>
          )}
          {company && (
            <span className="text-navColor text-[1rem] bg-card">{company}</span>
          )}
        </h1>
        <p className="text-navColor text-[1rem] bg-card">{place}</p>
        <p className="text-navColor text-[1rem] bg-card">{date}</p>
        {score && (
          <h3 className="text-white font-medium text-[1.25rem] bg-card">
            {score}
          </h3>
        )}
        {desc && <p className="text-white bg-card text-[1rem]">{desc}</p>}
      </div>
    </div>
  );
};

export default EducationExperienceCard;
