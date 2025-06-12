import "./LoadingIcon.css";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

function LoadingIcon() {
  return (
    <div className="loading-icon">
      <div className="lottie-animation">
        <DotLottieReact
          src="https://lottie.host/3d38da9f-b78b-4100-a5e5-4275366c7f17/JONp6S8qrh.lottie"
          loop
          autoplay
        />
      </div>
    </div>
  );
}

export default LoadingIcon;
