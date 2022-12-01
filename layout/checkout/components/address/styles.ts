import { styled } from "stitches.config";

export const Container = styled("div", {
  border: "1px solid $highlight",
  padding: "1rem",
  width: "100%",

  "@laptops-min": {
    maxWidth: "25rem",
  },
});

export const Form = styled("form", {
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
});

export const AnchorUnderline = styled("a", {
  background: "none",
  textDecoration: "underline",
  fontSize: "$caption2",
});
