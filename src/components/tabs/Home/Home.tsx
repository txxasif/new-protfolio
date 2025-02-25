import { InteractiveHoverButton } from "../../magicui/interactive-hover-button";
import { WordRotate } from "../../magicui/word-rotate";
import PageWrapper from "../../shared/PageWrapperAnimation";
import PhotoComponent from "../../shared/RotatedPhoto";

const IntroPart = () => {
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
          <InteractiveHoverButton>See</InteractiveHoverButton>
        </div>
      </div>

      <PhotoComponent />
    </div>
  );
};

export const Home: React.FC = () => (
  <PageWrapper>
    <div className="flex items-center justify-center h-screen mx-4">
      <IntroPart />
    </div>
  </PageWrapper>
);
