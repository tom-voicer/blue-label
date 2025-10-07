import React from "react";
import Image from "next/image";

const WheelchairImageSection = () => {
  return (
    <Image
      src="/wheelchair.jpg"
      alt="wheelchair warrior"
      width={3000}
      height={2000}
      className="mx-auto h-40 sm:h-72 object-cover"
    />
  );
};

export default WheelchairImageSection;
