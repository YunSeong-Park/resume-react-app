import { ComponentMeta } from "@storybook/react";
import FAIcon from "../../../components/atoms/icon/faIcon";
import { radios } from "@storybook/addon-knobs";
import { directory } from "./utill";

export default {
  title: `${directory}/FaIcon`,
  component: FAIcon,
  decorators: [],
} as ComponentMeta<typeof FAIcon>;

export const StandardFAIcon = () => {
  const icon = radios(
    "icon",
    {
      phone: "phone",
      mail: "mail",
      globe: "globe",
      map: "map",
      gamePad: "gamePad",
      microphone: "microphone",
      book: "book",
      cutlery: "cutlery",
    },
    "phone"
  );
  return <FAIcon icon={icon} />;
};
