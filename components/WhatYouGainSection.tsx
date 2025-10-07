import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import BookWarriorButton from "./BookWarriorButton";

export default function WhatYouGainSection() {
  const t = useTranslations("whatYouGain");

  const benefits = [
    {
      key: "flexibleFormat",
      titleKey: "benefits.flexibleFormat.title",
      descriptionKey: "benefits.flexibleFormat.description",
    },
    {
      key: "authenticImpact",
      titleKey: "benefits.authenticImpact.title",
      descriptionKey: "benefits.authenticImpact.description",
    },
    {
      key: "bilingualAccessibility",
      titleKey: "benefits.bilingualAccessibility.title",
      descriptionKey: "benefits.bilingualAccessibility.description",
    },
    {
      key: "workshopAddition",
      titleKey: "benefits.workshopAddition.title",
      descriptionKey: "benefits.workshopAddition.description",
    },
  ];

  const whyInvitePoints = [
    { key: "point1", textKey: "whyInvite.point1" },
    { key: "point2", textKey: "whyInvite.point2" },
    { key: "point3", textKey: "whyInvite.point3" },
  ];

  return (
    <section
      id="what-you-gain"
      className="py-28 px-4 bg-white text-primary font-light"
      style={{
        backgroundImage: "url('/whatYouGain_bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 font-serif">
            {t("title")}
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-20">
          {benefits.map((benefit) => (
            <div
              key={benefit.key}
              className={cn("bg-white p-8 border-b-8 border-primary")}
            >
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-4 font-serif">
                    {t(benefit.titleKey)}
                  </h3>
                  <p className="leading-relaxed">{t(benefit.descriptionKey)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Why Invite Us Section */}
        <div className="bg-primary text-white p-12">
          <h3 className="text-4xl font-bold mb-12 text-center font-serif">
            {t("whyInvite.title")}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyInvitePoints.map((point, index) => (
              <div key={point.key} className="text-center">
                <div className="flex-shrink-0 w-16 h-16 bg-white text-primary flex items-center justify-center font-bold text-3xl font-serif mx-auto mb-6">
                  {index + 1}
                </div>
                <p className="text-lg leading-relaxed">{t(point.textKey)}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <BookWarriorButton size="2xl" className="mt-8 mx-auto" />
        </div>
      </div>
    </section>
  );
}
