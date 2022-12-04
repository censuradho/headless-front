import { styled } from "stitches.config";

export const Container = styled("nav", {
  width: "100%",

});

export const Item = styled("li", {
  width: "100%",
  padding: "1rem 0",
  a: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    "&.active": {
      color: "$primary",
      fontWeight: 600,
    },
  },
  borderBottom: "1px solid $highlight",
});

export const List = styled("ul", {
  width: "100%",
});
