/** @jsxImportSource @emotion/react */
import { css, jsx, Theme } from "@emotion/react";
import { memo } from "react";
import Percent from "../../atoms/percent/percent";
import SideSection, { ulStyle } from "./side-section";

type Info = {
  language: string;
  percent: number;
};

interface LanguageInfoProps {
  infos: Info[];
}

const LanguageInfo: React.FC<LanguageInfoProps> = ({ infos }) => {
  return (
    <SideSection title="language">
      <ul css={ulStyle}>
        {infos.map((info) => (
          <LanguageInfoItem info={info} />
        ))}
      </ul>
    </SideSection>
  );
};

export default memo(LanguageInfo);

const LanguageInfoItem: React.FC<{ info: Info }> = ({ info }) => {
  return (
    <li
      css={css`
        display: flex;
        flex-direction: column;
        gap: 5px;
      `}
    >
      <p
        css={css`
          text-transform: capitalize;
        `}
      >
        {info.language}
      </p>
      <Percent percent={info.percent} size="small" />
    </li>
  );
};
