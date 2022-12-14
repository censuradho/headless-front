import { Typography } from "components";
import { styled } from "stitches.config";

export const Container = styled("div", {
  width: "100%",
  display: "flex",
  alignItems: "center",
  gap: "1rem",
  padding: "0.625rem 0.8125rem",
  borderBottom: "1px solid $highlight",
});

export const Name = styled(Typography, {
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  width: "100%",
  overflow: "hidden",
});

export const Price = styled("span", {
  fontSize: "$callout",
  color: "$body",
});

export const ImagePreviewContainer = styled("div", {
  width: "3.375rem",
  height: "4.5rem",
  position: "relative",
});

export const InfoView = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
  maxWidth: "12rem",
});
