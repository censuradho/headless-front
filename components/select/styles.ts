import * as Select from "@radix-ui/react-select";

import { styled } from "stitches.config";

export const Root = styled(Select.Root, {
  button: {
    all: "unset",
  },
  width: "100%",
});

export const Label = styled("label", {
  cursor: "pointer",
  fontSize: "$footnote",
});

export const Content = styled(Select.Content, {
  overflow: "hidden",
  backgroundColor: "$background",
  borderRadius: "6px",
  boxShadow: "0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)",
});

export const Trigger = styled(Select.Trigger, {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 15px",
  fonSize: "13px",
  height: "3rem",
  lineHeight: 1,
  gap: "5px",
  backgroundColor: "$background",
  border: "1px solid $highlight",
  outline: "none",

  "&:focus": {
    borderColor: "$primary",
  },

  "&[data-placeholder]": {
    color: "$body",
  },

  variants: {
    fullWidth: {
      true: {
        width: "100%",
      },
    },
  },

});

export const Portal = styled(Select.Portal, {
  zIndex: 11,
});

export const Viewport = styled(Select.Viewport, {
  padding: "5px",
});

export const Value = styled(Select.Value, {});

export const Group = styled(Select.Group, {});

export const Item = styled(Select.Item, {
  fontSize: "13px",
  lineHeight: 1,
  color: "$title",
  borderRadius: "3px",
  display: "flex",
  alignItems: "center",
  height: "25px",
  padding: "1rem 35px 1rem 25px",
  position: "relative",
  userSelect: "none",

  "&[data-disabled]": {
    color: "$mauve3",
    pointerEvents: "none",
  },

  "&[data-highlighted]": {
    outline: "none",
    backgroundColor: "$mauve3",
  },
});

export const ItemText = styled(Select.ItemText, {});

export const ItemIndicator = styled(Select.ItemIndicator, {});
