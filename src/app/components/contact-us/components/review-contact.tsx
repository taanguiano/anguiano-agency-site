import { useFormikContext } from "formik";
import React from "react";
import { ContactFormValues } from "../utils/contact-us-utils";

export const ReviewContact = () => {
  const { values } = useFormikContext<ContactFormValues>();
  return (
    <div>
      {values.name}
      {values.email}
      {values.phone}
      {values.nameOnCard}
      {values.startDate}
      {values.endDate}
      {values.budget}
      {values.description}
    </div>
  );
};
