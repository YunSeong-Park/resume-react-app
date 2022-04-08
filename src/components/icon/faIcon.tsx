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

interface IconProps {
  icon: keyof typeof icons;
}

const FAIcon: React.FC<IconProps> = ({ icon }) => {
  const theme = useTheme();

  return (
    <span>
      <FontAwesomeIcon icon={icons[icon]} color={theme.primary} />
    </span>
  );
};

export default memo(FAIcon);
