/** @jsxImportSource @emotion/react */
import { css, jsx, Theme } from "@emotion/react";
import { memo } from "react";
import { style, sizes, colors } from "./style";

export interface PercentProps {
  percent: number;
  color?: "primary" | "secondary";
  size?: "small" | "medium";
  width?: number | string;
}

const Percent: React.FC<PercentProps> = ({
  percent,
  color = "primary",
  size = "medium",
  width,
}) => {
  return (
    <div
      css={(theme: Theme) => [
        style(theme),
        sizes[size],
        colors[color](theme),
        { width },
      ]}
    >
      <div css={css({ width: percent + "%" })}></div>
    </div>
  );
};

export default memo(Percent);
