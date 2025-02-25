import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { Heading } from "./Heading";

export const PersonalDetails = () => {
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
            <strong className="w-auto sm:min-w-[140px] mr-2 font-medium text-[#000]">
              {item.label}:
            </strong>
            <span className="text-[#767676]">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
export const BioGraphy = () => {
  return (
    <div className="space-y-10 flex-1 p-6">
      <Heading title="Biography" />
      <p className="text-[#767676]">
        Hi, I’m Asif, a passionate Software Engineer with years of experience in
        designing, developing, and optimizing web applications. I specialize in
        transforming ideas into fully functional platforms, focusing on clean
        architecture, performance, and modern user experiences. My expertise
        extends beyond coding—I strive to build scalable, high-quality solutions
        with a contemporary and intuitive design.
      </p>
      <InteractiveHoverButton>Download CV</InteractiveHoverButton>
    </div>
  );
};
