import { Typography } from "components";
import { styled } from "stitches.config";

export const Container = styled("div", {
  padding: "1rem",
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
});

export const SizeItem = styled("li", {});

export const SizeList = styled("ul", {
  width: "100%",
  display: "flex",
  gap: "1.25rem",
  flexWrap: "wrap",
});

export const ErrorMessage = styled(Typography, {
  color: "$error",
});
