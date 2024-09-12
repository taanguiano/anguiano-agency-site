"use client";

import React, { useState } from "react";
import { Container } from "../global-components/container";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import ContactMeSchema, { ContactMeType } from "./utils/contact-me.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormPanel } from "./components/FormPanel";
import { mockSubmit } from "./utils/contact-me.mock.api";
import {
  CheckCircle as CheckCircleIcon,
  Error as ErrorIcon,
} from "@mui/icons-material";
import {
  Button,
  CircularProgress,
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";

export type ErrorMessage = {
  field: string;
  error: string;
};

const ContactMePage = () => {
  // State
  const [submitting, setSubmitting] = useState(false);
  // Post-submission errors modal
  const [showPostSubErrorsModal, setShowPostSubErrorsModal] = useState(false);

  // RHF
  const methods = useForm<ContactMeType>({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    },
    resolver: zodResolver(ContactMeSchema),
  });

  const {
    handleSubmit,
    register,
    reset,
    setError,
    formState: {
      isDirty,
      dirtyFields,
      errors,
      isSubmitting,
      isSubmitSuccessful,
      isSubmitted,
    },
  } = methods;

  // Callbacks
  const onSubmit: SubmitHandler<ContactMeType> = async () => {
    setSubmitting(true);
    try {
      await mockSubmit();
    } catch (e) {
      console.error(e);
      // Throwing runtime error here to negate isSubmitSuccessful
      throw Error("Failed to save.");
    } finally {
      setSubmitting(false);
      reset();
    }
  };

  const getStatusIcon = (): React.ReactNode => {
    if (isSubmitting) {
      return <CircularProgress size={40} />;
    }
    if (isSubmitSuccessful) {
      return <CheckCircleIcon />;
    }
    return null;
  };

  const getStatusMessage = (): React.ReactNode => {
    if (isSubmitting) {
      return <Typography className="text-white">Submitting...</Typography>;
    }
    if (isSubmitSuccessful) {
      return <Typography className="text-white">Success</Typography>;
    }
    if (isSubmitted && !isSubmitSuccessful) {
      return (
        <Button
          className="text-2xl flex gap-4"
          color="error"
          variant="contained"
          onClick={() => setShowPostSubErrorsModal(true)}
        >
          <ErrorIcon />
          Error: failed to save...
        </Button>
      );
    }
    return null;
  };

  const dirtyFieldErrors = Object.keys(errors).filter((fieldWithError) =>
    Object.keys(dirtyFields).includes(fieldWithError)
  );

  const dirtyFieldErrorMessages = dirtyFieldErrors.map((fieldWithError) => ({
    field: fieldWithError,
    error: errors[fieldWithError as keyof ContactMeType]?.message as string,
  }));

  return (
    <>
      <Container className="my-80">
        <h1 className="text-6xl w-full text-center pb-6">Contact Me</h1>
        <div className="w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 bg-secondary">
          <FormProvider {...methods}>
            <form
              className="my-8"
              onSubmit={handleSubmit(onSubmit)}
              autoComplete="off"
            >
              <div className="flex flex-col md:flex-row gap-8 mb-4">
                <div className="flex flex-col w-full">
                  <label htmlFor="firstName">First name</label>
                  <input
                    id="firstName"
                    type="text"
                    placeholder="First Name"
                    className="text-black rounded-xl text-3xl"
                    {...register("firstName")}
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label htmlFor="lastName">Last name</label>
                  <input
                    id="lastName"
                    type="text"
                    placeholder="Last Name"
                    className="text-black rounded-xl text-3xl"
                    {...register("lastName")}
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex flex-col w-full mb-4">
                  <label htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    type="text"
                    placeholder="Email"
                    className="text-black rounded-xl text-3xl"
                    {...register("email")}
                  />
                </div>
                <div className="flex flex-col w-full mb-4">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    id="phone"
                    type="text"
                    placeholder="Phone"
                    className="text-black rounded-xl text-3xl"
                    {...register("phone")}
                  />
                </div>
              </div>
              <FormPanel
                formIsDirty={isDirty}
                formIsSubmitting={submitting}
                numberOfDirtyFields={Object.keys(dirtyFields).length}
                numberOfDirtyFieldErrors={dirtyFieldErrors.length}
                errorMessages={dirtyFieldErrorMessages}
                onSubmit={handleSubmit(onSubmit)}
                statusIcon={getStatusIcon}
                statusMessage={getStatusMessage}
              />
            </form>
          </FormProvider>
        </div>
      </Container>
      <Dialog
        open={showPostSubErrorsModal}
        onClose={() => setShowPostSubErrorsModal(false)}
      >
        <DialogTitle>Your submission failed!</DialogTitle>
        <DialogContent></DialogContent>
      </Dialog>
    </>
  );
};

export default ContactMePage;
