import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Inter, DM_Serif_Display, Assistant } from "next/font/google";
import "../globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: ["400"],
});

const assistant = Assistant({
  variable: "--font-dm-serif", // Use the same variable name for consistent font-serif class
  subsets: ["latin", "hebrew"],
  weight: ["400", "500", "600", "700"],
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages({ locale });

  const title = messages.hero?.title || "The Blue Label Project";
  const description =
    messages.hero?.subtitle ||
    "Bringing audiences face-to-face with wounded combat veterans who share their personal journey of injury, recovery, and renewal";

  return {
    title,
    description,
    metadataBase: new URL(
      process.env.NEXT_PUBLIC_SITE_URL || "https://bluelabelproject.com"
    ),
    keywords: [
      "Blue Label Project",
      "wounded veterans",
      "combat veterans",
      "storytelling",
      "inspirational speakers",
      "veteran stories",
      "resilience",
      "recovery",
      "healing through purpose",
      "Israel veterans",
      locale === "he" ? "פרויקט בלו לייבל" : null,
      locale === "he" ? "חיילים פצועים" : null,
      locale === "he" ? "לוחמי קרב" : null,
    ].filter(Boolean),
    authors: [{ name: "Yael Man Shahar" }, { name: "Noam Friedman" }],
    creator: "The Blue Label Project",
    publisher: "The Blue Label Project",
    alternates: {
      languages: {
        en: "/en",
        he: "/he",
      },
    },
    icons: {
      icon: [
        { url: "/logo.svg", type: "image/svg+xml" },
        { url: "/logo.svg", type: "image/svg+xml", sizes: "32x32" },
        { url: "/logo.svg", type: "image/svg+xml", sizes: "16x16" },
      ],
      shortcut: "/logo.svg",
      apple: "/logo.svg",
    },
    manifest: "/site.webmanifest",
    openGraph: {
      type: "website",
      locale: locale,
      alternateLocale: locale === "en" ? "he" : "en",
      url: locale === "en" ? "/en" : "/he",
      siteName: title,
      title,
      description,
      images: [
        {
          url: "/logo.svg",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/logo.svg"],
      creator: "@bluelabelproject",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      google: process.env.GOOGLE_SITE_VERIFICATION,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as "he" | "en")) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  // Use Assistant font for Hebrew, DM_Serif_Display for English
  const serifFont = locale === "he" ? assistant : dmSerifDisplay;

  return (
    <html lang={locale} dir={locale === "he" ? "rtl" : "ltr"}>
      <body className={`${inter.variable} ${serifFont.variable} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
