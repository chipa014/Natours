import styles from "./Col.module.scss";

const Col = function (props) {
  return (
    <div className={`${styles.col} ${styles[props.gridWidth]}`}>
      {props.children}
    </div>
  );
};

export default Col;
