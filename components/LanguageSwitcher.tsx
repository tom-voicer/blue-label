"use client";

import { usePathname, useRouter } from "@/i18n/routing";
import { useParams } from "next/navigation";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const currentLocale = params.locale as string;

  const handleLanguageChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className="flex items-center gap-2">
      <select
        value={currentLocale}
        onChange={(e) => handleLanguageChange(e.target.value)}
        className="px-3 py-1.5 rounded-md border border-input bg-background text-sm font-medium cursor-pointer hover:bg-accent hover:text-accent-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
      >
        <option value="en">English</option>
        <option value="he">עברית</option>
      </select>
    </div>
  );
}
