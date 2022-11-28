import { styled, keyframes } from "stitches.config";
import * as Dialog from "@radix-ui/react-dialog";

const overlayShow = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 1 },
});

const contentShow = keyframes({
  "0%": { transform: "translateX(100%)" },
  "100%": { transform: "translateX(0)" },
});

export const Overlay = styled(Dialog.Overlay, {
  background: "$overlay",
  backdropFilter: "blur(3px)",
  position: "fixed",
  top: 0,
  inset: 0,
  left: 0,
  animation: `${overlayShow} 0.15s cubic-bezier(0.16, 1, 0.3, 1)`,
  zIndex: 10,
});

export const Content = styled(Dialog.Content, {
  backgroundColor: "$background",
  boxShadow: "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
  position: "fixed",
  width: "100vw",
  maxWidth: "23rem",
  top: 0,
  right: 0,
  height: "100vh",
  animation: `${contentShow} 0.15s cubic-bezier(0.16, 1, 0.3, 1)`,
  "&:focus": { outline: "none" },
  zIndex: 10,
  display: "flex",
  flexDirection: "column",
});

export const Portal = styled(Dialog.Portal, {
});

export const Header = styled("div", {
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1rem",
  border: "1px solid $highlight",
});

export const ScrollView = styled("div", {
  flex: 1,
  overflow: "auto",
});

export const SubtotalContainer = styled("div", {
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  borderBottom: "1px solid $highlight",
  padding: "1rem",
});

export const SubmitContainer = styled("div", {
  width: "100%",
  display: "flex",
  gap: "1rem",
  padding: "1rem",
});

export const {
  Root,
  Close,
} = Dialog;
