import ButtonSmall from "../UI/ButtonSmall";
import HeadingSecondary from "../UI/Headings/HeadingSecondary";
import Row from "../../layout/Grid/Row";
import Story from "./Story";
import Video from "../UI/Video";

import styles from "./SectionStories.module.scss";
import "../../base/_utilities.scss";

import videoSourceMp4 from "../../resources/img/video.mp4";
import videoSourceWebm from "../../resources/img/video.webm";

const SectionStories = function () {
  return (
    <section className={styles["section-stories"]} id="section-stories">
      <Video>
        <source src={videoSourceMp4} type="video/mp4" />
        <source src={videoSourceWebm} type="video/webm" />
        Sorry, your browser is not supported.
      </Video>
      <div className="u-center-text u-margin-bottom-big">
        <HeadingSecondary>We make people genuinely happy</HeadingSecondary>
      </div>
      <Row>
        <Story
          heading="I had the best week ever with my family"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Molestie a iaculis at erat pellentesque adipiscing commodo elit. Augue ut lectus arcu bibendum at varius vel pharetra vel. Est ante in nibh mauris."
          author="Mary Smith"
          imgsrc="nat-8.jpg"
        />
      </Row>
      <Row>
        <Story
          heading="Wow! My life is completely different now"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Molestie a iaculis at erat pellentesque adipiscing commodo elit. Augue ut lectus arcu bibendum at varius vel pharetra vel. Est ante in nibh mauris."
          author="Jack Wilson"
          imgsrc="nat-9.jpg"
        />
      </Row>
      <div className="u-center-text">
        <ButtonSmall>Read all stories &rarr;</ButtonSmall>
      </div>
    </section>
  );
};

export default SectionStories;
