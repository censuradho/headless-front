import { Typography } from "components";
import { styled } from "stitches.config";

export const Container = styled("div", {
  padding: "1rem",
  marginBottom: "1rem",
});

export const Form = styled("form", {
  display: "flex",
  width: "100%",
});

export const Link = styled(Typography, {
  textDecoration: "underline",
  paddingTop: "0.5rem",
  display: "block",
});
