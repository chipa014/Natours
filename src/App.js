import { Fragment } from "react";
import Header from "./components/Header/Header";
import SectionAbout from "./components/SectionAbout/SectionAbout";
import SectionFeatures from "./components/SectionFeatures/SectionFeatures";

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <SectionAbout />
        <SectionFeatures />
      </main>
    </Fragment>
  );
}

export default App;
