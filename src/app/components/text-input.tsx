import classNames from "classnames";
import React from "react";

type TextInputProps = {
  className?: string;
};

export const TextInput = ({ className }: TextInputProps) => {
  return (
    <div>
      <input className={classNames("", className)} type="text" />
    </div>
  );
};
