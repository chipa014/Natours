import styles from "./Paragraph.module.scss";

const Paragraph = function (props) {
  return <p className={styles.paragraph}>{props.children}</p>;
};

export default Paragraph;
