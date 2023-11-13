import { Outlet } from "react-router-dom";
import { Sidebar, TopBar } from "../components";
import rootLayoutStyle from "./style";

const RootLayout = () => {
  return (
    <body className={rootLayoutStyle.container}>
      <Sidebar />
      <main className={rootLayoutStyle.main}>
        <TopBar />
        <Outlet />
      </main>
    </body>
  );
};

export default RootLayout;
