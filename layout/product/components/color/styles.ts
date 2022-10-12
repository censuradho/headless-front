import { styled } from "stitches.config";

export const Container = styled("div", {
  padding: "1rem",
  marginBottom: "1rem",
});

export const Item = styled("li", {
  width: "2rem",
  height: "2rem",
  borderRadius: "50%",
  overflow: "hidden",
  cursor: "pointer",

  variants: {
    selected: {
      true: {
        borderColor: "$foreground",
        borderWidth: "4px",
        borderStyle: "solid",
      },
      false: {
        borderColor: "transparent",
        borderWidth: "4px",
        borderStyle: "solid",
      },
    },
  },
});

export const List = styled("ul", {});
