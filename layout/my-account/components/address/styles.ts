import { styled } from "stitches.config";

export const Container = styled("section", {
  width: "100%",
  maxWidth: "25rem",
});

export const Form = styled("form", {
  width: "100%",
  border: "1px solid $highligh",
  padding: "1rem 0.5rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  gap: "2rem",
});

export const AnchorUnderline = styled("a", {
  background: "none",
  textDecoration: "underline",
  fontSize: "$caption2",
});
