import { cn } from "@/app/utils/cn";
import React from "react";

export function BentoGrid({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-3 gap-4", className)}>
      {children}
    </div>
  );
}
