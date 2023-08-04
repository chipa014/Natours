import HeadingTertiary from "../UI/Headings/HeadingTertiary";
import Paragraph from "../UI/Paragraph";

import styles from "./Story.module.scss";
import "../../base/_utilities.scss";

const Story = function (props) {
  return (
    <div className={styles.story}>
      <figure className={styles.story__shape}>
        <img
          srcSet={`${require(`../../resources/img/${props.imgSrcSmall}`)} 300w,
          ${require(`../../resources/img/${props.imgSrc}`)} 1000w,
          ${require(`../../resources/img/${props.imgSrcLarge}`)} 2000w`}
          size="(max-width: 56.25px) 20vw, (max-width: 37.5px) 40vw, 380px"
          className={styles.story__image}
          alt="Person on a tour"
          src={require(`../../resources/img/${props.imgSrcLarge}`)}
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
