/** @jsxImportSource @emotion/react */
import { css, jsx, Theme } from "@emotion/react";
import { memo } from "react";
import RightSection from "./right-section";

interface AboutProps {
  mainText: string;
}

const About: React.FC<AboutProps> = ({ mainText }) => {
  return <RightSection title="profile">{mainText}</RightSection>;
};

export default memo(About);
