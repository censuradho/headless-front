import { styled } from "stitches.config";

export const Container = styled("div", {
  border: "1px solid $highlight",
  padding: "1rem",
  width: "100%",
  height: "max-content",
  maxWidth: "25rem",
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

export const ProductPreviewList = styled("ul", {
  width: "100%",
  display: "flex",
  flexDirection: "column",
});

export const SummaryItem = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  borderBottom: "1px solid $highlight",
  alignItems: "center",
  padding: "0.5rem 0",
});
