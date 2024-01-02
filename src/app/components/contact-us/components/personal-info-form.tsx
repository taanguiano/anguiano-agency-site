import { Field } from "formik";
import React from "react";
import { RangeSlider } from "flowbite-react";
import {
  IconBrandApple,
  IconBrandHtml5,
  IconFilters,
  IconHammer,
  IconSeo,
  IconSparkles,
} from "@tabler/icons-react";

const services = [
  {
    title: "Custom Software",
    icon: <IconHammer />,
    fieldName: "needsCustomSoftware",
  },
  {
    title: "UI/UX Design",
    icon: <IconFilters />,
    fieldName: "needsUiUxDesign",
  },
  {
    title: "Web Development",
    icon: <IconBrandHtml5 />,
    fieldName: "needsWebDevelopment",
  },
  {
    title: "Mobile App Development",
    icon: <IconBrandApple />,
    fieldName: "needsMobileAppDevelopment",
  },
  {
    title: "SEO Consulting",
    icon: <IconSeo />,
    fieldName: "needsSeoConsulting",
  },
  {
    title: "AI Consulting",
    icon: <IconSparkles />,
    fieldName: "needsAiConsulting",
  },
];

export const PersonalInfoForm = () => {
  return (
    <div className="flex flex-col gap-6">
      <ul className="flex flex-wrap w-1/2 gap-3 mx-auto justify-center">
        {services.map((service, index) => {
          return (
            <>
              <li key={`${service.title}-${index}`}>
                <Field
                  name={service.fieldName}
                  type="checkbox"
                  id={`react-option-${service.title}-${index}`}
                  className="hidden peer"
                />
                <label
                  htmlFor={`react-option-${service.title}-${index}`}
                  className="inline-flex items-center justify-between w-fit px-3 py-1 border-2 rounded-full cursor-pointer hover:text-gray-300 border-gray-700 peer-checked:bg-gradient-to-r from-primary to-secondary peer-checked:text-gray-300 text-gray-400 bg-gray-800 hover:bg-gray-700"
                >
                  <div className="flex w-full flex-nowrap text-sm font-semibold gap-2 items-center">
                    {service.icon}
                    {service.title}
                  </div>
                </label>
              </li>
            </>
          );
        })}
      </ul>
      <Field
        className="text-sm rounded-lg focus:ring-primary focus:border-primary block w-1/2 p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white mx-auto"
        type="text"
        placeholder="Name"
        name="name"
      />
      <Field
        className="text-sm rounded-lg focus:ring-primary focus:border-primary block w-1/2 p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white mx-auto"
        type="text"
        placeholder="Email"
        name="email"
      />
      <Field
        className="text-sm rounded-lg focus:ring-primary focus:border-primary block w-1/2 p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white mx-auto"
        type="text"
        placeholder="Phone"
        name="phone"
      />
    </div>
  );
};
