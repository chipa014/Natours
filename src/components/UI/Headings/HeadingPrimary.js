import styles from "./HeadingPrimary.module.scss";

const HeadingPrimary = function (props) {
  return (
    <h1 className={styles["heading-primary"]}>
      <span className={styles["heading-primary--main"]}>
        {props.headingMain}
      </span>
      <span className={styles["heading-primary--sub"]}>{props.headingSub}</span>
    </h1>
  );
};

export default HeadingPrimary;
