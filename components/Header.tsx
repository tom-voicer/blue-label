"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Menu } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Header() {
  const t = useTranslations("navigation");
  const tHero = useTranslations("hero");
  const [open, setOpen] = useState(false);

  const menuItems = [
    { key: "whoWeAre", href: "#who-we-are" },
    { key: "whyNow", href: "#why-now" },
    { key: "whatYouGain", href: "#what-you-gain" },
    { key: "ourTeam", href: "#our-team" },
    { key: "ourSpeakers", href: "#our-speakers" },
    { key: "scheduleMeeting", href: "#schedule-meeting" },
  ];

  const handleMenuClick = (href: string) => {
    setOpen(false);
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 z-50 w-full">
      <div className="container flex h-16 items-center justify-between px-4 md:px-8 mx-auto gap-8">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleMenuClick("#hero");
            }}
            className="hover:opacity-80 transition-opacity"
            title={tHero("subtitle")}
          >
            <Image
              src="/logo-flipped.svg"
              alt={tHero("title")}
              width={800}
              height={608}
              className="h-12 w-auto"
              priority
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 text-white">
          {menuItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleMenuClick(item.href);
              }}
              className="text-sm font-medium transition-colors hover:underline"
            >
              {t(item.key)}
            </a>
          ))}
        </nav>

        {/* Right side - Language Switcher + Mobile Menu */}
        <div className="flex items-center gap-2">
          {/* Language Switcher - visible on all screen sizes */}
          <div className="hidden lg:block">
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle>{tHero("title")}</SheetTitle>
              </SheetHeader>
              <Separator className="my-4" />
              <nav className="flex flex-col gap-4">
                {menuItems.map((item) => (
                  <a
                    key={item.key}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleMenuClick(item.href);
                    }}
                    className="text-lg font-medium transition-colors hover:text-primary py-2"
                  >
                    {t(item.key)}
                  </a>
                ))}
                <Separator className="my-2" />
                <div className="py-2">
                  <LanguageSwitcher />
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
