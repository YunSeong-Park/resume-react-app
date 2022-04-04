import { addDecorator } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
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

addDecorator((Story) => (
  <ThemeProvider theme={defaultTheme}>
    <Story />
  </ThemeProvider>
));
addDecorator(withKnobs);
