import Button from "../UI/Button";
import Input from "../UI/Form/Input";
import InputGroup from "../UI/Form/InputGroup";
import HeadingSecondary from "../UI/Headings/HeadingSecondary";
import Row from "../../layout/Grid/Row";

import styles from "./SectionBooking.module.scss";
import buttonStyles from "../UI/Button.module.scss";
import "../../base/_utilities.scss";

const SectionBooking = function () {
  return (
    <section className={styles["section-booking"]}>
      <Row>
        <div className={styles.book}>
          <div className={styles["book__form"]}>
            <div className="u-center-text u-margin-bottom-medium">
              <HeadingSecondary>Start booking now</HeadingSecondary>
            </div>
            <form>
              <InputGroup>
                <Input type="text" placeholder="Full name" id="name" />
              </InputGroup>
              <InputGroup>
                <Input type="email" placeholder="Email address" id="email" />
              </InputGroup>
              <InputGroup className="u-margin-bottom-big">
                <Input
                  type="radio"
                  placeholder="Small tour group"
                  id="small"
                  name="group-size"
                />
                <Input
                  type="radio"
                  placeholder="Large tour group"
                  id="large"
                  name="group-size"
                />
              </InputGroup>
              <InputGroup>
                <button
                  className={`${styles["form-button"]} ${buttonStyles.btn} ${buttonStyles["btn--green"]}`}
                >
                  Next step &rarr;
                </button>
              </InputGroup>
            </form>
          </div>
        </div>
      </Row>
    </section>
  );
};

export default SectionBooking;
