/** @jsxImportSource @emotion/react */
import { css, jsx, Theme } from "@emotion/react";
import { memo } from "react";
import Title from "../../atoms/title/title";

interface RightSectionProps {
  title: string;
  children: React.ReactNode;
}

const RightSection: React.FC<RightSectionProps> = ({ title, children }) => {
  return (
    <section>
      <Title title={title} size="large" color="secondary" isUppercase />
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

export default memo(RightSection);
