import Button from "../UI/Button";
import HeadingSecondary from "../UI/Headings/HeadingSecondary";
import HeadingTertiary from "../UI/Headings/HeadingTertiary";
import Paragraph from "../UI/Paragraph";

import styles from "./Popup.module.scss";
import "../../base/_utilities.scss";

const Popup = function () {
  return (
    <div className={styles.popup} id="popup">
      <div className={styles.content}>
        <div className={styles.content__left}>
          <img
            srcSet={`${require(`../../resources/img/nat-8-small.png`)} 300w,
          ${require(`../../resources/img/nat-8.png`)} 1000w,
          ${require(`../../resources/img/nat-8-large.jpg`)} 2000w`}
            size="(max-width: 56.25em) 20vw, (max-width: 37.5em) 40vw, 380px"
            alt="Person on a tour"
            className={styles.img}
            src={require("../../resources/img/nat-8-large.jpg")}
          />
          <img
            srcSet={`${require(`../../resources/img/nat-9-small.png`)} 300w,
          ${require(`../../resources/img/nat-9.png`)} 1000w,
          ${require(`../../resources/img/nat-9-large.jpg`)} 2000w`}
            size="(max-width: 56.25em) 20vw, (max-width: 37.5em) 40vw, 380px"
            alt="Person on a tour"
            className={styles.img}
            src={require("../../resources/img/nat-9-large.jpg")}
          />
        </div>
        <div className={styles.content__right}>
          <a href="#section-tours" className={styles["btn-close"]}>
            &times;
          </a>
          <HeadingSecondary className="u-margin-bottom-small">
            Start booking now
          </HeadingSecondary>
          <HeadingTertiary className="u-margin-bottom-small">
            Important &ndash; Please read these terms before booking
          </HeadingTertiary>
          <Paragraph className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam
            phasellus vestibulum lorem sed risus ultricies tristique nulla. Vel
            pharetra vel turpis nunc eget lorem dolor. Nibh nisl condimentum id
            venenatis a condimentum. Donec massa sapien faucibus et molestie ac
            feugiat. Dui ut ornare lectus sit amet est placerat in egestas.
            Ipsum nunc aliquet bibendum enim facilisis. Porta nibh venenatis
            cras sed felis eget velit aliquet sagittis. Tortor id aliquet lectus
            proin nibh nisl condimentum. Tincidunt augue interdum velit euismod
            in. Lobortis elementum nibh tellus molestie nunc non blandit.
          </Paragraph>
          <Button className="btn--green">Book now</Button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
