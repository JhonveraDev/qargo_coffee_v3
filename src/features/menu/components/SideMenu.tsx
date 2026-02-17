import { NavLink } from "react-router-dom";

import { menuCategories } from "../data/sideMenu.data";

export const SideMenu = () => {
  return (
    <nav className="side-menu">
      {menuCategories.map((group) => (
        <div key={group.section} className="side-menu__section">

          <h3 className={`side-menu__title side-menu__title--${group.section.toLowerCase()}`}>
            {group.section}
          </h3>

          {group.items.map((item) => (
            <NavLink
              key={item.id}
              to={`/our-menu/${item.id}`}
              end={false}
              className={({ isActive }) =>
                isActive
                  ? "side-menu__link side-menu__link--active"
                  : "side-menu__link"
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      ))}
    </nav>
  );
};
