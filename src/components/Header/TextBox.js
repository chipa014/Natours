import Button from "./Button";

import styles from "./TextBox.module.scss";

const TextBox = function (props) {
  return (
    <div className={styles["text-box"]}>
      <h1 className={styles["heading-primary"]}>
        <span className={styles["heading-primary--main"]}>
          {props.headingMain}
        </span>
        <span className={styles["heading-primary--sub"]}>
          {props.headingSub}
        </span>
        <Button className="btn--white btn--animated">{props.btnText}</Button>
      </h1>
    </div>
  );
};

export default TextBox;
