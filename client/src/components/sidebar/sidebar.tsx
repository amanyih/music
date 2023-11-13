import sidebars from "../../constants/sidebars";
import sidebarStyle from "./style";
import SideBarItem from "./sidebar-item/sidebar-item";
import { Avatar } from "..";
const Sidebar = () => {
  return (
    <div className={sidebarStyle.container}>
      <Avatar />
      {sidebars.map((sidebar) => {
        return (
          <SideBarItem
            key={sidebar.title}
            title={sidebar.title}
            // icon={sidebar.icon}
            to={sidebar.path}
          />
        );
      })}
    </div>
  );
};

export default Sidebar;
