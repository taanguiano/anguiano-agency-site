import React from "react";
import smallMedSolLogoClear from "../../../../public/medSolLogoClear.svg";
import unoLogoClear from "../../../../public/unoLogoClear.svg";
import fusionLogoClear from "../../../../public/fusionLogoClear.svg";
import fiservLogoClear from "../../../../public/fiservLogoClear.svg";
import Image from "next/image";

export enum clientNames {
  UNO = "University of Nebraska At Omaha",
  Fiserv = "Fiserv",
  Fusion = "Fusion Medical Staffing",
  MedSol = "Medical Solutions",
  TheCrackCrew = "The Crack Crew Mobile",
  FusionMarketplace = "Fusion Marketplace",
}

export const clients = [
  {
    name: clientNames.UNO,
    img: unoLogoClear,
    imgHeight: 200,
    imgWidth: 200,
    href: "https://www.unomaha.edu/",
  },
  {
    name: clientNames.Fiserv,
    img: fiservLogoClear,
    imgHeight: 125,
    imgWidth: 125,
    href: "https://www.fiserv.com/",
  },
  {
    name: clientNames.Fusion,
    img: fusionLogoClear,
    imgHeight: 175,
    imgWidth: 175,
    href: "https://www.fusionmedstaff.com/",
  },
  {
    name: clientNames.MedSol,
    img: smallMedSolLogoClear,
    imgHeight: 300,
    imgWidth: 300,
    href: "https://www.medicalsolutions.com/",
  },
];

export const ClientLogos = () => {
  return (
    <div className="mt-[75px]">
      <div className="flex flex-col items-center">
        <p className="pb-10 text-3xl text-white text-opacity-40">Trusted by</p>
        <div className="flex flex-row">
          {clients.map((client, index) => {
            return (
              <div
                key={`${client.name}-${index}`}
                className="w-full px-4 mb-4 flex flex-col justify-end items-center"
              >
                <Image
                  className="hover: cursor-pointer"
                  onClick={() => window.open(client.href, "_blank")}
                  height={client.imgHeight}
                  width={client.imgWidth}
                  src={client.img}
                  alt={`${client.name}-logo`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
