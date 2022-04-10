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

const container = (theme: Theme) => css`
  position: relative;
  width: 100%;
  max-width: 1000px;
  background: ${theme.bg_element2};
  margin: 50px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  box-shadow: 0 35px 55px ${theme.border1};

  @media (max-width: 1000px) {
    margin: 10px;
    grid-template-columns: repeat(1, 1fr);
  }
`;

interface AppProps {
  data: Model;
}

const App: React.FC<AppProps> = ({ data }) => {
  const [theme, setTheme] = useState<ThemeColor>("light");

  return (
    <ThemeProvider theme={themeSets[theme]}>
      <div css={style}>
        <div css={container}>
          <LeftSide data={data.leftSide} />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
