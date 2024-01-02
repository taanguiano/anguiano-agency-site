export const web3FormsLink = "https://api.web3forms.com/submit";
export const web3FormsPublicAccessKey = "a2b5bb65-3725-4032-b0b1-c8a4496889ae";

export const contactFormInitialValues: ContactFormValues = {
  name: "",
  email: "",
  phone: "",
  needsCustomSoftware: false,
  needsUiUxDesign: false,
  needsWebDevelopment: false,
  needsMobileAppDevelopment: false,
  needsSeoConsulting: false,
  needsAiConsulting: false,
  startDate: "",
  endDate: "",
  budget: "",
  description: "",
};

export type ContactFormValues = {
  name: string;
  email: string;
  phone: string;
  needsCustomSoftware: boolean;
  needsUiUxDesign: boolean;
  needsWebDevelopment: boolean;
  needsMobileAppDevelopment: boolean;
  needsSeoConsulting: boolean;
  needsAiConsulting: boolean;
  startDate: string;
  endDate: string;
  budget: string;
  description: string;
};

export type ContactFormField = {
  name: string;
  label: string;
  requiredErrorMsg: string;
};

export const sendWeb3Email = async (contactFormValues: ContactFormValues) => {
  let formData = new FormData();
  Object.entries(contactFormValues).forEach((formValue) => {
    console.log(formValue);
    formData.append(formValue[0], formValue[1].toString());
  });
  formData.append("access_key", web3FormsPublicAccessKey);
  formData.append("from_name", "Dundee Development");
  formData.append("subject", "You have a new lead!");

  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData,
  }).then((res) => res.json());
};
