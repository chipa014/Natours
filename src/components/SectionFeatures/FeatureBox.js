import HeadingTertiary from "../UI/Headings/HeadingTertiary";
import Paragraph from "../UI/Paragraph";

import styles from "./FeatureBox.module.scss";
import "../../resources/icons/icon-font.css";
import "../../base/_utilities.scss";

const FeatureBox = function (props) {
  return (
    <div className={styles["feature-box"]}>
      <i className={`${props.icon} ${styles["feature-box__icon"]}`}></i>
      <HeadingTertiary className="u-margin-bottom-small">
        {props.heading}
      </HeadingTertiary>
      <Paragraph>{props.text}</Paragraph>
    </div>
  );
};

export default FeatureBox;
