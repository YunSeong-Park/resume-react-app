/** @jsxImportSource @emotion/react */
import { css, jsx, Theme } from "@emotion/react";
import { memo } from "react";
import RightSection from "./right-section";
import Percent from "../../atoms/percent/percent";

type Info = { title: string; percent: number };

interface SkillProps {
  infos: Info[];
}

const Skill: React.FC<SkillProps> = ({ infos }) => {
  return (
    <RightSection title="professional skills">
      <ul
        css={css`
          display: flex;
          flex-direction: column;
          gap: 20px;
        `}
      >
        {infos.map((info) => (
          <SkillItem info={info} />
        ))}
      </ul>
    </RightSection>
  );
};

export default memo(Skill);

const SkillItem: React.FC<{ info: Info }> = ({ info }) => {
  return (
    <li
      css={(theme: Theme) => css`
        display: grid;
        grid-template-columns: 150px 1fr;
        align-items: center;
        > h4 {
          text-transform: uppercase;
          color: ${theme.text4};
        }
        @media (max-width: 600px) {
          grid-template-columns: repeat(1, 1fr);
        }
      `}
    >
      <h4>{info.title}</h4>
      <Percent percent={info.percent} color="secondary" />
    </li>
  );
};
