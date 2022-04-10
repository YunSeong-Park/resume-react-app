/** @jsxImportSource @emotion/react */
import { css, jsx, Theme } from "@emotion/react";
import { memo } from "react";
import SideSection, { ulStyle } from "./side-section";

type Info = {
  term: string;
  title: string;
  organization: string;
};

interface EducationInfoProps {
  infos: Info[];
}

const EducationInfo: React.FC<EducationInfoProps> = ({ infos }) => {
  console.log(infos);
  return (
    <SideSection title="education">
      <ul css={ulStyle}>
        {infos.map((info) => (
          <EducationInfoItem info={info} />
        ))}
      </ul>
    </SideSection>
  );
};

export default memo(EducationInfo);

const EducationInfoItem: React.FC<{ info: Info }> = ({ info }) => {
  return (
    <li>
      <p
        css={(theme: Theme) => css`
          color: ${theme.primary};
          font-weight: 500;
          font-size: 12px;
        `}
      >
        {info.term}
      </p>
      <p
        css={css`
          font-weight: 500;
        `}
      >
        {info.title}
      </p>
      <p
        css={css`
          font-weight: 300;
        `}
      >
        {info.organization}
      </p>
    </li>
  );
};
