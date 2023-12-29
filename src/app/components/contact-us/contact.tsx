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
import classnames from "classnames";
import { IconRefresh } from "@tabler/icons-react";
import { ContactStepper } from "./components/contact-stepper";

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

  const handleReset = (resetForm: () => void) => {
    resetForm();
    setStep(0);
  };

  const getStepperClasses = (stepIndex: number) => {
    return classnames("step", { "step-primary": stepIndex === step });
  };

  return (
    <section className="h-[100vh] p-[var(--navigation-height)]" id="contact">
      <div className="ml-auto mr-auto bg-glass backdrop-blur-glass rounded-xl pt-1 pl-20 pr-20 flex flex-col justify-center border border-glass">
        <div className="pt-5 pb-5 flex flex-col gap-3">
          <h1 className="text-[25px] font-semibold text-info">
            {`Curious? Drop us a line, and we'll fill you in on what we can do.`}
          </h1>
          <p className="text-sm">{`Kindly provide your details following the steps below.`}</p>
        </div>
        <div className="flex flex-row border-t border-t-glass pb-5">
          <div className="flex flex-col w-1/4 border-r border-r-glass pt-5 pb-5 pr-5 text-info">
            <ContactStepper />
          </div>
          <div className="flex flex-col w-3/4 p-5">
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
                {({ isSubmitting, resetForm }) => (
                  <Form action={web3FormsLink} method="POST" id="contact-form">
                    {getCurrentPage(step)}
                    <div className="flex flex-row">
                      {step > 0 && (
                        <button
                          type="button"
                          onClick={() => handleBack()}
                          className="text-white bg-primary hover:opacity-80 font-medium rounded-lg text-sm px-5 py-2.5"
                        >
                          Back
                        </button>
                      )}
                      <button
                        className="text-white bg-primary hover:opacity-80 font-medium rounded-lg text-sm px-5 py-2.5"
                        disabled={isSubmitting}
                        type="submit"
                      >
                        {isLastStep ? "Submit" : "Next"}
                      </button>
                      <button
                        type="reset"
                        className="text-white bg-neutral hover:opacity-80 font-medium rounded-lg text-sm px-5 py-2.5 absolute top-5 right-5"
                        onClick={() => handleReset(resetForm)}
                      >
                        <IconRefresh />
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
