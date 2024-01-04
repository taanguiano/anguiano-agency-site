import classNames from "classnames";
import React from "react";

export type CardProps = {
  className?: string;
  children: React.ReactNode;
};

export const Card = ({ className, children }: CardProps) => {
  return (
    <div
      className={classNames(
        "bg-glass backdrop-blur-glass rounded-xl pt-1 pl-20 pr-20 flex flex-col justify-center border border-glass",
        className
      )}
    >
      {children}
    </div>
  );
};
