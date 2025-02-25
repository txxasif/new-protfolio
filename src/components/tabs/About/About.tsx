import React from "react";
const Heading = ({ title }: { title: string }) => {
  return (
    <h1 className="text-[#000] text-xl leading-8 font-bold tracking-widest">{`// ${title}`}</h1>
  );
};
const PersonalDetails = () => {
  const contactData = [
    { label: "Name", value: "Jessica Parker" },
    { label: "Address", value: "Ave Street 177, New York, USA" },
    { label: "Study", value: "University of Texas" },
    { label: "Degree", value: "Master of Design" },
    { label: "Mail", value: "james@example.com" },
    { label: "Phone", value: "+44 077 155 09 09" },
    { label: "Freelance", value: "Available" },
  ];

  return (
    <div className="space-y-10 flex-1 p-6">
      <Heading title="Personal Details" />
      <div className="">
        {contactData.map((item, index) => (
          <div key={index} className="mb-2 flex items-start ">
            <strong className="min-w-[140px] mr-2 font-medium text-[#000]">
              {item.label}:
            </strong>
            <span className="text-[#767676]">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
const BioGraphy = () => {
  return (
    <div className="space-y-10 flex-1 p-6">
      <Heading title="Biography" />
      <p className="text-[#767676]">
        Hi, my name is Jessica Parker and I began using WordPress when it first
        began. I’ve spent most of my waking hours for the last ten years
        designing, programming and operating WordPress sites. One of my
        specialties is taking an idea from scratch and creating a full-fledged
        platform. I go beyond to produce sites with a unique, outstanding,
        contemporary look-and-feel.
      </p>
    </div>
  );
};
export function About() {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-center items-start gap-6">
        <BioGraphy />
        <PersonalDetails />
      </div>
    </div>
  );
}
