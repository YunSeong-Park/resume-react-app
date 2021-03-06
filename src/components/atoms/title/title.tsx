/** @jsxImportSource @emotion/react */
import { css, jsx, Theme } from "@emotion/react";
import { memo } from "react";

const style = css`
  > span {
    text-transform: inherit;
    font-size: 0.8em;
    font-weight: 300;
  }
`;

const sizes = {
  large: css`
    font-size: 1.5em;
    line-height: 1.4em;
    font-weight: bold;
  `,
  medium: css`
    font-size: 1.17em;
    font-weight: 600;
  `,
};

const colors = {
  primary: (theme: Theme) => css`
    color: ${theme.text1};
  `,
  secondary: (theme: Theme) => css`
    color: ${theme.text2};
  `,
};

const textAligns = {
  left: css`
    text-align: left;
  `,
  center: css`
    text-align: center;
  `,
  right: css`
    text-align: right;
  `,
};

const uppercase = css`
  text-transform: uppercase;
`;

interface TitleProps {
  title: string;
  subTitle?: string;
  size?: "large" | "medium";
  color?: "primary" | "secondary";
  width?: string;
  isUppercase?: boolean;
  textAlign?: "left" | "center" | "right";
}

const Title: React.FC<TitleProps> = ({
  title,
  subTitle,
  size = "large",
  color = "primary",
  width = "100%",
  isUppercase = false,
  textAlign = "left",
}) => {
  return (
    <h2
      css={(theme: Theme) => [
        style,
        sizes[size],
        colors[color](theme),
        textAligns[textAlign],
        isUppercase && uppercase,
        css({ width }),
      ]}
    >
      {title}
      {subTitle && (
        <>
          <br /> <span>{subTitle}</span>
        </>
      )}
    </h2>
  );
};

export default memo(Title);
