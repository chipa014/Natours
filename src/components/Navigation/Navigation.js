import { useState, useEffect } from "react";
import NavigationList from "./NavigationList";

import styles from "./Navigation.module.scss";

const Navigation = function () {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    document.addEventListener("keyup", (event) => {
      if (event.code !== "Escape") return;
      setChecked(false);
    });
  }, []);

  const navItems = [
    "About Natours",
    "Your benefits",
    "Popular tours",
    "Stories",
    "Book now",
  ];

  const onChangeHandler = function (event) {
    setChecked(event.target.checked);
  };

  return (
    <div className={styles.container}>
      <input
        type="checkbox"
        className={styles.checkbox}
        id="navi-toggle"
        checked={checked}
        onChange={onChangeHandler}
      />
      <label htmlFor="navi-toggle" className={styles["nav-btn"]}>
        <span className={styles.icon}>&nbsp;</span>
      </label>
      <div className={styles.background}>&nbsp;</div>
      <nav className={styles.nav}>
        <NavigationList items={navItems} />
      </nav>
    </div>
  );
};

export default Navigation;
