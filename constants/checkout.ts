import { paths } from "./routes";

export const checkoutStepsQuery = {
  profile: "profile",
  address: "address",
  payment: "payment",
};

export const checkoutStepsPaths: Record<
  keyof typeof checkoutStepsQuery,
  string
> = {
  address: `${paths.checkout}?q=${checkoutStepsQuery.address}`,
  profile: `${paths.checkout}?q=${checkoutStepsQuery.profile}`,
  payment: `${paths.checkout}?q=${checkoutStepsQuery.payment}`,
};
