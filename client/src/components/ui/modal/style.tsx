import style from "../../../style/style";
import { css } from "@emotion/css";

const modalStyle = {
  modal: css`
    position: fixed;
    z-index: ${style.zIndexModal};
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: black;
    opacity: 0.5;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  modalContent: css`
    background-color: ${style.backgroundColor};
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
    max-width: 500px;
    position: relative;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  `,
  close: css`
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
    &:hover,
    &:focus {
      color: black;
      text-decoration: none;
      cursor: pointer;
    }
  `,
};

export default modalStyle;
