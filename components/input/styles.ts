import { Typography } from "components/typography";
import { styled } from "stitches.config";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",

  variants: {
    fullWidth: {
      true: {
        width: "100%",
      },
    },
  },
});

export const Input = styled("input", {
  borderColor: "$highlight",
  borderWidth: "1px",
  borderStyle: "solid",
  height: "3rem",
  outline: "none",
  padding: "0 1rem",
  "&::placeholder": {
    color: "$highlight",
    fontSize: "0.8rem",
    fontWeight: 400,
  },

  "&:focus": {
    borderColor: "$primary",
  },

  variants: {
    hasError: {
      true: {
        borderColor: "$error",
        color: "$error",
      },
    },
  },
});

export const Label = styled(Typography, {
  cursor: "pointer",

  variants: {
    hasError: {
      true: {
        color: "$error",
      },
    },
  },
});

export const ErrorMessage = styled(Typography, {
  color: "$error",
});
