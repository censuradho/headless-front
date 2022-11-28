import { styled } from "stitches.config";

export const Button = styled("button", {
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  transition: ".2s",
  justifyContent: "center",
  position: "relative",

  "&:disabled": {
    background: "$primaryDark",
  },
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
      "letter-underline": {
        background: "none",
        textDecoration: "underline",
      },
      primary: {
        background: "$primary",
        "> *": {
          color: "white !important",
        },
        padding: "1rem",

        "svg path": {
          fill: "White",
        },
        "&:hover": {
          background: "$primaryDark",
          "svg path": {
            fill: "white",
          },
        },
      },
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

export const LoaderContainer = styled("div", {
  position: "absolute",

  svg: {
    width: "36px",
  },
});
