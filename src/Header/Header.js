import Logo from "./Logo";
import Heading from "./Heading";

import styles from "./Header.module.css";

const Header = function () {
  return (
    <header className={styles.header}>
      <Logo url={require("../img/logo-white.png")} alt="Natours logo" />
      <Heading headingMain="Outdoors" headingSub="is where life happens" />
    </header>
  );
};

export default Header;
