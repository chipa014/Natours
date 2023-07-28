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

  const navItemClickHandler = function (event) {
    setChecked(false);
  };

  const navItems = [
    { displayTitle: "About Natours", id: "section-about" },
    { displayTitle: "Your benefits", id: "section-features" },
    { displayTitle: "Popular tours", id: "section-tours" },
    { displayTitle: "Stories", id: "section-stories" },
    { displayTitle: "Book now", id: "section-booking" },
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
        <NavigationList items={navItems} onItemClick={navItemClickHandler} />
      </nav>
    </div>
  );
};

export default Navigation;
