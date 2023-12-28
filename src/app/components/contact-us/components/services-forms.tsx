import { Field } from "formik";
import React from "react";

export const ServicesForm = () => {
  return (
    <div>
      <Field
        className="input input-ghost bg-input mb-1"
        type="text"
        placeholder="Name on card"
        name="nameOnCard"
      />
    </div>
  );
};
