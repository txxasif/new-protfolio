"use client"; // Ensures this runs only on the client side

import Lottie from "lottie-react";

interface LottieAnimationProps {
  animationData: any;
  className?: string;
}

const LottieAnimation = ({
  animationData,
  className = "size-10",
}: LottieAnimationProps) => {
  if (!animationData) return <p>Loading animation...</p>;

  return (
    <Lottie className={className} animationData={animationData} loop={true} />
  );
};

export default LottieAnimation;
