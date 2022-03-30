/** @jsxImportSource @emotion/react */
import { css, jsx, SerializedStyles, Theme, useTheme } from "@emotion/react";

const style = css`
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  > img {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

interface ImagBoxProps {
  src: string;
}

const ImageBox: React.FC<ImagBoxProps> = ({ src }) => {
  return (
    <div css={style}>
      <img src={src} alt="프로필" />
    </div>
  );
};

export default ImageBox;
