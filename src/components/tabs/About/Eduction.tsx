import React from "react";
import { Heading } from "./Heading";

interface EducationItemProps {
  school: string;
  degree: string;
  time: string;
}

const EducationItem: React.FC<EducationItemProps & { isLast: boolean }> = ({
  school,
  degree,
  time,
  isLast,
}) => {
  return (
    <div
      className={`w-full flex justify-between items-center pb-4 mb-4 ${
        isLast ? "" : "border-b border-gray-200"
      }`}
    >
      <div>
        <div className="font-semibold text-lg text-gray-900">{school}</div>
        <div className="text-[#767676]">{degree}</div>
      </div>
      <div className="border border-gray-300 rounded-md px-3 py-1 text-sm text-gray-700 whitespace-nowrap">
        {time}
      </div>
    </div>
  );
};

interface EducationListProps {
  educationData: EducationItemProps[];
}

const EducationList: React.FC<EducationListProps> = ({ educationData }) => {
  return (
    <div>
      {educationData.map((item, index) => (
        <EducationItem
          key={index}
          {...item}
          isLast={index === educationData.length - 1}
        />
      ))}
    </div>
  );
};

const Education: React.FC = () => {
  const educationData: EducationItemProps[] = [
    {
      school: "Daffodil International University",
      degree: "BSC",
      time: "2018 - 2023",
    },
    {
      school: "Birshreshtha Munshi Abdur Rouf Public College",
      degree: "HSC",
      time: "2015 - 2017",
    },
    {
      school: "Sonagazi Mohammad Saber Model Pilot High School",
      degree: "SSC",
      time: "2013 - 2015",
    },
  ];

  return (
    <div className="space-y-10 flex-1 p-6 w-full">
      <Heading title="Education" />
      <EducationList educationData={educationData} />
    </div>
  );
};

export { Education };
