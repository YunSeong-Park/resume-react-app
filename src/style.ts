import { css, Theme } from "@emotion/react";

const PRIMARY_COLOR = "#03a9f4";

export const defaultTheme: Theme = {
  color: {
    primary: PRIMARY_COLOR,
    background: "lightblue",
    leftSide: {
      background: "#003147",
      emphasis: "rgba(255, 255, 255, 0.2)",
      font: "#FFFFFF",
      persent: "#081921",
    },
    rightSide: {
      background: "#FFFFFF",
      titleFont: "#003147",
      font: "#333",
      lightFont: "#848c90",
      persent: "#f0f0f0",
    },
  },
};

export const globalStyle = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;
