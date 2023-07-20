import Logo from "../components/Header/Logo";
import TextBox from "../components/Header/TextBox";

import styles from "./Header.module.scss";

const Header = function () {
  return (
    <header className={styles.header}>
      <Logo url={require("../img/logo-white.png")} alt="Natours logo" />
      <TextBox
        headingMain="Outdoors"
        headingSub="is where life happens"
        btnText="Discover our tours"
      />
    </header>
  );
};

export default Header;
