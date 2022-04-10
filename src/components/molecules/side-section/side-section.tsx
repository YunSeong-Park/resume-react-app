/** @jsxImportSource @emotion/react */
import { css, jsx, Theme } from "@emotion/react";
import { memo } from "react";
import Title from "../../atoms/title/title";

interface SideSectionProps {
  title: string;
  children: React.ReactNode;
}

const SideSection: React.FC<SideSectionProps> = ({ title, children }) => {
  return (
    <section>
      <Title title={title} size="medium" isUppercase />
      <div
        css={(theme: Theme) => css`
          margin-top: 20px;
          color: ${theme.text1};
        `}
      >
        {children}
      </div>
    </section>
  );
};

export default memo(SideSection);

export const ulStyle = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
