import React from "react";
import { Education } from "./Eduction";
import { Experience } from "./Experience";
import { PersonalDetails } from "./PersonalInformation";
import { Technologies } from "./Technologies";
import PageWrapper from "@/components/shared/PageWrapperAnimation";
import { Separator } from "@/components/ui/separator";
import dynamic from "next/dynamic";
const BioGraphy = dynamic(() => import("./PersonalInformation"), {
  ssr: false,
});
export default function About() {
  return (
    <PageWrapper>
      <div className="pt-8 sm:pt-16 sm:mx-20">
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
          {/* <Interests /> */}
        </div>
      </div>
    </PageWrapper>
  );
}
