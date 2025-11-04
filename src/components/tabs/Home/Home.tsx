import dynamic from "next/dynamic";
import { useTabStore } from "@/store/tab-store";
import { InteractiveHoverButton } from "../../magicui/interactive-hover-button";
import { WordRotate } from "../../magicui/word-rotate";
import Image from "next/image";
import SocialIcons from "@/components/socaila/Socials";
import Lottie from "lottie-react";
import HiAnimation from "@/components/animation-lottie/wave.json";

const DynamicPhotoComponent = dynamic(
  () => import("../../shared/RotatedPhoto"),
  {
    ssr: false,
  }
);
const PageWrapper = dynamic(() => import("../../shared/PageWrapperAnimation"), {
  ssr: false,
});

const IntroPart = () => {
  const { setTab } = useTabStore();

  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-6">
      <div className="space-y-3">
        <div className="flex items-center justify-center w-fit -ml-6 sm:-ml-10 ">
          <Lottie
            className={"size-32"}
            animationData={HiAnimation}
            loop={true}
          />
        </div>
        <p className="text- leading-[31px] text-[#767676]">{`// Amjad Hossain Asif`}</p>
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
        <div className="pt-4">
          <SocialIcons />
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
        <DynamicPhotoComponent />
      </div>
    </div>
  );
};

const Home: React.FC = () => (
  <PageWrapper>
    <div className="pt-12 sm:pt-0 sm:flex items-center justify-center sm:min-h-[calc(100vh-5rem)] mx-4 sm:mx-20 ">
      <IntroPart />
    </div>
  </PageWrapper>
);
export default Home;
