import "@emotion/react";

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

declare module "@emotion/react" {
  export interface Theme {
    color: Color;
  }
}
