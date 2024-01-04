"use client";

import React from "react";
import { PersonalInfoForm } from "./components/personal-info-form";
import { Form, Formik, FormikHelpers } from "formik";
import {
  ContactFormValues,
  contactFormInitialValues,
  sendWeb3Email,
  web3FormsLink,
} from "./utils/contact-us-utils";
import { ContactSuccess } from "./components/contact-success";
import { IconArrowRight, IconRefresh } from "@tabler/icons-react";
import { Container } from "../../global-components/container";
import { Card } from "@/app/global-components/card";

const steps = [
  "Personal Info",
  "Services",
  "Timeline",
  "Budget",
  "Anything Else",
  "Review",
];

export const Contact = () => {
  const submitForm = (
    values: ContactFormValues,
    actions: FormikHelpers<ContactFormValues>
  ) => {
    sendWeb3Email(values);
    actions.setSubmitting(false);
  };

  const handleSubmit = (
    values: ContactFormValues,
    actions: FormikHelpers<ContactFormValues>
  ) => {
    submitForm(values, actions);
    actions.setSubmitting(false);
  };

  return (
    <div id="contact" className="h-[100vh] pt-[var(--navigation-height)]">
      <Card className="bg-glass backdrop-blur-glass rounded-xl pt-1 pl-20 pr-20 flex flex-col justify-center border border-glass">
        <div className="flex flex-row pb-5">
          <div className="flex flex-col w-full p-5">
            <Formik
              onSubmit={(
                values: ContactFormValues,
                actions: FormikHelpers<ContactFormValues>
              ) => handleSubmit(values, actions)}
              initialValues={contactFormInitialValues}
            >
              {({ isSubmitting, resetForm }) => (
                <Form action={web3FormsLink} method="POST" id="contact-form">
                  <PersonalInfoForm />
                  <div className="flex flex-row justify-end gap-3">
                    <button
                      className="text-white bg-primary hover:opacity-80 font-medium rounded-lg text-sm px-5 py-2.5 w-fit"
                      disabled={isSubmitting}
                      type="submit"
                    >
                      <span className="flex flex-row justify-between items-center">
                        Submit
                      </span>
                    </button>
                  </div>
                  <button
                    type="reset"
                    className="text-white bg-neutral hover:opacity-80 font-medium rounded-lg text-sm px-5 py-2.5 absolute top-5 right-5"
                    onClick={() => resetForm()}
                  >
                    <IconRefresh />
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </Card>
    </div>
  );
};
