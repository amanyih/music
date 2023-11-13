import style from "../../style/style";
import { css } from "@emotion/css";

const topbarStyle = {
  container: css`
    display: flex;
    justify-content: end;
    align-items: center;

    width: 100%;
  `,
  searchContainer: css`
    position: relative;
  `,
  searchIcon: css`
    position: absolute;
    top: 50%;
    left: 1rem;
    font-size: 1rem;
    transform: translateY(-50%);
    color: ${style.textColor};
  `,
  searchInput: css`
    padding: ${style.inputPadding};
    padding-left: 3rem;
    border: ${style.inputBorder};
    border-radius: ${style.inputBorderRadius};
    background-color: ${style.inputBackground};
    color: ${style.inputColor};
    transition: ${style.transition};
    &:focus {
      outline: none;
      border: ${style.inputFocusBorder};
      box-shadow: ${style.inputFocusBoxShadow};
    }
    &::placeholder {
      color: ${style.inputColor};
    }
  `,
};

export default topbarStyle;
