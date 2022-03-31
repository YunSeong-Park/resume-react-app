/** @jsxImportSource @emotion/react */
import { css, jsx, Theme, useTheme } from "@emotion/react";

const getStyle = (height: number, background: string) => {
  return (theme: Theme) =>
    css`
      height: ${height}px;
      background: ${background};

      > div {
        height: ${height}px;
      }
    `;
};

const commonStyle = (theme: Theme) => css`
  position: relative;
  width: 100%;

  > div {
    background: ${theme.color.primary};
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
  }
`;

interface RawPercentProps {
  style: any;
  percent: number;
}

const Percent: React.FC<RawPercentProps> = ({ style, percent }) => {
  return (
    <div css={[commonStyle, style]}>
      <div
        css={css`
          width: ${percent}%;
        `}
      ></div>
    </div>
  );
};

interface PercentProps {
  percent: number;
}

export const PercentLeft: React.FC<PercentProps> = ({ percent }) => {
  const theme = useTheme();

  const style = getStyle(6, theme.color.leftSide.persent);

  return <Percent style={style} percent={percent} />;
};

export const PercentRight: React.FC<PercentProps> = ({ percent }) => {
  const theme = useTheme();

  const style = getStyle(10, theme.color.rightSide.persent);

  return <Percent style={style} percent={percent} />;
};
