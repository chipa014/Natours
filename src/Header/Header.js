import styles from "./Header.module.css";

const Header = function () {
  return (
    <header className={styles.header}>
      <div className={styles["logo-box"]}>
        <img
          src={require("../img/logo-white.png")}
          alt="Natours logo"
          className={styles.logo}
        />
      </div>

      <div className={styles["text-box"]}>
        <h1 className={styles["heading-primary"]}>
          <span className={styles["heading-primary-main"]}>Outdoors</span>
          <span className={styles["heading-primary-sub"]}>
            is where life happens
          </span>
        </h1>
      </div>
    </header>
  );
};

export default Header;
