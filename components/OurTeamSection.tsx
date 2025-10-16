import React from "react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const OurTeamSection = () => {
  const t = useTranslations("ourTeam");
  const tSpeakers = useTranslations("ourSpeakers");

  const teamMembers = [
    {
      key: "yaelManShahar",
      imagePath: "/team/yael.jpg", // placeholder path
    },
    {
      key: "noamFriedman",
      imagePath: "/team/noam.jpg", // placeholder path
    },
  ];

  const speakers = [
    {
      key: "noamFriedman",
      imagePath: "/speakers/noamf.jpg", // placeholder path
    },
    {
      key: "nitzanLevy",
      imagePath: "/speakers/nitzan.jpg", // placeholder path
    },
    {
      key: "ronWasserman",
      imagePath: "/speakers/simon.jpg", // placeholder path
    },
    {
      key: "avishaiShoshani",
      imagePath: "/speakers/avishai.jpg", // placeholder path
    },
    {
      key: "elioorDor",
      imagePath: "/speakers/elioor.jpg", // placeholder path
    },
    {
      key: "odedMiraz",
      imagePath: "/speakers/oded.jpg", // placeholder path
    },
  ];

  return (
    <section
      id="our-team"
      className="py-28 px-6 bg-white text-primary font-light"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 font-serif">
            {t("title")}
          </h2>
          <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            {tSpeakers("subtitle")}
          </p>
        </div>

        {/* Team Members Section */}
        <div className="mb-20">
          <h3 className="text-4xl font-bold mb-12 font-serif">
            {t("teamMembersTitle")}
          </h3>
          <div className="grid gap-8 md:grid-cols-2">
            {teamMembers.map((member) => (
              <div
                key={member.key}
                className={cn(
                  "bg-white sm:px-8 py-8 border-b-8 border-primary"
                )}
              >
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gray-200 overflow-hidden">
                      {/* Placeholder for team member image */}
                      <div className="w-full h-full bg-primary flex items-center justify-center text-white text-2xl font-bold font-serif">
                        {t(`members.${member.key}.name`).charAt(0)}
                      </div>
                      {/* Uncomment when images are available */}
                      {/* <Image
                        src={member.imagePath}
                        alt={t(`members.${member.key}.name`)}
                        width={128}
                        height={128}
                        className="w-full h-full object-cover"
                      /> */}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-2xl font-semibold mb-2 font-serif">
                      {t(`members.${member.key}.name`)}
                    </h4>
                    <p className="text-lg font-medium mb-4">
                      {t(`members.${member.key}.role`)}
                    </p>
                    <p className="leading-relaxed">
                      {t(`members.${member.key}.bio`)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Speakers Section */}
        <div id="our-speakers">
          <h3 className="text-4xl font-bold mb-12 font-serif">
            {tSpeakers("title")}
          </h3>

          {/* Mobile Carousel */}
          <div className="md:hidden">
            <Carousel
              className="w-full max-w-[calc(100%-88px)] mx-auto"
              opts={{
                align: "start",
                loop: true,
              }}
            >
              <CarouselContent className="-mt-4">
                {speakers.map((speaker) => (
                  <CarouselItem key={speaker.key} className="pt-0">
                    <div
                      className={cn(
                        "bg-white py-6 px-2 border-b-8 border-primary"
                      )}
                    >
                      <div className="text-center">
                        <div className="mb-6">
                          <div className="w-20 h-20 bg-gray-200 overflow-hidden mx-auto">
                            {/* Placeholder for speaker image */}
                            <div className="w-full h-full bg-primary flex items-center justify-center text-white text-xl font-bold font-serif">
                              {tSpeakers(`speakers.${speaker.key}.name`).charAt(
                                0
                              )}
                            </div>
                            {/* Uncomment when images are available */}
                            {/* <Image
                              src={speaker.imagePath}
                              alt={tSpeakers(`speakers.${speaker.key}.name`)}
                              width={80}
                              height={80}
                              className="w-full h-full object-cover"
                            /> */}
                          </div>
                        </div>
                        <h4 className="text-xl font-semibold mb-2 font-serif">
                          {tSpeakers(`speakers.${speaker.key}.name`)}
                        </h4>
                        <p className="text-lg font-light mb-4 italic">
                          &quot;{tSpeakers(`speakers.${speaker.key}.talkTitle`)}
                          &quot;
                        </p>
                        <p className="leading-relaxed text-start text-sm">
                          {tSpeakers(`speakers.${speaker.key}.description`)}
                        </p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {speakers.map((speaker) => (
              <div
                key={speaker.key}
                className={cn("bg-white p-6 border-b-8 border-primary")}
              >
                <div className="text-center">
                  <div className="mb-6">
                    <div className="w-20 h-20 bg-gray-200 overflow-hidden mx-auto">
                      {/* Placeholder for speaker image */}
                      <div className="w-full h-full bg-primary flex items-center justify-center text-white text-xl font-bold font-serif">
                        {tSpeakers(`speakers.${speaker.key}.name`).charAt(0)}
                      </div>
                      {/* Uncomment when images are available */}
                      {/* <Image
                        src={speaker.imagePath}
                        alt={tSpeakers(`speakers.${speaker.key}.name`)}
                        width={80}
                        height={80}
                        className="w-full h-full object-cover"
                      /> */}
                    </div>
                  </div>
                  <h4 className="text-xl font-semibold mb-2 font-serif">
                    {tSpeakers(`speakers.${speaker.key}.name`)}
                  </h4>
                  <p className="text-lg font-light mb-4 italic">
                    &quot;{tSpeakers(`speakers.${speaker.key}.talkTitle`)}&quot;
                  </p>
                  <p className="leading-relaxed text-sm text-start">
                    {tSpeakers(`speakers.${speaker.key}.description`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeamSection;
