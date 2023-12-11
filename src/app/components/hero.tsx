import React from "react";

type HeroProps = {
  children: React.ReactNode;
};

type HeroChildProps = {
  children: React.ReactNode;
};

export const HeroTitle = ({ children }: HeroChildProps) => {
  return <h1 className="text-5xl my-5">{children}</h1>;
};

export const HeroSubtitle = ({ children }: HeroChildProps) => {
  return <p className="text-lg mb-8">{children}</p>;
};

export const Hero = ({ children }: HeroProps) => {
  return (
    <div className="text-center h-[100vh]">
      {children}
      <button className="border p-[5px] rounded-lg">
        Startup Your Consultation
      </button>
    </div>
  );
};
