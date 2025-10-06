import { useTranslations } from "next-intl";
import Header from "@/components/Header";

export default function Home() {
  const t = useTranslations("hero");

  return (
    <>
      <Header />
      <section className="relative flex items-center justify-center min-h-screen px-4 py-20 bg-primary text-white overflow-hidden">
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
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight font-serif">
            {t("title")}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto">
            {t("subtitle")}
          </p>
        </div>
      </section>
    </>
  );
}
