import React from "react";
import Image from "next/image";
const Fingerprint = () => {
  return (
    <div className="mt-auto">
      <Image
        priority={true}
        width={30}
        height={40}
        src="/assets/Layer_1.png"
        alt="Fingerprint"
        className="w-24 h-24"
      />
    </div>
  );
};

export default Fingerprint;
