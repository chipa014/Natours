import styles from "./Button.module.scss";

const Button = function (props) {
  const inheritedStyles = props.className
    .split(" ")
    .map((style) => styles[style])
    .reduce((style, str) => `${str} ${style}`, "");
  return (
    <a
      href="#"
      onClick={props.onClick}
      className={`${styles.btn} ${inheritedStyles}`}
    >
      {props.children}
    </a>
  );
};

export default Button;
