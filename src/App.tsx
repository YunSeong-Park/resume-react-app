/** @jsxImportSource @emotion/react */
import { css, jsx, Theme, ThemeProvider } from "@emotion/react";
import { useState } from "react";
import { ThemeColor, themeSets } from "./style";

const style = (theme: Theme) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: ${theme.bg_page1};
`;

const App = () => {
  const [theme, setTheme] = useState<ThemeColor>("light");

  return (
    <ThemeProvider theme={themeSets[theme]}>
      <div css={style}></div>
    </ThemeProvider>
  );
};

export default App;
