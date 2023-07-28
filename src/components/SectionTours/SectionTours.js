import Button from "../UI/Button";
import Col from "../../layout/Grid/Col";
import HeadingSecondary from "../UI/Headings/HeadingSecondary";
import Row from "../../layout/Grid/Row";
import TourCard from "./TourCard";

import styles from "./SectionTours.module.scss";
import "../../base/_utilities.scss";

const SectionTours = function () {
  return (
    <section className={styles["section-tours"]} id="section-tours">
      <div className="u-center-text u-margin-bottom-big">
        <HeadingSecondary>Most Popular Tours</HeadingSecondary>
      </div>
      <Row>
        <Col gridWidth="col-1-of-3">
          <TourCard
            num="1"
            heading="The sea explorer"
            details={[
              "3 day tour",
              "Up to 30 people",
              "2 tour guides",
              "Sleep in cozy hotels",
              "Difficulty: easy",
            ]}
            price="297"
          />
        </Col>
        <Col gridWidth="col-1-of-3">
          <TourCard
            num="2"
            heading="The forest hiker"
            details={[
              "7 day tour",
              "Up to 40 people",
              "6 tour guides",
              "Sleep in provided tents",
              "Difficulty: medium",
            ]}
            price="497"
          />
        </Col>
        <Col gridWidth="col-1-of-3">
          <TourCard
            num="3"
            heading="The snow adventurer"
            details={[
              "5 day tour",
              "Up to 15 people",
              "3 tour guides",
              "Sleep in provided tents",
              "Difficulty: hard",
            ]}
            price="897"
          />
        </Col>
      </Row>
      <div className="u-center-text u-margin-bottom-big">
        <Button className="btn--green">Discover all tours</Button>
      </div>
    </section>
  );
};

export default SectionTours;
