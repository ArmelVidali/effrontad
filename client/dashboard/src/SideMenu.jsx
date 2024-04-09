import React from "react";

const SideMenu = (props) => {
  const selected_table = props.selected_table;
  const setSelectedTable = props.setSelectedTable;
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <ul className="lists">
          <li className="list">
            <a href="#" className="nav-link">
              <i className="bx bx-home-alt icon"></i>
              <span className="link">Dashboard</span>
            </a>
          </li>
          <li className="list">
            <a
              href="#"
              className="nav-link"
              onClick={() => setSelectedTable("clients")}
            >
              <i className="bx bx-bar-chart-alt-2 icon"></i>
              <span className="link">Clients</span>
            </a>
          </li>
          <li className="list">
            <a
              href="#"
              className="nav-link"
              onClick={() => setSelectedTable("commandes")}
            >
              <i className="bx bx-bell icon"></i>
              <span className="link">Commandes</span>
            </a>
          </li>
          <li className="list">
            <a
              href="#"
              className="nav-link"
              onClick={() => setSelectedTable("produits")}
            >
              <i className="bx bx-message-rounded icon"></i>
              <span className="link">Stock</span>
            </a>
          </li>
        </ul>

        <div className="bottom-content">
          <li className="list">
            <a href="#" className="nav-link">
              <i className="bx bx-cog icon"></i>
              <span className="link">Settings</span>
            </a>
          </li>
          <li className="list">
            <a href="#" className="nav-link">
              <i className="bx bx-log-out icon"></i>
              <span className="link">Logout</span>
            </a>
          </li>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
