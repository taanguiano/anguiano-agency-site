"use client";

import { StateMachineProvider, createStore } from "little-state-machine";
import React, { useState } from "react";
import { PersonalInfoForm } from "./personal-info-form";

createStore({
  yourDetails: {
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
    projectDescription: "",
  },
});

export const Contact = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const getCurrentStep = (step: number) => {
    switch (step) {
      case 1:
        return <PersonalInfoForm />;
      default:
        return null;
    }
  };

  return (
    <section className="h-[100vh] p-[var(--navigation-height)]" id="contact">
      <div className="w-full bg-glass backdrop-blur-glass rounded-xl shadow-glass p-5 flex justify-around gap-5">
        <div className="flex flex-col w-1/2">
          <StateMachineProvider>
            {getCurrentStep(currentStep)}
            <div className="flex flex-row">
              <button
                className="btn btn-primary w-fit"
                onClick={() => setCurrentStep(currentStep + 1)}
              >
                Back
              </button>

              <button
                className="btn btn-primary w-fit"
                onClick={() => setCurrentStep(currentStep - 1)}
              >
                Next
              </button>
            </div>
          </StateMachineProvider>
        </div>
      </div>
    </section>
  );
};
