import { css, Theme } from "@emotion/react";

const PRIMARY_COLOR = "#03a9f4";
const BLACK_COLOR = "#000";
const WHITE_COLOR = "#FFF";

export type ThemeColor = "light";

export const themeSets: Record<ThemeColor, Theme> = {
  light: {
    primary: PRIMARY_COLOR,
    bg_page1: "lightblue",
    bg_element1: "#003137",
    bg_element2: WHITE_COLOR,
    bg_element3: "#081921",
    bg_element4: "#f0f0f0",
    border1: "rgba(255, 255, 255, 0.2)",
    text1: WHITE_COLOR,
    text2: "#003147",
    text3: "#333",
    text4: "#848c90",
  },
};

export const globalStyle = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;
