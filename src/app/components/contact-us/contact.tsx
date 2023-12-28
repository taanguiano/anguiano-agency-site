"use client";

import React, { useState } from "react";
import { PersonalInfoForm } from "./components/personal-info-form";
import { ServicesForm } from "./components/services-forms";
import { BudgetForm } from "./components/budget-form";
import { TimelineForm } from "./components/timeline-form";
import { AnythingElseForm } from "./components/anything-else-form";
import { Form, Formik, FormikHelpers } from "formik";
import {
  ContactFormValues,
  contactFormInitialValues,
  sendWeb3Email,
  web3FormsLink,
  web3FormsPublicAccessKey,
} from "./utils/contact-us-utils";
import { ReviewContact } from "./components/review-contact";
import { ContactSuccess } from "./components/contact-success";

const steps = [
  "Personal Info",
  "Services",
  "Timeline",
  "Budget",
  "Anything Else",
  "Review",
];

export const Contact = () => {
  const [step, setStep] = useState(0);
  const isLastStep = step === steps.length - 1;

  const getCurrentPage = (step: number) => {
    switch (step) {
      case 0:
        return <PersonalInfoForm />;
      case 1:
        return <ServicesForm />;
      case 2:
        return <BudgetForm />;
      case 3:
        return <TimelineForm />;
      case 4:
        return <AnythingElseForm />;
      case 5:
        return <ReviewContact />;
      default:
        return <div>Not found</div>;
    }
  };

  const submitForm = (
    values: ContactFormValues,
    actions: FormikHelpers<ContactFormValues>
  ) => {
    sendWeb3Email(values);
    actions.setSubmitting(false);
    setStep(step + 1);
  };

  const handleSubmit = (
    values: ContactFormValues,
    actions: FormikHelpers<ContactFormValues>
  ) => {
    console.log(values);
    if (isLastStep) {
      submitForm(values, actions);
    } else {
      setStep(step + 1);
      actions.setSubmitting(false);
    }
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  return (
    <section className="h-[100vh] p-[var(--navigation-height)]" id="contact">
      <div className="w-full bg-glass backdrop-blur-glass rounded-xl shadow-glass p-5 flex justify-around gap-5">
        <div className="flex flex-col w-1/2">
          <>
            {step === steps.length ? (
              <ContactSuccess />
            ) : (
              <Formik
                onSubmit={(
                  values: ContactFormValues,
                  actions: FormikHelpers<ContactFormValues>
                ) => handleSubmit(values, actions)}
                initialValues={contactFormInitialValues}
              >
                {({ isSubmitting }) => (
                  <Form action={web3FormsLink} method="POST" id="contact-form">
                    {getCurrentPage(step)}
                    <div className="flex flex-row">
                      {step > 0 && (
                        <button
                          className="btn btn-primary w-fit"
                          onClick={() => handleBack()}
                          type="button"
                        >
                          Back
                        </button>
                      )}
                      <button
                        className="btn btn-primary w-fit"
                        disabled={isSubmitting}
                        type="submit"
                      >
                        {isLastStep ? "Submit" : "Next"}
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            )}
          </>
        </div>
      </div>
    </section>
  );
};
