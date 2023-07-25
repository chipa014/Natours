import styles from "./InputGroup.module.scss";

const InputGroup = function (props) {
  return <div className={styles.group}>{props.children}</div>;
};

export default InputGroup;
