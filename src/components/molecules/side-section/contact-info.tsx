/** @jsxImportSource @emotion/react */
import { css, jsx, Theme } from "@emotion/react";
import { memo } from "react";
import FaIcon, { Icon } from "../../atoms/icon/faIcon";
import Title from "../../atoms/title/title";
import SideSection, { ulStyle } from "./side-section";

type Info = { icon: Icon; descript: string };

interface ContactInfoProps {
  infos: Info[];
}

const ContactInfo: React.FC<ContactInfoProps> = ({ infos }) => {
  return (
    <SideSection title="contact info">
      <ul css={ulStyle}>
        {infos.map((info) => (
          <InfoItem info={info} />
        ))}
      </ul>
    </SideSection>
  );
};

export default memo(ContactInfo);

const InfoItem: React.FC<{ info: Info }> = ({ info }) => {
  return (
    <li>
      <FaIcon icon={info.icon} />
      <span>{info.descript}</span>
    </li>
  );
};
