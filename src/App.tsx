/** @jsxImportSource @emotion/react */
import { css, jsx, Theme, ThemeProvider } from "@emotion/react";
import React, { useState } from "react";
import LeftSide from "./components/organisms/left-side/left-side";
import { Model } from "./model";
import { ThemeColor, themeSets } from "./style";

const style = (theme: Theme) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: ${theme.bg_page1};
`;

interface AppProps {
  data: Model;
}

const App: React.FC<AppProps> = ({ data }) => {
  const [theme, setTheme] = useState<ThemeColor>("light");

  return (
    <ThemeProvider theme={themeSets[theme]}>
      <div css={style}>
        <LeftSide data={data.leftSide} />
      </div>
    </ThemeProvider>
  );
};

export default App;
