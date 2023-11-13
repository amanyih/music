import style from "../../../style/style";
import { css } from "@emotion/css";

const sidebarItemStyle = {
  navLink: ({ isActive }: { isActive: boolean }) => {
    return css`
      display: flex;
      align-items: center;
      padding: 1rem 1.5rem;
      color: ${isActive ? style.primaryColor : style.textColor};
      transition: background-color 0.2s ease-in-out;
      cursor: pointer;
      &:hover {
        color: ${!isActive && style.secondaryColor};
      }
      transition: ${style.transition};
    `;
  },
  listItem: css``,
};

export default sidebarItemStyle;
