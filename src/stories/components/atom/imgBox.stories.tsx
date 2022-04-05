import { ComponentMeta } from "@storybook/react";
import ImageBox from "../../../components/imgBox/imgBox";

import { directory } from "./utill";

export default {
  title: `${directory}/Image Box`,
  component: ImageBox,
  decorators: [],
} as ComponentMeta<typeof ImageBox>;

export const DefaultImageBox = () => {
  return <ImageBox src="./img.jpg" />;
};
