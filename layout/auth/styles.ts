import { styled } from "stitches.config";

export const Main = styled("main", {
  height: "100vh",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const Container = styled("div", {
  width: "100%",
  display: "flex",
  alignItems: "center",
  maxWidth: "74.0625rem",
  margin: "3rem auto",
});

export const FormView = styled("section", {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  height: "max-content",
  padding: "1.25rem",

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

  "@table-max": {
    display: "none",
  },
});

export const HorizontalLine = styled("div", {
  height: "1px",
  width: "100%",
  background: "$foreground",

  margin: "2rem 0",
});
