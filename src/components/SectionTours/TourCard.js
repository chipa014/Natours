import Button from "../UI/Button";
import styles from "./TourCard.module.scss";

const TourCard = function (props) {
  return (
    <div className={styles.card}>
      <div className={`${styles.card__side} ${styles["card__side--front"]}`}>
        <div
          className={`${styles["card__picture"]} ${
            styles[`card__picture--${props.num}`]
          }`}
        >
          &nbsp;
        </div>
        <h4 className={styles["card__heading"]}>
          <span
            className={`${styles["card__heading-span"]} ${
              styles[`card__heading-span--${props.num}`]
            }`}
          >
            {props.heading}
          </span>
        </h4>
        <div className={styles["card__details"]}>
          <ul>
            {props.details.map((detail, i) => (
              <li key={i}>{detail}</li>
            ))}
          </ul>
        </div>
      </div>
      <div
        className={`${styles.card__side} ${styles["card__side--back"]} ${
          styles[`card__side--back-${props.num}`]
        }`}
      >
        <div className={styles["card__cta"]}>
          <div className={styles["card__price-box"]}>
            <p className={styles["card__price-only"]}>Only</p>
            <p className={styles["card__price-value"]}>${props.price}</p>
          </div>
          <Button className="btn--white">Book now!</Button>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
