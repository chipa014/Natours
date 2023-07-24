import { Fragment } from "react";
import Header from "./components/Header/Header";
import SectionAbout from "./components/SectionAbout/SectionAbout";
import SectionFeatures from "./components/SectionFeatures/SectionFeatures";
import SectionTours from "./components/SectionTours/SectionTours";

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <SectionAbout />
        <SectionFeatures />
        <SectionTours />
      </main>
    </Fragment>
  );
}

export default App;
