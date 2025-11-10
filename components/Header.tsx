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
import { useTopScrolled } from "@/hooks/useTopScrolled";
import { cn, scrollToSection } from "@/lib/utils";

export default function Header() {
  const t = useTranslations("navigation");
  const tHero = useTranslations("hero");
  const tLogo = useTranslations("logo");
  const [open, setOpen] = useState(false);
  const isScrolled = useTopScrolled();

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
    scrollToSection(href);
  };

  const handleLogoClick = () => {
    setOpen(false);
    // Smooth scroll to top of page
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-colors duration-300",
        isScrolled && "bg-primary/85 backdrop-blur-sm"
      )}
    >
      <div className="container flex h-16 items-center justify-between px-4 md:px-8 mx-auto gap-8">
        {/* Logo */}
        <div
          className={cn(
            "flex items-center gap-2 transition-transform",
            !isScrolled && "scale-150 translate-y-1/3"
          )}
        >
          <button
            onClick={handleLogoClick}
            className="hover:opacity-80 transition-opacity"
            title={tHero("subtitle")}
          >
            <Image
              src={tLogo("flipped")}
              alt={tHero("title")}
              width={800}
              height={608}
              className="h-12 w-auto"
              priority
            />
          </button>
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
              className="text-sm font-medium transition-colors border-y-4 border-transparent py-2 hover:border-b-white"
            >
              {t(item.key)}
            </a>
          ))}
        </nav>

        {/* Right side - Language Switcher + Mobile Menu */}
        <div className="flex items-center gap-2">
          {/* Language Switcher - visible on all screen sizes */}
          <div className="hidden lg:block">
            <LanguageSwitcher className="text-white" />
          </div>

          {/* Mobile Menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="!size-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle>
                  <button
                    onClick={handleLogoClick}
                    className="hover:opacity-80 transition-opacity"
                    title={tHero("subtitle")}
                  >
                    <Image
                      src={tLogo("main")}
                      alt={tHero("title")}
                      width={800}
                      height={608}
                      className="h-12 w-auto"
                      priority
                    />
                  </button>
                </SheetTitle>
              </SheetHeader>
              <Separator className="my-4" />
              <nav className="flex flex-col gap-4 px-4">
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
