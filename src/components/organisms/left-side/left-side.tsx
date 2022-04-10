/** @jsxImportSource @emotion/react */
import { css, jsx, Theme } from "@emotion/react";
import { memo } from "react";
import { Model } from "../../../model";
import Profile from "../../molecules/profile/profile";
import ContactInfo from "../../molecules/side-section/contact-info";
import EducationInfo from "../../molecules/side-section/education-info";
import LanguageInfo from "../../molecules/side-section/language-info";

const style = (theme: Theme) => css`
  position: relative;
  background: ${theme.bg_element1};
  padding: 40px;
`;

interface LeftSideProps {
  data: Model["leftSide"];
}

const LeftSide: React.FC<LeftSideProps> = ({ data }) => {
  return (
    <section css={style}>
      <Profile profile={data.profile} />
      <ContactInfo infos={data.contactInfo} />
      <EducationInfo infos={data.educationInfo} />
      <LanguageInfo infos={data.languageInfo} />
    </section>
  );
};

export default memo(LeftSide);
