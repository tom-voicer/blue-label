import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="bg-gray-100 py-8 px-4 text-center">
      <p className="text-gray-600 text-sm">
        {t("copyright")}
      </p>
    </footer>
  );
}
