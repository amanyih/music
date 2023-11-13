import style from "../../../style/style";
import { css } from "@emotion/css";

// html{
//     font-size: 62.5%;
// }

const buttonStyle = {
  button: css`
    background-color: ${style.buttonBackground};
    color: ${style.buttonColor};
    border: none;
    border-radius: 1rem;
    padding: 0.5rem 1rem;
    cursor: pointer;
    transition: ${style.transition};
    &:hover {
      background-color: ${style.buttonHoverBackground};
      color: ${style.buttonHoverColor};
    }
    &:active {
      background-color: ${style.buttonActiveBackground};
      color: ${style.buttonActiveColor};
    }
    &:disabled {
      background-color: ${style.buttonActiveBackground};
      color: ${style.buttonActiveColor};
      cursor: not-allowed;
    }
  `,
  primary: css`
    background-color: ${style.primaryColor};
    color: ${style.buttonColor};
  `,
  secondary: css`
    background-color: ${style.secondaryColor};
  `,
  tertiary: css`
    background-color: ${style.backgroundColor};
    color: ${style.buttonColor};
  `,
  danger: css`
    background-color: ${style.errorColor};
    color: ${style.buttonColor};
  `,
  success: css`
    background-color: ${style.successColor};
    color: ${style.buttonColor};
  `,
  warning: css`
    background-color: ${style.warningColor};
    color: ${style.buttonColor};
  `,
  small: css`
    font-size: 0.8rem;
    padding: 0.3rem 0.5rem;
  `,
  medium: css`
    font-size: 1rem;
    padding: 0.5rem 1rem;
  `,
  large: css`
    font-size: 1.2rem;
    padding: 0.7rem 1.2rem;
  `,
  xlarge: css`
    font-size: 1.5rem;
    padding: 1rem 1.5rem;
  `,
};

export default buttonStyle;
