import { styled } from "stitches.config";

export const Container = styled("div", {
  padding: "1rem",
  marginBottom: "1rem",
});

export const Item = styled("li", {
  width: "2.2rem",
  height: "2.2rem",
  borderRadius: "50%",
  overflow: "hidden",
  borderColor: "$foreground",
  borderWidth: "4px",
  borderStyle: "solid",
  cursor: "pointer",
});

export const List = styled("ul", {});
