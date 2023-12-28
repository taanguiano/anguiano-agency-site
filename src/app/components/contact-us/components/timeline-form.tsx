import { Field } from "formik";
import React from "react";

export const TimelineForm = () => {
  return (
    <div>
      <Field
        className="input input-ghost bg-input mb-1"
        type="text"
        placeholder="startDate"
        name="startDate"
      />
      <Field
        className="input input-ghost bg-input mb-1"
        type="text"
        placeholder="endDate"
        name="endDate"
      />
    </div>
  );
};
