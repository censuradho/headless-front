import { styled } from "stitches.config";

export const Container = styled("div", {
  width: "100%",
  maxWidth: "74.0625rem",
  margin: "3rem auto",
});

export const FormView = styled("section", {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  height: "max-content",

  "@table-min": {
    flexDirection: "row",
    alignItems: "flex-start",
  },
});

export const VerticalLine = styled("div", {
  height: "100%",
  width: "1px",
  background: "$foreground",
  minHeight: "22.8125rem",
  margin: "0 7.65vw",
});
