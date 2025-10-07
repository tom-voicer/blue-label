import { useTranslations } from "next-intl";
import { Button } from "./ui/button";
import { Calendar, Mail, Phone } from "lucide-react";

export default function ScheduleMeetingSection() {
  const t = useTranslations("scheduleMeeting");

  const contacts = [
    {
      key: "yael",
      nameKey: "contacts.yael.name",
      emailKey: "contacts.yael.email",
      phoneKey: "contacts.yael.phone",
    },
    {
      key: "noam",
      nameKey: "contacts.noam.name",
      emailKey: "contacts.noam.email",
      phoneKey: "contacts.noam.phone",
    },
  ];

  const practicalDetails = [
    { key: "duration", textKey: "practicalDetails.duration" },
    { key: "languages", textKey: "practicalDetails.languages" },
    { key: "costs", textKey: "practicalDetails.costs" },
  ];

  return (
    <section id="schedule-meeting" className="py-28 px-6 bg-primary text-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Title and Description */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 font-serif">
            {t("title")}
          </h2>
          <p className="text-xl leading-relaxed max-w-4xl mx-auto font-light">
            {t("description")}
          </p>
        </div>

        {/* Meeting Buttons */}
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-20">
          <Button
            size="2xl"
            variant="flipped"
            className="w-full md:w-auto min-w-80"
            asChild
          >
            <a
              href="https://calendly.com/bluelabelproject/east-time"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Calendar className="size-6" />
              {t("scheduleEastern")}
            </a>
          </Button>
          <Button
            size="2xl"
            variant="flipped"
            className="w-full md:w-auto min-w-80"
            asChild
          >
            <a
              href="https://calendly.com/bluelabelproject/israel-time"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Calendar className="size-6" />
              {t("scheduleIsrael")}
            </a>
          </Button>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {contacts.map((contact) => (
            <div key={contact.key} className="text-center">
              <h3 className="text-2xl font-semibold mb-4 font-serif">
                {t(contact.nameKey)}
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-center gap-3">
                  <Mail className="size-5" />
                  <a
                    href={`mailto:${t(contact.emailKey)}`}
                    className="hover:underline"
                  >
                    {t(contact.emailKey)}
                  </a>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Phone className="size-5" />
                  <a
                    href={`tel:${t(contact.phoneKey)}`}
                    className="hover:underline"
                  >
                    {t(contact.phoneKey)}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Practical Details */}
        <div className="text-center border-t border-white/20 pt-12">
          <h3 className="text-2xl font-semibold mb-6 font-serif">
            {t("practicalDetails.title")}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {practicalDetails.map((detail) => (
              <div key={detail.key} className="text-center">
                <p className="text-lg font-light opacity-90">
                  {t(detail.textKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
