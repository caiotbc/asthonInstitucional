"use client";

import { useState } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <div>
        <img src="/logo.svg" alt="logo" />
        <ul className={navOpen ? styles.navOpen : ""}>
          <li>
            <a
              href="#quem-somos"
              onClick={() => {
                setNavOpen(!navOpen);
              }}
            >
              Quem somos
            </a>
          </li>
          <li>
            <a
              href="#produto"
              onClick={() => {
                setNavOpen(!navOpen);
              }}
            >
              Produto
            </a>
          </li>
          <li>
            <a
              href="#diferenciais"
              onClick={() => {
                setNavOpen(!navOpen);
              }}
            >
              Diferenciais
            </a>
          </li>
          <li>
            <a
              href="#contato"
              onClick={() => {
                setNavOpen(!navOpen);
              }}
            >
              Contato
            </a>
          </li>
        </ul>
        <button
          className={`${styles.hamburgerToggle} ${
            navOpen ? styles.hamburgerClose : ""
          }`}
          onClick={() => {
            setNavOpen(!navOpen);
          }}
        >
          <div></div>
          <div></div>
          <div></div>
        </button>
      </div>
    </nav>
  );
}
