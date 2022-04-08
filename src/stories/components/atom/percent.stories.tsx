/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { number, radios, text } from "@storybook/addon-knobs";
import Percent, {
  PercentProps,
} from "../../../components/atoms/percent/percent";
import { directory } from "./utill";

export default {
  title: `${directory}/Percent`,
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
            flex-direction: column;
          `}
        >
          <Story />
        </div>
      );
    },
  ],
} as ComponentMeta<typeof Percent>;

export const Standard = () => {
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

const colors: PercentProps["color"][] = ["primary", "secondary"];

export const Colors = () => {
  return colors.map((color) => (
    <>
      <p>{color}</p> <Percent percent={40} color={color} />
    </>
  ));
};

const sizes: PercentProps["size"][] = ["medium", "small"];

export const Sizes = () => {
  return sizes.map((size) => (
    <>
      <p>{size}</p> <Percent percent={50} size={size} />
    </>
  ));
};

const widths = ["100%", "50%", "200px", "100px"];

export const Widths = () => {
  return widths.map((width) => (
    <>
      <p>{width}</p>
      <Percent percent={50} width={width} />
    </>
  ));
};
