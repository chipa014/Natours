import Col from "../components/Grid/Col";
import Row from "../components/Grid/Row";

import styles from "./Grid.module.scss";

const Grid = function () {
  return (
    <section className="grid">
      <Row>
        <Col gridWidth="col-1-of-2">Column 1 of 2</Col>
        <Col gridWidth="col-1-of-2">Column 1 of 2</Col>
      </Row>
      <Row>
        <Col gridWidth="col-1-of-3">Column 1 of 3</Col>
        <Col gridWidth="col-1-of-3">Column 1 of 3</Col>
        <Col gridWidth="col-1-of-3">Column 1 of 3</Col>
      </Row>
      <Row>
        <Col gridWidth="col-1-of-3">Column 1 of 3</Col>
        <Col gridWidth="col-2-of-3">Column 2 of 3</Col>
      </Row>
      <Row>
        <Col gridWidth="col-1-of-4">Column 1 of 4</Col>
        <Col gridWidth="col-1-of-4">Column 1 of 4</Col>
        <Col gridWidth="col-1-of-4">Column 1 of 4</Col>
        <Col gridWidth="col-1-of-4">Column 1 of 4</Col>
      </Row>
      <Row>
        <Col gridWidth="col-1-of-4">Column 1 of 4</Col>
        <Col gridWidth="col-2-of-4">Column 2 of 4</Col>
        <Col gridWidth="col-1-of-4">Column 1 of 4</Col>
      </Row>
      <Row>
        <Col gridWidth="col-1-of-4">Column 1 of 4</Col>
        <Col gridWidth="col-3-of-4">Column 3 of 4</Col>
      </Row>
    </section>
  );
};

export default Grid;
