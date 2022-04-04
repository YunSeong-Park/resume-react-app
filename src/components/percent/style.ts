import { css, Theme } from "@emotion/react";

export const style = (theme: Theme) => css`
  position: relative;

  > div {
    background: ${theme.color.primary};
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
  }
`;

export const sizes = {
  small: css`
    height: 6px;
  `,
  medium: css`
    height: 10px;
  `,
};

export const colors = {
  primary: (theme: Theme) => css`
    background: ${theme.color.rightSide.persent};
  `,
  secondary: (theme: Theme) => css`
    background: ${theme.color.leftSide.persent};
  `,
};
