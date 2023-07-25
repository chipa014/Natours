import { Fragment } from "react";
import Header from "./components/Header/Header";
import SectionAbout from "./components/SectionAbout/SectionAbout";
import SectionFeatures from "./components/SectionFeatures/SectionFeatures";
import SectionTours from "./components/SectionTours/SectionTours";
import SectionStories from "./components/SectionStories/SectionStories";

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <SectionAbout />
        <SectionFeatures />
        <SectionTours />
        <SectionStories />
      </main>
    </Fragment>
  );
}

export default App;
