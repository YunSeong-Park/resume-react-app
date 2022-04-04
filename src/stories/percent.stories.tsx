import React from "react";
import { ComponentStory, ComponentMeta, addDecorator } from "@storybook/react";

/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import Percent, { PercentProps } from "../components/percent/percent";
import { number, radios, text } from "@storybook/addon-knobs";

export default {
  title: "Atoms/Percent",
  component: Percent,
  decorators: [
    (Story) => {
      return (
        <div
          css={css`
            padding: 10px;
            border: 1px solid black;
            display: flex;
            justify-content: center;
            align-content: center;
            width: 500px;
            height: 100%;
          `}
        >
          <Story />
        </div>
      );
    },
  ],
} as ComponentMeta<typeof Percent>;

export const DefaultPercent = () => {
  const percent = number("percent", 60);
  const color = radios(
    "color",
    { primary: "primary", secondary: "secondary" },
    "primary"
  );
  const size = radios("size", { small: "small", medium: "medium" }, "medium");
  const width = text("width", "100%");

  return <Percent percent={percent} color={color} size={size} width={width} />;
};
