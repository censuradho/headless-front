import { styled } from "stitches.config";

export const Container = styled("div", {
  width: "100%",
});

export const ImageContainer = styled("div", {
  width: "100%",
});

export const Dot = styled("button", {
  width: "0.8rem",
  height: "0.8rem",
  borderRadius: "50%",
  background: "$primaryLight",

  variants: {
    active: {
      true: {
        background: "$primary",
        transform: "scale(1.3)",
      },
    },
  },

  transition: ".2s",
});

export const DotContainer = styled("ul", {
  marginTop: "1rem",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  gap: "0.9rem",
  alignItems: "center",
});
