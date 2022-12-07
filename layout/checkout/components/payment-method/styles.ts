import { styled } from "stitches.config";

export const Container = styled("div", {
  border: "1px solid $highlight",
  padding: "1rem",
  width: "100%",

  minWidth: "20rem",
  "@laptops-min": {
    maxWidth: "25rem",
  },
});

export const Form = styled("form", {
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
});
