import React from "react";
import Image from "next/image";
export default function Print() {
  const handleContextMenu = (e) => {
    e.preventDefault();
  };
  return (
    <div className="fixed inset-x-0 bottom-0 flex justify-center items-end p-5 bg-transparent">
      <Image
        priority={true}
        width={30}
        height={40}
        src="/assets/Layer.webp"
        alt="Fingerprint"
        className="w-24 h-24"
        onContextMenu={handleContextMenu}
      />
    </div>
  );
}
