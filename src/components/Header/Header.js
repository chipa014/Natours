import Logo from "./Logo";
import TextBox from "./TextBox";

import styles from "./Header.module.scss";

const Header = function () {
  return (
    <header className={styles.header} id="header">
      <Logo
        url={require("../../resources/img/logo-white.png")}
        alt="Natours logo"
      />
      <TextBox
        headingMain="Outdoors"
        headingSub="is where life happens"
        btnText="Discover our tours"
      />
    </header>
  );
};

export default Header;
