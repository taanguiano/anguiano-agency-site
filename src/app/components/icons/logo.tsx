import React from "react";
import FullLogo from "../../../../public/anguianoAgencyLogo.png";
import Image from "next/image";

type LogoProps = {
  height?: number;
  width?: number;
};

export const Logo = ({ height, width }: LogoProps) => {
  return <Image height={height} width={width} src={FullLogo} alt="logo png" />;
};
