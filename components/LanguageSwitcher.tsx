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
    <div className="fixed top-4 right-4 z-50">
      <select
        value={currentLocale}
        onChange={(e) => handleLanguageChange(e.target.value)}
        className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 font-medium shadow-sm hover:shadow-md transition-shadow cursor-pointer"
      >
        <option value="en">English</option>
        <option value="he">עברית</option>
      </select>
    </div>
  );
}
