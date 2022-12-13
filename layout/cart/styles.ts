import { styled } from "stitches.config";

export const Container = styled("div", {
  maxWidth: "80rem",
  width: "100%",
  margin: "0 auto",
});

export const ProductPreviewList = styled("ul", {
  width: "100%",
  li: {
    border: "1px solid $highlight",
    borderBottom: "unset",
  },

  "li:last-child": {
    borderBottom: "1px solid $highlight",
  },
  display: "flex",
  flexDirection: "column",
});

export const ResumeView = styled("section", {
  background: "$foreground",
  padding: "2rem 1.2rem",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  "@table-min": {
    width: "50%",
  },
});

export const Resume = styled("div", {
  background: "$background",
  width: "100%",
  padding: "1rem",
  marginTop: "2rem",
});

export const ResumeGoToCheckoutView = styled("div", {
  borderTop: "1px solid $highlight",
  marginTop: "2rem",
  padding: "1rem 0",
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
});

export const Wrapper = styled("div", {
  display: "flex",
  margin: "2rem 0",
  flexDirection: "column-reverse",
  gap: "2rem",
  alignItems: "flex-start",
  "@table-min": {
    flexDirection: "row",
  },
});
