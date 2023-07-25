import Button from "../UI/Button";
import HeadingPrimary from "../UI/Headings/HeadingPrimary";

import styles from "./TextBox.module.scss";
import "../../base/_utilities.scss";

const TextBox = function (props) {
  return (
    <div className={styles["text-box"]}>
      <HeadingPrimary
        headingMain={props.headingMain}
        headingSub={props.headingSub}
      />
      <div className="u-margin-top-btn">
        <Button className="btn--white btn--animated">{props.btnText}</Button>
      </div>
    </div>
  );
};

export default TextBox;
