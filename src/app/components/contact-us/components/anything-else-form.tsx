import { Field } from "formik";
import React from "react";

export const AnythingElseForm = () => {
  return (
    <div>
      <Field
        className="input input-ghost bg-input mb-1"
        type="text"
        placeholder="Description"
        name="description"
      />
    </div>
  );
};
