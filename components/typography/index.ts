import { styled } from "stitches.config";

export const Typography = styled("span", {
  fontWeight: 400,

  variants: {
    semiBold: {
      true: {
        fontWeight: 600,
      },
    },

    variant: {
      caption2: {
        fontSize: "0.6875rem",
      },
      caption1: {
        fontSize: "0.75rem",
        color: "$body",
      },
      footnote: {
        fontSize: "0.8125rem",
      },
      "sub-headline": {
        fontSize: "0.9375rem",
      },
      callout: {
        fontSize: "1rem",
      },
      title2: {
        fontSize: "1.375rem",
      },
    },

    lineThrough: {
      true: {
        textDecoration: "line-through",
      },
    },

    uppercase: {
      true: {
        textTransform: "uppercase",
      },
    },

    capitalize: {
      true: {
        textTransform: "capitalize",
      },
    },
  },
});
