/** @jsxImportSource @emotion/react */
import { css, jsx, Theme } from "@emotion/react";
import { memo } from "react";
import { Model } from "../../../model";
import About from "../../molecules/right-section/about";
import Experience from "../../molecules/right-section/experience";
import Interest from "../../molecules/right-section/interest";
import Skill from "../../molecules/right-section/skill";

interface RightSideProps {
  data: Model["rightSide"];
}

const style = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  gap: 50px;
  position: relative;
  background: ${theme.bg_element2};
  padding: 40px;
`;

const RightSide: React.FC<RightSideProps> = ({ data }) => {
  return (
    <section css={style}>
      <About mainText={data.about.mainText} />
      <Experience infos={data.experienceInfo} />
      <Skill infos={data.skill} />
      <Interest infos={data.interest} />
    </section>
  );
};

export default memo(RightSide);
