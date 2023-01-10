import React, { useState } from "react";
import { Menu } from "semantic-ui-react";
import { useLocation, useNavigate } from "react-router";
import "./Header.scss";

const Header = () => {
  const currentPath = useLocation();
  const finalCurrentPath = currentPath.pathname.replace("/","");
  const [activeItem, setActiveItem] = useState(finalCurrentPath);
  const navigate = useNavigate();

  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
    navigate(`/${name}`)
  };
  return (
    <div className="header-menu">
      <Menu secondary>
        <Menu.Item
          name="inicio"
          active={activeItem === "inicio"}
          onClick={handleItemClick}
        />
        <Menu.Item
          name="series"
          active={activeItem === "series"}
          onClick={handleItemClick}
        />
        <Menu.Item
          name="comics"
          active={activeItem === "comics"}
          onClick={handleItemClick}
        />
      </Menu>
    </div>
  );
};

export default Header;
