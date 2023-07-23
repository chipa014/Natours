import styles from "./HeadingTertiary.module.scss";

const HeadingTertiary = function (props) {
  return (
    <h3 className={`${props.className} ${styles["heading-tertiary"]}`}>
      {props.children}
    </h3>
  );
};

export default HeadingTertiary;
