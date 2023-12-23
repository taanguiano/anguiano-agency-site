"use client";

import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface IFormInput {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  projectDescription: string;
}

export const Contact = () => {
  const { register, handleSubmit } = useForm<IFormInput>({
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      companyName: "",
      projectDescription: "",
    },
  });

  const onSubmit: SubmitHandler<IFormInput> = (formData) =>
    console.log(formData);

  return (
    <section className="h-[100vh]">
      <div className="w-full bg-glass backdrop-blur-glass rounded-xl shadow-glass p-5">
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
          <textarea
            className="textarea textarea-ghost bg-input mb-1"
            placeholder="Tell us a little about your business or project requirements"
            {...register("projectDescription")}
          />
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    </section>
  );
};
