import React from "react";
import Marquee from "react-fast-marquee";

const Services = [
  "Custom Software Development",
  "Custom Mobile Development",
  "Custom Web Development",
  "UI / UX Design",
  "Search Engine Optimization",
  "AI Integration",
];

type ServicesBannerTextProps = {
  children: React.ReactNode;
};

export const ServicesBannerText = ({ children }: ServicesBannerTextProps) => {
  return (
    <span className="text-[72px] italic text-glass-background">{children}</span>
  );
};

export const ServicesBanner = () => {
  return (
    <section className="absolute bottom-0 w-[100vw] overflow-x-hidden">
      <Marquee className="w-full ">
        {Services.map((service, index) => {
          return (
            <ServicesBannerText
              key={index}
            >{` ${service} `}</ServicesBannerText>
          );
        })}
      </Marquee>
    </section>
  );
};
