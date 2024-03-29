import { cn } from "@/lib/utils";
import { twMerge } from "tailwind-merge";

type HeadingH1Props = {
  children: React.ReactNode;
  className: string;
};

export function HeadingH1({ children, className }: HeadingH1Props) {
  return (
    <h1
      className={cn(
        "text-3xl lg:text-6xl font-bold tracking-tight",
        className
      )}
    >
      {children}
    </h1>
  );
}
