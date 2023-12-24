import "little-state-machine";

declare module "little-state-machine" {
  interface GlobalState {
    yourDetails: {
      fullName: string;
      email: string;
      phone: string;
      companyName: string;
      projectDescription: string;
    };
  }
}
