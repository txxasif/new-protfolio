import React from "react";
import { Heading } from "./Heading";

interface ExperienceItemProps {
  company: string;
  role: string;
  time: string;
}

const ExperienceItem: React.FC<ExperienceItemProps & { isLast: boolean }> = ({
  company,
  role,
  time,
  isLast,
}) => {
  return (
    <div
      className={`flex justify-between items-center pb-4 mb-4 ${
        isLast ? "" : "border-b border-gray-200"
      }`}
    >
      <div>
        <div className="font-semibold text-lg text-gray-900">{company}</div>
        <div className="text-[#767676]">{role}</div>
      </div>
      <div className="border border-gray-300 rounded-md px-3 py-1 text-sm text-gray-700">
        {time}
      </div>
    </div>
  );
};

interface ExperienceListProps {
  experienceData: ExperienceItemProps[];
}

const ExperienceList: React.FC<ExperienceListProps> = ({ experienceData }) => {
  return (
    <div>
      {experienceData.map((item, index) => (
        <ExperienceItem
          key={index}
          {...item}
          isLast={index === experienceData.length - 1}
        />
      ))}
    </div>
  );
};

const Experience: React.FC = () => {
  const experienceData: ExperienceItemProps[] = [
    {
      company: "Google",
      role: "Software Engineer",
      time: "2020 - Present",
    },
    {
      company: "WebDev Inc.",
      role: "Frontend Developer",
      time: "2018 - 2020",
    },
    {
      company: "TechSolutions",
      role: "Junior Developer",
      time: "2016 - 2018",
    },
  ];

  return (
    <div className="space-y-10 flex-1 p-6 w-full">
      <Heading title="Experience" />
      <ExperienceList experienceData={experienceData} />
    </div>
  );
};

export { Experience };
