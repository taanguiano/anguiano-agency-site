import { useStateMachine } from "little-state-machine";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { updateContactForm } from "../utils/contactFormUpdate";

type FormValues = {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  projectDescription: string;
};

export const PersonalInfoForm = () => {
  const { register, handleSubmit } = useForm<FormValues>();
  const { state, actions } = useStateMachine({
    updateContactForm,
  });

  const onSubmit: SubmitHandler<FormValues> = (formData) => {
    actions.updateContactForm({ ...formData });
  };

  return (
    <div>
      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="input input-ghost bg-input mb-1"
          type="text"
          placeholder="Name"
          {...register("fullName")}
        />
        <input
          className="input input-ghost bg-input mb-1"
          type="text"
          placeholder="Email"
          {...register("email")}
        />
        <input
          className="input input-ghost bg-input mb-1"
          type="text"
          placeholder="Contact Number"
          {...register("phone")}
        />
        <input
          className="input input-ghost bg-input mb-1"
          type="text"
          placeholder="Company Name"
          {...register("companyName")}
        />
        <textarea
          className="textarea textarea-ghost bg-input mb-1"
          placeholder="Tell us a little about your business or project requirements"
          {...register("projectDescription")}
        />
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};
