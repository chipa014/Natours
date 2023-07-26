import FooterNavItem from "./FooterNavItem";

import styles from "./FooterNav.module.scss";

const FooterNav = function (props) {
  return (
    <div className={styles.nav}>
      <ul className={styles.nav__list}>
        {props.items.map((item, i) => (
          <FooterNavItem key={i}>{item}</FooterNavItem>
        ))}
      </ul>
    </div>
  );
};

export default FooterNav;
