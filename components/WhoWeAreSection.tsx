import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

export default function WhoWeAreSection() {
  const t = useTranslations("whoWeAre");

  const items = [
    {
      key: "professionalTraining",
      titleKey: "items.professionalTraining.title",
      descriptionKey: "items.professionalTraining.description",
    },
    {
      key: "professionalTeam",
      titleKey: "items.professionalTeam.title",
      descriptionKey: "items.professionalTeam.description",
    },
    {
      key: "workshops",
      titleKey: "items.workshops.title",
      descriptionKey: "items.workshops.description",
    },
  ];

  return (
    <section
      id="who-we-are"
      className="py-28 px-4 bg-white text-primary font-light"
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row gap-12">
        {/* Start Texts */}
        <div className="sm:w-1/2">
          {/* Section Title */}
          <h2 className="text-5xl md:text-6xl font-bold mb-12 font-serif">
            {t("title")}
          </h2>
          {/* Main Description */}
          <div className="max-w-4xl mx-auto space-y-4">
            {t.raw("description").map((sentence: string, index: number) => (
              <p key={index} className="text-lg md:text-xl leading-relaxed">
                {sentence}
              </p>
            ))}
          </div>
        </div>

        {/* Items Grid */}
        <div className="flex flex-col sm:w-1/2">
          {items.map((item, index) => (
            <div key={item.key} className="flex">
              <div
                className={cn(
                  "py-8 border-b-8 border-primary",
                  index === 0 && "pt-0"
                )}
              >
                <h3 className="text-2xl font-semibold mb-4 font-serif font-serif-small">
                  {t(item.titleKey)}
                </h3>
                <p className="leading-relaxed">{t(item.descriptionKey)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
