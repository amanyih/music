import style from "../../../style/style";
import { css } from "@emotion/css";

const avatarStyle = {
  avatar: css`
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    overflow: hidden;
    margin: 0 auto;
    border: 3px solid ${style.primaryColor};
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
      border: 3px solid ${style.secondaryColor};
    }
    display: inline-block;
  `,
  img: css`
    width: 100%;
    height: 100%;
    border-radius: 50%;
  `,
};
export default avatarStyle;
