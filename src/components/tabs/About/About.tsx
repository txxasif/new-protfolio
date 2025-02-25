import React from "react";
import { Education } from "./Eduction";
import { Experience } from "./Experience";
import { BioGraphy, PersonalDetails } from "./PersonalInformation";
import { Technologies } from "./Technologies";
import { Interests } from "./Interest";
import PageWrapper from "@/components/shared/PageWrapperAnimation";
import { Separator } from "@/components/ui/separator";

export function About() {
  return (
    <PageWrapper>
      <div className="pt-0 sm:pt-28 sm:mx-20">
        <div className="flex flex-col md:flex-row justify-center items-start gap-6">
          <BioGraphy />
          <PersonalDetails />
        </div>
        <div className="px-4">
          <Separator />
        </div>
        <div className="flex flex-col md:flex-row justify-center items-start gap-6">
          <Education />
          <Experience />
        </div>
        <div className="px-4">
          <Separator />
        </div>

        <div className="flex flex-col md:flex-row justify-center items-start gap-6 ">
          <Technologies />
          <Interests />
        </div>
      </div>
    </PageWrapper>
  );
}
