import styles from "./Video.module.scss";

const Video = function (props) {
  return (
    <div className={styles["bg-video"]}>
      <video className={styles["bg-video__content"]} autoPlay muted loop>
        {props.children}
        Sorry, your browser is not supported.
      </video>
    </div>
  );
};

export default Video;
