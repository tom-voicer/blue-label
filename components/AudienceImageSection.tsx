import React from "react";
import Image from "next/image";

const AudienceImageSection = () => {
  return (
    <Image
      src="/audience-1.jpg"
      alt="Why Now"
      width={3000}
      height={2000}
      className="mx-auto max-h-32 sm:max-h-72 object-cover"
    />
  );
};

export default AudienceImageSection;
