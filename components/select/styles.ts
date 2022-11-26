import * as Select from "@radix-ui/react-select";
import { styled } from "stitches.config";

export const Root = styled(Select.Root, {
  button: {
    all: "unset",
  },
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
  justifyContent: "center",
  borderRadius: "4px",
  padding: "0 15px",
  fonSize: "13px",
  lineHeight: 1,
  height: "35px",
  gap: "5px",
  backgroundColor: "white",
  color: "blue",
  boxShadow: "0 2px 10px $blackA7",

  "&:hover": {
    backgroundColor: "$mauve3",
  },

  "&:focus": {
    boxShadow: "0 0 0 2px black",
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

export const Portal = styled(Select.Portal, {});

export const Viewport = styled(Select.Viewport, {
  padding: "5px",
});

export const Value = styled(Select.Value, {});

export const Group = styled(Select.Group, {});

export const Label = styled(Select.Label, {});

export const Item = styled(Select.Item, {
  fontSize: "13px",
  lineHeight: 1,
  color: "$title",
  borderRadius: "3px",
  display: "flex",
  alignItems: "center",
  height: "25px",
  padding: "0 35px 0 25px",
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
