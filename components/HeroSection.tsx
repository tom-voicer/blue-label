import { useTranslations } from "next-intl";
import HeroButton from "./HeroButton";

export default function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section
      id="hero"
      className="relative flex items-center justify-center min-h-screen px-6 py-20 bg-primary text-white overflow-hidden"
    >
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none"
        src="/hero_video.mp4"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      />
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
        <div className="text-3xl sm:text-4xl md:text-5xl font-light sans-heading">
          {t("heading")}
        </div>
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight font-serif border-b-8 border-white pb-6">
          {t("title")}
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto font-light">
          {t("subtitle")}
        </p>
        <HeroButton />
      </div>
    </section>
  );
}
