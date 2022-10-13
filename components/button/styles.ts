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
          color: "white",
        },
        padding: "1rem 3rem",

        "svg path": {
          fill: "White",
        },
        "&:hover": {
          background: "$primaryLight",
          "svg path": {
            fill: "$primary",
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
