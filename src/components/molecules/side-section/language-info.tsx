/** @jsxImportSource @emotion/react */
import { css, jsx, Theme } from "@emotion/react";
import { memo } from "react";
import Percent from "../../atoms/percent/percent";
import SideSection from "./side-section";

type Info = {
  title: string;
  percent: number;
};

interface LanguageInfoProps {
  infos: Info[];
}

const LanguageInfo: React.FC<LanguageInfoProps> = ({ infos }) => {
  return (
    <SideSection title="language">
      <ul>
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
    <li>
      <p>{info.title}</p>
      <Percent percent={info.percent} />
    </li>
  );
};
