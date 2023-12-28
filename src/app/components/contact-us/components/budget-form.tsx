import { Field } from "formik";
import React from "react";

export const BudgetForm = () => {
  return (
    <div>
      <Field
        className="input input-ghost bg-input mb-1"
        type="text"
        placeholder="Budget"
        name="budget"
      />
    </div>
  );
};
