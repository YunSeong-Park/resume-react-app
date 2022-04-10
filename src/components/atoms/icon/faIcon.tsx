/** @jsxImportSource @emotion/react */
import { css, jsx, useTheme } from "@emotion/react";
import { memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelopeOpen,
  faGlobe,
  faMapMarker,
  faGamepad,
  faMicrophone,
  faBook,
  faCutlery,
} from "@fortawesome/free-solid-svg-icons";

const icons = {
  phone: faPhone,
  mail: faEnvelopeOpen,
  globe: faGlobe,
  map: faMapMarker,
  gamePad: faGamepad,
  microphone: faMicrophone,
  book: faBook,
  cutlery: faCutlery,
};

export type Icon = keyof typeof icons;

interface IconProps {
  icon: Icon;
  width?: string;
}

const FAIcon: React.FC<IconProps> = ({ icon, width = "30px" }) => {
  const theme = useTheme();

  return (
    <span
      css={css`
        display: inline-block;
        font-size: 18px;
        width: ${width};
        text-align: left;
      `}
    >
      <FontAwesomeIcon icon={icons[icon]} color={theme.primary} />
    </span>
  );
};

export default memo(FAIcon);
