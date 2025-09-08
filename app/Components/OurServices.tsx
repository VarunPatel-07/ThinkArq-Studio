import React from "react";
import { ServicesArray } from "../Constant/ServicesArray";
import { classNames, IsOdd } from "../Helper/Helper";
const DotLottieReact = React.lazy(() =>
  import("@lottiefiles/dotlottie-react").then((mod) => ({
    default: mod.DotLottieReact,
  }))
);
function OurServices() {
  return (
    <div className="w-full">
      <div>
        <h2>Our Services</h2>
      </div>
      <div>
        {ServicesArray?.map((services, index) => (
          <div
            key={services?.id}
            className={classNames("w-full p-5", { "bg-[#191A23]": IsOdd(index), "bg-[#B9FF66]": !IsOdd(index) })}></div>
        ))}
      </div>
    </div>
  );
}

export default OurServices;
