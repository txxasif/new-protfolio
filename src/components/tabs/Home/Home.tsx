import { useTabStore } from "@/store/tab-store";
import { InteractiveHoverButton } from "../../magicui/interactive-hover-button";
import { WordRotate } from "../../magicui/word-rotate";
import PageWrapper from "../../shared/PageWrapperAnimation";
import PhotoComponent from "../../shared/RotatedPhoto";
import Image from "next/image";
const IntroPart = () => {
  const { setTab } = useTabStore();

  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-6">
      <div className="space-y-3">
        <p className="text- leading-[31px] text-[#767676]">{`// AH Asif`}</p>
        <h1 className="text-2xl sm:text-4xl font-bold text-black dark:text-white">
          {"Hi, My Name is Asif and I'm a"}
          <WordRotate
            className=" "
            words={["Web", "Developer"]}
            duration={2000}
          />
        </h1>
        <div className="pt-4">
          <InteractiveHoverButton
            onClick={() => {
              setTab("projects");
            }}
          >
            See My Works
          </InteractiveHoverButton>
        </div>
      </div>
      <Image
        src="/images/asif.jpg"
        width={600}
        height={800}
        alt="Artistic photo"
        className="block sm:hidden w-full h-full rounded-lg sm:rounded-xl object-cover grayscale contrast-105"
        priority
        sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 600px"
      />
      <div className="hidden sm:block">
        <PhotoComponent />
      </div>
    </div>
  );
};

export const Home: React.FC = () => (
  <PageWrapper>
    <div className="pt-6 sm:flex items-center justify-center sm:h-screen mx-4 sm:mx-20">
      <IntroPart />
    </div>
  </PageWrapper>
);
