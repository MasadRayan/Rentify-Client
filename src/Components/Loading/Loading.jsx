import Lottie from "lottie-react";
import carLoading from "../../assets/lottie/loading.json";

export default function Loader() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <Lottie animationData={carLoading} loop className="w-40 h-40" />
    </div>
  );
}
