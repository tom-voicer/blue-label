import React from "react";
import Image from "next/image";

const HugImageSection = () => {
  return (
    <Image
      src="/hug.jpg"
      alt="hug"
      width={3000}
      height={2000}
      className="mx-auto h-40 sm:h-72 object-cover"
    />
  );
};

export default HugImageSection;
