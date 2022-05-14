import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>
            <NavLink className={(navData) => navData.isActive ? styles.active : "" } to="/welcome">Welcome</NavLink>
          </li>
          <li>
            <NavLink className={(navData) => navData.isActive ? styles.active : "" } to="/products">Products</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
