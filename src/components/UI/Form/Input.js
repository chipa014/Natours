import styles from "./Input.module.scss";

const Input = function (props) {
  const isRadio = props.type === "radio" && true;
  return (
    <div className={isRadio ? styles["radio-group"] : ""}>
      <input
        type={props.type}
        placeholder={props.placeholder}
        id={props.id}
        name={props.name}
        className={isRadio ? styles["radio-input"] : styles.input}
        required
      >
        {props.children}
      </input>
      <label
        htmlFor={props.id}
        className={isRadio ? styles["radio-label"] : styles.label}
      >
        {isRadio && <span className={styles["radio-button"]}></span>}
        {props.placeholder}
      </label>
    </div>
  );
};

export default Input;
