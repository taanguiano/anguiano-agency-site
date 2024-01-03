"use client";

import { ButtonHTMLAttributes } from "react";

type DundeeButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

export const DundeeButton = ({ children, ...props }: DundeeButtonProps) => {
  return (
    <button {...props} className="border p-[5px] rounded-lg">
      {children}
    </button>
  );
};
