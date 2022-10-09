import { styled } from "stitches.config";

export const Container = styled("button", {
  width: "2.5625rem",
  borderColor: "$highlight",
  borderWidth: "1px",
  borderStyle: "solid",
  padding: "0.6rem 0",
  "&:hover": {
    borderColor: "$black",
  },

  "&:disabled": {
    color: "$highlight",
    borderColor: "$highlight",
    "&:hover": {
      borderColor: "$highlight",
      color: "$highlight",
    },
  },

  variants: {
    selected: {
      true: {
        borderColor: "transparent",
        background: "$primary",
        color: "#fff",
      },
    },
  },
});
