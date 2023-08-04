import styles from "./FooterNavItem.module.scss";
import linkStyles from "./FooterLink.module.scss";

const FooterNavItem = function (props) {
  return (
    <li className={styles.item}>
      <a href="#header" className={linkStyles.link}>
        {props.children}
      </a>
    </li>
  );
};

export default FooterNavItem;
