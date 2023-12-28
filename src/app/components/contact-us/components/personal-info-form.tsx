import { Field } from "formik";
import React from "react";

export const PersonalInfoForm = () => {
  return (
    <div>
      <Field
        className="input input-ghost bg-input mb-1"
        type="text"
        placeholder="Name"
        name="name"
      />
      <Field
        className="input input-ghost bg-input mb-1"
        type="text"
        placeholder="Email"
        name="email"
      />
      <Field
        className="input input-ghost bg-input mb-1"
        type="text"
        placeholder="Phone"
        name="phone"
      />
    </div>
  );
};
