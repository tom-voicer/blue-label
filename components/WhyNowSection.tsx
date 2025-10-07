import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

export default function WhyNowSection() {
  const t = useTranslations("whyNow");

  const reasons = [
    {
      key: "increaseInWoundedVeterans",
      titleKey: "reasons.increaseInWoundedVeterans.title",
      descriptionKey: "reasons.increaseInWoundedVeterans.description",
    },
    {
      key: "strengtheningIdentity",
      titleKey: "reasons.strengtheningIdentity.title",
      descriptionKey: "reasons.strengtheningIdentity.description",
    },
    {
      key: "healingThroughPurpose",
      titleKey: "reasons.healingThroughPurpose.title",
      descriptionKey: "reasons.healingThroughPurpose.description",
    },
    {
      key: "highDemand",
      titleKey: "reasons.highDemand.title",
      descriptionKey: "reasons.highDemand.description",
    },
  ];

  return (
    <section
      className="py-28 px-4 text-primary font-light"
      style={{
        backgroundImage: "url('/whyNow_bg.png')",
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

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {reasons.map((reason, index) => (
            <div
              key={reason.key}
              className={cn(
                "bg-white p-8 border-b-8 border-primary",
                "transition-all duration-300"
              )}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-white flex items-center justify-center font-bold text-3xl font-serif">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-4 font-serif">
                    {t(reason.titleKey)}
                  </h3>
                  <p className="leading-relaxed">{t(reason.descriptionKey)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
