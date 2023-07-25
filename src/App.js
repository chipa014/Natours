import { Fragment } from "react";
import Header from "./components/Header/Header";
import SectionAbout from "./components/SectionAbout/SectionAbout";
import SectionFeatures from "./components/SectionFeatures/SectionFeatures";
import SectionTours from "./components/SectionTours/SectionTours";
import SectionStories from "./components/SectionStories/SectionStories";
import SectionBooking from "./components/SectionBooking/SectionBooking";

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <SectionAbout />
        <SectionFeatures />
        <SectionTours />
        <SectionStories />
        <SectionBooking />
      </main>
    </Fragment>
  );
}

export default App;
