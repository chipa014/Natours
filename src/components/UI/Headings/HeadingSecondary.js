import styles from "./HeadingSecondary.module.scss";

const HeadingSecondary = function (props) {
  return (
    <h2 className={`${props.className} ${styles["heading-secondary"]}`}>
      {props.children}
    </h2>
  );
};

export default HeadingSecondary;
