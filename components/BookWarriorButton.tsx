"use client";

import { Button } from "./ui/button";
import { MoveRight } from "lucide-react";
import { scrollToSection } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

interface BookWarriorButtonProps {
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | "flipped";
  size?:
    | "default"
    | "sm"
    | "lg"
    | "xl"
    | "2xl"
    | "icon"
    | "icon-sm"
    | "icon-lg"
    | "icon-xl"
    | "icon-2xl";
  className?: string;
}

export default function BookWarriorButton({
  variant = "default",
  size = "2xl",
  className,
}: BookWarriorButtonProps) {
  const t = useTranslations("hero");

  return (
    <Button
      onClick={() => scrollToSection("#schedule-meeting")}
      variant={variant}
      size={size}
      className={cn(className)}
    >
      {t("bookAWarrior")}
      <MoveRight className="!size-5 rtl:rotate-180" />
    </Button>
  );
}
