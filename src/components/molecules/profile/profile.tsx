/** @jsxImportSource @emotion/react */
import { css, jsx, Theme } from "@emotion/react";
import { memo } from "react";
import ImageBox from "../../atoms/imgBox/imgBox";
import Title from "../../atoms/title/title";

const style = (theme: Theme) => css`
    position: relative;
    display: flex;
    gap: 20px;
    flex-direction: column;
    align-items: center;
    padding-bottom: 20px;
    border-bottom: 1px solid ${theme.border1};
}
`;

interface ProfileProps {
  profile: {
    imgSrc: string;
    name: string;
    job: string;
  };
}

const Profile: React.FC<ProfileProps> = ({ profile }) => {
  const { imgSrc, name, job } = profile;
  return (
    <section css={style}>
      <ImageBox src={imgSrc} />
      <Title title={name} subTitle={job} textAlign="center" isUppercase />
    </section>
  );
};

export default memo(Profile);
