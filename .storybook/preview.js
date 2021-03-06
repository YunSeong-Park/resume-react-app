import { addDecorator } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { Global, ThemeProvider } from "@emotion/react";

import { themeSets, globalStyle } from "../src/style";

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
  <ThemeProvider theme={themeSets["light"]}>
    <Global styles={globalStyle} />
    <Story />
  </ThemeProvider>
));
addDecorator(withKnobs);
