import { slide as Menu } from "react-burger-menu";
import "./style.css";

const Burger = (props) => {
  return (
    <Menu {...props}>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/">
        About
      </a>
    </Menu>
  );
};

export default Burger;
