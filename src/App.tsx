/** @jsxImportSource @emotion/react */
import { css, jsx, Theme } from "@emotion/react";

const appStyle = (theme: Theme) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: ${theme.color.primary};
`;

const App = () => {
  return <div css={appStyle}></div>;
};

export default App;
