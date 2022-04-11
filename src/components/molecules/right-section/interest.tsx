/** @jsxImportSource @emotion/react */
import { css, jsx, Theme } from "@emotion/react";
import { memo } from "react";
import FaIcon, { Icon } from "../../atoms/icon/faIcon";
import RightSection from "./right-section";

type Info = {
  icon: Icon;
  descript: string;
};

interface InterestProps {
  infos: Info[];
}

const Interest: React.FC<InterestProps> = ({ infos }) => {
  return (
    <RightSection title="interest">
      <ul
        css={css`
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-row-gap: 10px;
        `}
      >
        {infos.map((info) => (
          <InterestItem info={info} />
        ))}
      </ul>
    </RightSection>
  );
};

export default memo(Interest);

const InterestItem: React.FC<{ info: Info }> = ({ info }) => {
  return (
    <li
      css={(theme: Theme) => css`
        color: ${theme.text3};
        font-weight: 500;
      `}
    >
      <FaIcon icon={info.icon} width="25px" />
      {info.descript}
    </li>
  );
};
