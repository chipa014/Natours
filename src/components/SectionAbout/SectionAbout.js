import Col from "../../layout/Grid/Col";
import Row from "../../layout/Grid/Row";

import HeadingSecondary from "../UI/Headings/HeadingSecondary";
import HeadingTertiary from "../UI/Headings/HeadingTertiary";
import Paragraph from "../UI/Paragraph";
import ButtonSmall from "../UI/ButtonSmall";

import "../../base/_utilities.scss";

import styles from "./SectionAbout.module.scss";

const SectionAbout = function () {
  return (
    <section className={styles["section-about"]} id="section-about">
      <div className="u-center-text u-margin-bottom-big">
        <HeadingSecondary>
          Exciting tours for adventurous people
        </HeadingSecondary>
      </div>
      <Row>
        <Col gridWidth="col-1-of-2">
          <HeadingTertiary className="u-margin-bottom-small">
            You're going to fall in love with nature
          </HeadingTertiary>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quam
            adipiscing vitae proin sagittis nisl rhoncus. Orci phasellus egestas
            tellus rutrum tellus pellentesque eu tincidunt.
          </Paragraph>

          <HeadingTertiary className="u-margin-bottom-small">
            Live adventures like you never have before
          </HeadingTertiary>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed enim
            ut sem viverra aliquet eget sit amet tellus.
          </Paragraph>

          <ButtonSmall>Learn more &rarr;</ButtonSmall>
        </Col>
        <Col gridWidth="col-1-of-2">
          <div className={styles.composition}>
            <img
              src={require("../../resources/img/nat-1-large.jpg")}
              alt="A serene lake in the forest, mountains in the distance"
              className={`${styles["composition__photo"]} ${styles["composition__photo--p1"]}`}
            />
            <img
              src={require("../../resources/img/nat-2-large.jpg")}
              alt="Person biking along a beautiful hill landscape"
              className={`${styles["composition__photo"]} ${styles["composition__photo--p2"]}`}
            />
            <img
              src={require("../../resources/img/nat-3-large.jpg")}
              alt="Person on a mountain trail"
              className={`${styles["composition__photo"]} ${styles["composition__photo--p3"]}`}
            />
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default SectionAbout;
