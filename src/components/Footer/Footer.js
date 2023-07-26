import Col from "../../layout/Grid/Col";
import FooterLink from "./FooterLink";
import Nav from "./Nav";
import Paragraph from "../UI/Paragraph";
import Row from "../../layout/Grid/Row";

import styles from "./Footer.module.scss";

const Footer = function () {
  const navItems = [
    "Company",
    "Contact us",
    "Careers",
    "Privacy Policy",
    "Terms",
  ];
  return (
    <footer className={styles.footer}>
      <div className={styles["logo-box"]}>
        <img
          src={require("../../resources/img/logo-green-2x.png")}
          alt="Natours logo"
          className={styles.logo}
        />
      </div>
      <Row>
        <Col gridWidth="col-1-of-2">
          <Nav items={navItems} />
        </Col>
        <Col gridWidth="col-1-of-2">
          <div className={styles.copyright}>
            <Paragraph>
              Built by{" "}
              <FooterLink href="https://github.com/chipa014">
                Alexander Trushin
              </FooterLink>
              &nbsp; as an exercise in&nbsp;
              <FooterLink href="https://codingheroes.io/">
                Jonas Schmedtmann
              </FooterLink>
              's online course&nbsp;
              <FooterLink href="https://www.udemy.com/course/advanced-css-and-sass/">
                Advanced CSS and Sass
              </FooterLink>
              . Design by Jonas Schmedtmann. Copyright &copy; Jonas Schmedtmann.
            </Paragraph>
          </div>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
