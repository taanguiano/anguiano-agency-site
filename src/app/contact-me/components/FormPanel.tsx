import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { ErrorMessage } from "../page";

type FormPanelProps = {
  formIsSubmitting: boolean;
  formIsDirty: boolean;
  numberOfDirtyFields: number;
  numberOfDirtyFieldErrors: number;
  numberOfSubmissionErrors: number;
  errorMessages: ErrorMessage[];
  statusMessage: () => React.ReactNode;
  statusIcon: () => React.ReactNode;
  onSubmit: () => Promise<void>;
  onReset: () => void;
};

export const FormPanel = ({
  formIsDirty,
  formIsSubmitting,
  numberOfDirtyFields,
  numberOfDirtyFieldErrors,
  numberOfSubmissionErrors,
  errorMessages,
  onSubmit,
  statusIcon,
  statusMessage,
  onReset,
}: FormPanelProps) => {
  // State
  // Pre submission errors modal
  const [showPreSubErrorsModal, setShowPreSubErrorsModal] = useState(false);

  return (
    <div className="mt-4">
      {numberOfDirtyFieldErrors > 0 ? (
        <Typography className="text-red-400 text-2xl font-semibold">
          <span
            className="underline cursor-pointer"
            onClick={() => setShowPreSubErrorsModal(!showPreSubErrorsModal)}
          >
            {numberOfDirtyFieldErrors}
          </span>
          &nbsp;errors.
        </Typography>
      ) : numberOfDirtyFields > 0 ? (
        <Typography className="text-yellow-400 text-2xl font-semibold">
          {numberOfDirtyFields} changes
        </Typography>
      ) : (
        <Typography className="text-2xl font-semibold">No changes.</Typography>
      )}
      <div className="flex gap-4 mt-4">
        {statusIcon()} {statusMessage()}
      </div>
      <div className="w-full flex justify-center gap-10 mt-4">
        <Button
          variant="contained"
          color="secondary"
          disabled={formIsSubmitting}
          onClick={onReset}
          className="text-2xl"
        >
          Refresh
        </Button>
        <Button
          disabled={
            !formIsDirty ||
            numberOfDirtyFieldErrors > 0 ||
            formIsSubmitting ||
            numberOfSubmissionErrors > 0
          }
          color="info"
          variant="contained"
          className="text-2xl flex gap-2"
          onClick={onSubmit}
        >
          Send
        </Button>
      </div>
      {/* Dialog */}
      <Dialog
        open={showPreSubErrorsModal}
        onClose={() => setShowPreSubErrorsModal(false)}
      >
        <DialogTitle className="text-5xl font-semibold">
          Your changes have errors!
        </DialogTitle>
        <DialogContent>
          {errorMessages.map((errorMessage, index) => {
            return (
              <div key={index} className="[&:not(:last-child)]:mb-4 ">
                <Typography className="text-red-400 text-2xl">
                  Field:&nbsp;{errorMessage.field}
                </Typography>
                <Typography className="text-red-400 text-2xl">
                  Error:&nbsp;{errorMessage.error}
                </Typography>
              </div>
            );
          })}
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => setShowPreSubErrorsModal(false)}
            variant="contained"
            color="info"
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
