import styles from "./NavigationItem.module.scss";

const NavigationItem = function (props) {
  return (
    <li className={styles.item}>
      <a href={props.href} className={styles.link} onClick={props.onItemClick}>
        <span>0{props.num + 1}</span>
        {props.children}
      </a>
    </li>
  );
};

export default NavigationItem;
