"use client";

type MyButtonProps = {
  children: React.ReactNode;
};

export const MyButton = ({ children }: MyButtonProps) => {
  return <button className="border p-[5px] rounded-lg">{children}</button>;
};
