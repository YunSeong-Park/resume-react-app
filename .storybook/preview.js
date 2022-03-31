import { ThemeProvider } from "@emotion/react";
import { defaultTheme } from "../src/style";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story /> // Canvas 영역을 뜻함
    </ThemeProvider>
  ),
];
