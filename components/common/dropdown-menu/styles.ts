import { styled, keyframes } from "stitches.config";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

const slideUpAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateY(2px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
});

const slideRightAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateX(-2px)" },
  "100%": { opacity: 1, transform: "translateX(0)" },
});

const slideDownAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateY(-2px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
});

const slideLeftAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateX(2px)" },
  "100%": { opacity: 1, transform: "translateX(0)" },
});

export const {
  Portal,
} = DropdownMenu;

export const Root = styled(DropdownMenu.Root, {
  zIndex: 999,
  position: "relative",
});
export const Content = styled(DropdownMenu.Content, {
  minWidth: 220,
  backgroundColor: "tomato",
  borderRadius: 6,
  padding: 5,

  boxShadow:
    "0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)",
  animationDuration: "400ms",
  animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
  willChange: "transform, opacity",
  "&[data-state=\"open\"]": {
    "&[data-side=\"top\"]": { animationName: slideDownAndFade },
    "&[data-side=\"right\"]": { animationName: slideLeftAndFade },
    "&[data-side=\"bottom\"]": { animationName: slideUpAndFade },
    "&[data-side=\"left\"]": { animationName: slideRightAndFade },
  },
});

export const Arrow = styled(DropdownMenu.Arrow, { fill: "white" });

const itemStyles = {
  all: "unset",
  fontSize: 13,
  lineHeight: 1,
  color: "$title",
  borderRadius: 3,
  display: "flex",
  alignItems: "center",
  height: 25,
  padding: "0 5px",
  position: "relative",
  paddingLeft: 25,
  userSelect: "none",

  "&[data-disabled]": {
    color: "$highlight",
    pointerEvents: "none",
  },

  "&[data-highlighted]": {
    backgroundColor: "$highlight",
    color: "$primary",
  },
};

export const Item = styled(DropdownMenu.Item, itemStyles);
export const CheckboxItem = styled(DropdownMenu.CheckboxItem, itemStyles);
export const RadioItem = styled(DropdownMenu.RadioItem, itemStyles);
export const Trigger = styled(DropdownMenu.Trigger, {});

export const Label = styled(DropdownMenu.Label, {
  paddingLeft: 25,
  fontSize: 12,
  lineHeight: "25px",
  color: "$highlight",
});

export const Separator = styled(DropdownMenu.Separator, {
  height: 1,
  backgroundColor: "$primary",
  margin: 5,
});

export const Indicator = styled(DropdownMenu.ItemIndicator, {
  position: "absolute",
  left: 0,
  width: 25,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
});

export const Group = styled(DropdownMenu.Group, {});
