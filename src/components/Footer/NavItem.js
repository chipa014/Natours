import styles from "./NavItem.module.scss";
import linkStyles from "./FooterLink.module.scss";

const NavItem = function (props) {
  return (
    <li className={styles.item}>
      <a href="#" className={linkStyles.link}>
        {props.children}
      </a>
    </li>
  );
};

export default NavItem;
