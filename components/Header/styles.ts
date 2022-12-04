import { styled } from "stitches.config";
import { ButtonIcon as CommonButtonIcon } from "components";

export const Container = styled("header", {
  width: "100%",
  height: "5rem",
  background: "$background",
  border: "1px solid $foreground",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "sticky",
  top: 0,
  zIndex: 5,

  "@laptops-min": {
    flexDirection: "column",
    height: "auto",
    padding: "1.25rem 3rem 1.25rem 3rem",
  },
});

export const ButtonIcon = styled(CommonButtonIcon);

export const TopBar = styled("div", {
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0.625rem",
  background: "$background",
  "@laptops-min": {
    zIndex: 2,
  },
});
