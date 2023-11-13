import { useState } from "react";
import { BsSearch } from "../../assets/icons";

import topbarStyle from "./style";
const TopBar = () => {
  const [value, setValue] = useState<string>("");
  return (
    <div className={topbarStyle.container}>
      <span className={topbarStyle.searchContainer}>
        <input
          className={topbarStyle.searchInput}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Search"
        />
        <BsSearch className={topbarStyle.searchIcon} />
      </span>
    </div>
  );
};

export default TopBar;
