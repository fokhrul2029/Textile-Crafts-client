import Lottie from "lottie-react";
import animation from "./loaderAnimation.json";

function Loader() {
  return (
    <div className="w-32 mx-auto ">
      <Lottie animationData={animation} />
    </div>
  );
}

export default Loader;
