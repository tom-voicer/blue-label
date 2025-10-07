import React from "react";
import Image from "next/image";

const RestartImageSection = () => {
  return (
    <Image
      src="/restart.jpg"
      alt="hug"
      width={3000}
      height={2000}
      className="mx-auto max-h-32 sm:max-h-72 object-cover"
    />
  );
};

export default RestartImageSection;
