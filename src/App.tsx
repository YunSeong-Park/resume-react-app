/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";

function App() {
  return (
    <div
      css={(theme) => css`
        background: ${theme.color.primary};
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
      `}
    ></div>
  );
}

export default App;
