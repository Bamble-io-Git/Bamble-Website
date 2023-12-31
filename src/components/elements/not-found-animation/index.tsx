"use client";
import Lottie from "lottie-react";
import Animation from "./animation.json";

const LottieControl = () => {
  return (
    <div>
      <Lottie animationData={Animation} loop={true} className="w-96 h-96" />
    </div>
  );
};

export default LottieControl;
