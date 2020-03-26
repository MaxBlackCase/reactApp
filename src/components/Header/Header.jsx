import React from "react";
import HeadSt from "./header.module.css";

const Header = () => {
  return (
    <header className={HeadSt.header}>
      <img
        className={HeadSt.logo}
        src="https://linuxmasterclub.ru/wp-content/uploads/2019/09/Flameshot-logo.png"
        alt="logo"
      />
    </header>
  );
};

export default Header;
