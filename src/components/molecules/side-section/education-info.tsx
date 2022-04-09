/** @jsxImportSource @emotion/react */
import { css, jsx, Theme } from "@emotion/react";
import { memo } from "react";
import SideSection from "./side-section";

type Info = {
  term: string;
  title: string;
  organization: string;
};

interface EducationInfoProps {
  infos: Info[];
}

const EducationInfo: React.FC<EducationInfoProps> = ({ infos }) => {
  return (
    <SideSection title="education">
      <ul>
        {infos.map((info) => {
          <EducationInfoItem info={info} />;
        })}
      </ul>
    </SideSection>
  );
};

export default memo(EducationInfo);

const EducationInfoItem: React.FC<{ info: Info }> = ({ info }) => {
  return (
    <li>
      <p>{info.term}</p>
      <p>{info.title}</p>
      <p>{info.organization}</p>
    </li>
  );
};
