import styles from "./TextBox.module.css";

const TextBox = function (props) {
  return (
    <div className={styles["text-box"]}>
      <h1 className={styles["heading-primary"]}>
        <span className={styles["heading-primary-main"]}>
          {props.headingMain}
        </span>
        <span className={styles["heading-primary-sub"]}>
          {props.headingSub}
        </span>
      </h1>
    </div>
  );
};

export default TextBox;
