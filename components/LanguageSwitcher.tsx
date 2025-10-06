"use client";

import { usePathname, useRouter } from "@/i18n/routing";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const currentLocale = params.locale as string;

  const handleLanguageToggle = () => {
    const newLocale = currentLocale === "en" ? "he" : "en";
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <Button
      variant="ghost"
      onClick={handleLanguageToggle}
      className="text-white"
    >
      {currentLocale === "en" ? "עברית" : "English"}
    </Button>
  );
}
