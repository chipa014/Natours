import styles from "./FooterLink.module.scss";

const FooterLink = function (props) {
  return (
    <a href={props.href} className={styles.link}>
      {props.children}
    </a>
  );
};

export default FooterLink;
