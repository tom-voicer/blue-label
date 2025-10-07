import AudienceImageSection from "@/components/AudienceImageSection";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HugImageSection from "@/components/HugImageSection";
import SpeakerImageSection from "@/components/SpeakerImageSection";
import WhatYouGainSection from "@/components/WhatYouGainSection";
import WheelchairImageSection from "@/components/WheelchairImageSection";
import WhoWeAreSection from "@/components/WhoWeAreSection";
import WhyNowSection from "@/components/WhyNowSection";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <AudienceImageSection />
      <WhoWeAreSection />
      <WheelchairImageSection />
      <WhyNowSection />
      <HugImageSection />
      <WhatYouGainSection />
      <SpeakerImageSection />
    </>
  );
}
