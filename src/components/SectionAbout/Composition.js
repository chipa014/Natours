import styles from "./Composition.module.scss";

const Composition = function () {
  return (
    <div className={styles.composition}>
      <img
        src={require("../../resources/img/nat-1-large.jpg")}
        srcSet={`${require("../../resources/img/nat-1.jpg")} 300w, ${require("../../resources/img/nat-1-large.jpg")} 1000w`}
        sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
        alt="A serene lake in the forest, mountains in the distance"
        className={`${styles.photo} ${styles["photo--p1"]}`}
      />
      <img
        src={require("../../resources/img/nat-2-large.jpg")}
        srcSet={`${require("../../resources/img/nat-2.jpg")} 300w, ${require("../../resources/img/nat-2-large.jpg")} 1000w`}
        sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
        alt="Person biking along a beautiful hill landscape"
        className={`${styles.photo} ${styles["photo--p2"]}`}
      />
      <img
        src={require("../../resources/img/nat-3-large.jpg")}
        srcSet={`${require("../../resources/img/nat-3.jpg")} 300w, ${require("../../resources/img/nat-3-large.jpg")} 1000w`}
        sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
        alt="Person on a mountain trail"
        className={`${styles.photo} ${styles["photo--p3"]}`}
      />
    </div>
  );
};

export default Composition;
