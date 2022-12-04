import { Typography } from "components";
import { styled } from "stitches.config";

export const Label = styled("label", {
  padding: "0.5rem",
  fontSize: "0.75rem",
  cursor: "pointer",
});

export const Input = styled("input", {
  width: "100%",
  fontSize: "0.75rem",
  border: "none",
  padding: "0.5rem",
  "&:focus": {
    outline: "1px solid $primary",
  },
});
