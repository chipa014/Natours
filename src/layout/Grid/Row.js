import styles from "./Row.module.scss";

const Row = function (props) {
  return <div className={styles.row}>{props.children}</div>;
};

export default Row;
