import { styled } from "stitches.config";

export const Container = styled("div", {
  paddingBottom: "5rem",

  "@laptops-min": {
    marginTop: "3rem",
    paddingBottom: 0,
  },
});

export const Content = styled("div", {
  width: "100%",
  display: "flex",
  flexDirection: "column",

  "@laptops-min": {
    maxWidth: "1280px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "60% 1fr",
  },
});

export const ProductInfo = styled("div", {});

export const BuyButtons = styled("div", {
  width: "100%",
  display: "flex",
  justifyContent: "center",
  gap: "1rem",
  position: "fixed",
  bottom: 0,
  background: "$background",
  paddingTop: "2rem",
  "@laptops-min": {
    position: "relative",
  },
});
