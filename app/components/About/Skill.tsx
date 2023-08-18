import React from "react";

interface SkillProps {
  skill: string;
  image: string;
}

const Skill: React.FC<SkillProps> = ({ skill, image }) => {
  return (
    <div className="flex flex-col items-center px-4 py-2 rounded-lg">
      <img className="h-14 tablet:h-16 mb-2" src={image} alt={skill} />
      <p className="text-md text-slate-600">{skill}</p>
    </div>
  );
};

export default Skill;
