import Logo from "./Logo";
import TextBox from "./TextBox";

import styles from "./Header.module.css";

const Header = function () {
  return (
    <header className={styles.header}>
      <Logo url={require("../img/logo-white.png")} alt="Natours logo" />
      <TextBox headingMain="Outdoors" headingSub="is where life happens" />
    </header>
  );
};

export default Header;
