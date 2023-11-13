import { NavLink } from "react-router-dom";
import sidebarItemStyle from "./style";

interface SideBarItemProps {
  title: string;
  to: string;
}

const SideBarItem = ({ title, to }: SideBarItemProps) => {
  return (
    <NavLink className={sidebarItemStyle.navLink} to={to}>
      <li>{title}</li>
    </NavLink>
  );
};

export default SideBarItem;
