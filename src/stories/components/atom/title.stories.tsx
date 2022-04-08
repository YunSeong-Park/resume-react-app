/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import { addDecorator, ComponentMeta, ComponentStory } from "@storybook/react";
import { boolean, radios, text } from "@storybook/addon-knobs";
import Title from "../../../components/title/title";
import { directory } from "./utill";

export default {
  title: `${directory}/Title`,
  component: Title,
  decorators: [],
} as ComponentMeta<typeof Title>;

addDecorator((Story, context) => {
  return (
    <div
      css={css`
        font-size: 16px;
        background-color: lightgrey;
        padding: 5px;
        width: 500px;
      `}
    >
      <Story />
    </div>
  );
});

export const Standard = () => {
  const title = text("title", "title");
  const subTitle = text("sub title", "sub title");

  const size = radios(
    "size",
    {
      large: "large",
      medium: "medium",
    },
    "large"
  );

  const color = radios(
    "color",
    {
      primary: "primary",
      secondary: "secondary",
    },
    "primary"
  );

  const width = text("width", "100%");

  const isUppercase = boolean("isUppercase", false);
  const textAlign = radios(
    "textAlign",
    {
      left: "left",
      center: "center",
      right: "right",
    },
    "left"
  );

  return (
    <Title
      title={title}
      subTitle={subTitle}
      size={size}
      color={color}
      width={width}
      isUppercase={isUppercase}
      textAlign={textAlign}
    />
  );
};
