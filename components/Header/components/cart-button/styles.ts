import { styled } from "stitches.config";

export const Count = styled("div", {
  fontSize: "100%",
  fontWeight: 600,
  width: "1.2rem",
  height: "1.2rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  bottom: "15%",
  right: "15%",
  color: "#fff",
  background: "$primary",
  borderRadius: "50%",
  position: "absolute",
});

export const Container = styled("button", {
  width: "3.375rem",
  height: "3.375rem",
  borderRadius: "50%",
  background: "$primaryLight",
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
});
