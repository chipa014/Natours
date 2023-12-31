import styles from "./Logo.module.scss";

const Logo = function (props) {
  return (
    <div className={styles["logo-box"]}>
      <img src={props.url} alt={props.alt} className={styles.logo} />
    </div>
  );
};

export default Logo;
