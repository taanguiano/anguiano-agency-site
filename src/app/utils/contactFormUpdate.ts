import { GlobalState } from "little-state-machine";

export function updateContactForm(
  state: GlobalState,
  payload: {
    fullName: string;
    email: string;
    phone: string;
    companyName: string;
    projectDescription: string;
  }
) {
  return {
    ...state,
    yourDetails: {
      ...payload,
    },
  };
}
