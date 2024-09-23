import Fingerprint from "../components/Fingerprint";
import ProgressBar from "../components/ProgressBar";

const IndexPage = () => {
  return (
    <div className="h-screen bg-[#080717] flex flex-col items-center justify-between">
    <h1 className="text-center opacity-70 text-lg mt-20 text-[#D7D8D9] mx-8">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia
      odio vitae.
    </h1>
    <Fingerprint />
    {/* <ProgressBar /> */}
  </div>
  );
};

export default IndexPage;
