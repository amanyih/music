import { css } from "@emotion/css";
import style from "../style/style";

const rootLayoutStyle = {
  container: css`
    display: flex;
    color: ${style.textColor};
  `,
  main: css`
    width: 85%;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100vh;
    padding-left: 2rem;
  `,
};

export default rootLayoutStyle;
