import { NavLink } from "react-router-dom";

import { menuCategories } from "../data/sideMenu.data";

export const SideMenu = () => {
  return (
    <div className="side-menu">
      {menuCategories.map((item) => (
        <NavLink
          key={item.id}
          to={`/our-menu/${item.id}`}
          className={({ isActive }) =>
            isActive ? "side-button active" : "side-button"
          }
        >
          {item.label}
        </NavLink>
      ))}
    </div>
  );
};
