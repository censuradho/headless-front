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

  variants: {
    selected: {
      true: {
        borderColor: "transparent",
        background: "$primary",
        color: "#fff",
      },
    },
    noSizes: {
      true: {
        borderColor: "$highlight",
        color: "$highlight",
        "&:hover": {
          color: "$highlight",
          borderColor: "$highlight",
        },
      },
    },
  },
});
