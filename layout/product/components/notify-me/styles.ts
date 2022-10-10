import { Typography } from "components";
import { styled } from "stitches.config";

export const Container = styled("div", {
  margin: "1rem 0",
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
});

export const Form = styled("form", {});

export const SuccessTitle = styled(Typography, {
  color: "$green",
});
