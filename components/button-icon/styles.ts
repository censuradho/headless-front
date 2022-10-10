import { styled } from "stitches.config";

export const Button = styled("button", {
  borderRadius: "50%",
  padding: "0.3rem",
  width: "max-content",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  outline: "none",

  variants: {
    isRipple: {
      true: {
        background: "$foreground",
      },
      false: {
        background: "none",

      },
    },
  },
});
