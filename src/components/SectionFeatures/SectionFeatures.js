import Col from "../../layout/Grid/Col";
import Row from "../../layout/Grid/Row";
import FeatureBox from "./FeatureBox";

import styles from "./SectionFeatures.module.scss";

const SectionFeatures = function () {
  return (
    <section className={styles["section-features"]} id="section-features">
      <Row>
        <Col gridWidth="col-1-of-4">
          <FeatureBox
            icon="icon-basic-world"
            heading="Explore the world"
            text="Dignissim convallis aenean et tortor at risus viverra adipiscing at in tellus integer feugiat scelerisque"
          ></FeatureBox>
        </Col>

        <Col gridWidth="col-1-of-4">
          <FeatureBox
            icon="icon-basic-compass"
            heading="Meet nature"
            text="Id leo in vitae turpis massa sed elementum tempus egestas sed sed risus pretium quam"
          ></FeatureBox>
        </Col>

        <Col gridWidth="col-1-of-4">
          <FeatureBox
            icon="icon-basic-map"
            heading="Find your way"
            text="Enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat odio"
          ></FeatureBox>
        </Col>

        <Col gridWidth="col-1-of-4">
          <FeatureBox
            icon="icon-basic-heart"
            heading="Live a healthier life"
            text="Leo a diam sollicitudin tempor id eu nisl nunc mi ipsum faucibus vitae aliquet nec"
          ></FeatureBox>
        </Col>
      </Row>
    </section>
  );
};

export default SectionFeatures;
