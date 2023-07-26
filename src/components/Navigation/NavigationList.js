import NavigationItem from "./NavigationItem";

import styles from "./NavigationList.module.scss";

const NavigationList = function (props) {
  return (
    <ul className={styles["nav-list"]}>
      {props.items.map((item, i) => (
        <NavigationItem key={i} num={i}>
          {item}
        </NavigationItem>
      ))}
    </ul>
  );
};

export default NavigationList;
