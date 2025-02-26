"use client";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { Heading } from "./Heading";

export const PersonalDetails = () => {
  const contactData = [
    { label: "Name", value: "Asif" },
    { label: "Address", value: "Dhaka , Bangladesh" },
    { label: "Study", value: "Daffodil International University" },
    { label: "Degree", value: "Computer Science and Engineering" },
    { label: "Mail", value: "ahasiffff@gmail.com" },
    { label: "Phone", value: "+8801679806197" },
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
const BioGraphy = () => {
  const handleDownload = async () => {
    try {
      const response = await fetch("/files/cv.pdf");
      const blob = await response.blob();

      const url = URL.createObjectURL(blob);

      // Cleanup URL after some time
      setTimeout(() => URL.revokeObjectURL(url), 100);
    } catch (error) {
      console.error("Error downloading the file:", error);
    }
  };

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
      <InteractiveHoverButton onClick={handleDownload}>
        Download CV
      </InteractiveHoverButton>
    </div>
  );
};
export default BioGraphy;
