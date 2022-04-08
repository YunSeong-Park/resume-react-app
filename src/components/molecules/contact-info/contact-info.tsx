/** @jsxImportSource @emotion/react */
import { css, jsx, useTheme } from "@emotion/react";
import { memo } from "react";
import Title from "../../atoms/title/title";

interface ContactInfoProps {
  title: string;
  children: React.ReactNode;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ title, children }) => {
  return (
    <section>
      <Title title={title} size="medium" />
      <div
        css={css`
          margin-top: 20px;
        `}
      >
        {children}
      </div>
    </section>
  );
};

export default memo(ContactInfo);
