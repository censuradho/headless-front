import { Typography } from "components";
import { styled } from "stitches.config";

export const Container = styled("div", {
  padding: "1.2rem",
});

export const Name = styled(Typography, {
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  width: "100%",
  overflow: "hidden",
  fontSize: "$caption1",
  textDecoration: "underline",
  fontWeight: 600,
  maxWidth: "7rem",

  "@smartphone-min": {
    maxWidth: "14rem",
  },
  "@table-min": {
    maxWidth: "unset",
  },
});

export const ImagePreviewView = styled("div", {
  width: "5rem",
  position: "relative",
});
