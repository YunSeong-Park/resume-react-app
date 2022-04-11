/** @jsxImportSource @emotion/react */
import { css, jsx, Theme } from "@emotion/react";
import { memo } from "react";
import { ExperienceInfo } from "../../../model";
import RightSection from "./right-section";

interface ExperienceProps {
  infos: ExperienceInfo[];
}

const Experience: React.FC<ExperienceProps> = ({ infos }) => {
  return (
    <RightSection title="experience">
      <ul
        css={css`
          display: flex;
          flex-direction: column;
          gap: 20px;
        `}
      >
        {infos.map((info) => (
          <ExperienceItem info={info} />
        ))}
      </ul>
    </RightSection>
  );
};

export default memo(Experience);

const ExperienceItem: React.FC<{ info: ExperienceInfo }> = ({ info }) => {
  return (
    <li
      css={css`
        display: flex;

        @media (max-width: 600px) {
          flex-direction: column;
          gap: 5px;
        }
      `}
    >
      <div
        css={(theme: Theme) => css`
          min-width: 150px;
          > h5 {
            text-transform: uppercase;
            color: ${theme.text4};
            font-weight: 600;
          }

          @media (max-width: 600px) {
            min-width: 150px;
          }
        `}
      >
        <h5>{info.term}</h5>
        <h5>{info.company}</h5>
      </div>
      <div
        css={(theme: Theme) => css`
          > h4 {
            color: ${theme.primary};
          }
          > p {
            color: ${theme.text3};
          }
        `}
      >
        <h4>{info.duty}</h4>
        <p>{info.mainText}</p>
      </div>
    </li>
  );
};
