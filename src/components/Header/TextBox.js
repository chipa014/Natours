import Button from "../UI/Button";
import HeadingPrimary from "../UI/Headings/HeadingPrimary";

import styles from "./TextBox.module.scss";

const TextBox = function (props) {
  return (
    <div className={styles["text-box"]}>
      <HeadingPrimary
        headingMain={props.headingMain}
        headingSub={props.headingSub}
      />
      <Button className="btn--white btn--animated">{props.btnText}</Button>
    </div>
  );
};

export default TextBox;
