import { styled } from "stitches.config";

export const Button = styled("button", {
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  transition: ".2s",
  justifyContent: "center",

  variants: {
    fullWidth: {
      true: {
        width: "100%",
      },
    },
    variant: {
      letter: {
        background: "none",
      },
      primary: {
        background: "$primary",
        color: "white",
        padding: "1rem 3rem",

        "&:hover": {
          background: "$primaryLight",
        },
      },
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});
