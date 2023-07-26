import NavItem from "./NavItem";

import styles from "./Nav.module.scss";

const Nav = function (props) {
  return (
    <div className={styles.nav}>
      <ul className={styles.nav__list}>
        {props.items.map((item) => (
          <NavItem>{item}</NavItem>
        ))}
      </ul>
    </div>
  );
};

export default Nav;
