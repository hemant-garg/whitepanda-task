import React from "react";
import { FaHome, FaSearch, FaShoppingBag } from "react-icons/fa";

import "./Sidebar.scss";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-list">
        <div className="sidebar-list--item">
          <FaHome />
        </div>
        <div className="sidebar-list--item">
          <FaSearch />
        </div>
        <div className="sidebar-list--item">
          <FaShoppingBag />
        </div>
      </div>
    </div>
  );
}
export default Sidebar;
