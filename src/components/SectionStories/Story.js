import HeadingTertiary from "../UI/Headings/HeadingTertiary";
import Paragraph from "../UI/Paragraph";

import styles from "./Story.module.scss";
import "../../base/_utilities.scss";

const Story = function (props) {
  return (
    <div className={styles.story}>
      <figure className={styles.story__shape}>
        <img
          className={styles.story__image}
          src={require(`../../resources/img/${props.imgsrc}`)}
          alt="Person on a tour"
        />
        <figcaption className={styles.story__caption}>
          {props.author}
        </figcaption>
      </figure>
      <div className={styles.story__text}>
        <HeadingTertiary className="u-margin-bottom-small">
          {props.heading}
        </HeadingTertiary>
        <Paragraph>{props.text}</Paragraph>
      </div>
    </div>
  );
};

export default Story;
