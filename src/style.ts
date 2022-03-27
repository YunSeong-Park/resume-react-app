const PRIMARY_COLOR = "#03a9f4";

type Theme = {
  color: Color;
};

type Color = {
  primary: string;
  background: string;
  leftSide: {
    background: string;
    emphasis: string;
    font: string;
    persent: string;
  };
  rightSide: {
    background: string;
    titleFont: string;
    font: string;
    lightFont: string;
    persent: string;
  };
};

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
