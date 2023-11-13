import style from "../../../style/style";
import { css } from "@emotion/css";

const inputStyle = {
  container: css`
    margin-bottom: 1rem;
    position: relative;
  `,
  input: css`
    width: 100%;
    padding: ${style.inputPadding};
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
  label: css`
    display: block;
    margin-bottom: 0.5rem;
    font-size: 1.4rem;
    color: ${style.textColor};
  `,
  error: css`
    color: ${style.errorColor};
    font-size: 1.2rem;
    margin-top: 0.5rem;
  `,
  password: css`
    position: absolute;
    top: 50%;
    right: 1rem;
    transform: translateY(-50%);
    cursor: pointer;
    color: ${style.textColor};
    transition: ${style.transition};
    &:hover {
      color: ${style.primaryColor};
    }
  `,
};

export default inputStyle;
