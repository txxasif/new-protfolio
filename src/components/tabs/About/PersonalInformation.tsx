"use client";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { Heading } from "./Heading";

import { useEffect, useState } from "react";

export const BioGraphy = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleDownload = () => {
    if (!isClient) return;
    const link = document.createElement("a");
    link.href = "/files/cv.pdf";
    link.download = "asif_cv.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
