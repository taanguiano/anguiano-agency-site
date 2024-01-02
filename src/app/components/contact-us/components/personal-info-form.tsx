import { Field } from "formik";
import React from "react";
import { RangeSlider } from "flowbite-react";
import {
  IconAdjustmentsCode,
  IconBrandApple,
  IconBrandHtml5,
  IconFilters,
  IconMail,
  IconPhone,
  IconSeo,
  IconSparkles,
  IconUser,
  IconWriting,
} from "@tabler/icons-react";

const services = [
  {
    title: "Custom Software",
    icon: <IconAdjustmentsCode />,
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
      <div className="flex flex-row justify-center">
        <div className="w-fit py-5 flex flex-col gap-1 items-center">
          <h1 className="text-[25px] font-semibold text-info">
            {`Curious? Drop us a line, and we'll fill you in on what we can do.`}{" "}
          </h1>
          <p className="text-sm">{`What services are you looking for?`}</p>
        </div>
      </div>
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
      <div className="flex w-1/2 mx-auto">
        <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
          <IconUser size={15} />
        </span>
        <Field
          type="text"
          id="name-input"
          className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-primary focus:border-primary block flex-1 min-w-0 w-1/2 text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
          placeholder="Name"
          name="name"
          required
        />
      </div>
      <div className="flex w-1/2 mx-auto">
        <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
          <IconMail size={15} />
        </span>
        <Field
          type="text"
          id="email-input"
          className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-primary focus:border-primary block flex-1 min-w-0 w-1/2 text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
          placeholder="Email"
          name="email"
          required
        />
      </div>
      <div className="flex w-1/2 mx-auto">
        <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
          <IconPhone size={15} />
        </span>
        <Field
          type="text"
          id="phone-input"
          className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-primary focus:border-primary block flex-1 min-w-0 w-1/2 text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
          placeholder="Phone"
          name="phone"
          required
        />
      </div>
      <div className="flex w-1/2 mx-auto">
        <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
          <IconWriting size={15} />
        </span>
        <Field
          as="textarea"
          id="desc-input"
          className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-primary focus:border-primary block flex-1 min-w-0 w-1/2 text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
          placeholder="Project Description"
          name="projectDescription"
          rows={8}
          required
        />
      </div>
    </div>
  );
};
