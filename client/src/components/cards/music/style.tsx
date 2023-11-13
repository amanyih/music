import style from "../../../style/style";
import { css } from "@emotion/css";

const musicCardStyle = {
  card: css`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    cursor: pointer;
    height: 400px;
    overflow: hidden;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    transition: ${style.transition};
    border-radius: 0.5rem;
    background-color: gray;

    &:hover {
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
      button {
        display: flex;
      }
      img {
        filter: brightness(0.5);
      }
    }
  `,
  //   the image should always be a square so that it doesn't get stretched, all images should be the same size.
  cardImg: css`
    width: 100%;
    height: 200px;
    object-fit: cover;
    object-position: top;
  `,
  cardBody: css`
    /* padding: 1rem; */
    /* padding-left: 1rem; */
    width: 100%;
    height: 100%;
  `,
  cardLabel: css`
    color: ${style.primaryColor};
    font-size: 0.8rem;
    margin: 0;
  `,
  cardTitle: css`
    font-size: 1.5rem;
    color: red;
    margin: 0;
  `,
  cardText: css`
    font-size: 1rem;
    margin: 0;
  `,
  cardButton: css`
    position: absolute;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: none;
    background-color: ${style.primaryColor};
    color: ${style.textColor};
    font-size: 2rem;
    justify-content: center;
    align-items: center;
    top: 50%;
    right: 0;
    transform: translate(-50%, -50%);
    transition: ${style.transition};
    cursor: pointer;
  `,
};

export default musicCardStyle;
