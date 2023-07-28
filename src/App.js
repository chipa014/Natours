import { Fragment } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Popup from "./components/Popup/Popup";
import SectionAbout from "./components/SectionAbout/SectionAbout";
import SectionBooking from "./components/SectionBooking/SectionBooking";
import SectionFeatures from "./components/SectionFeatures/SectionFeatures";
import SectionStories from "./components/SectionStories/SectionStories";
import SectionTours from "./components/SectionTours/SectionTours";

function App() {
  return (
    <Fragment>
      <Navigation />
      <Header />
      <main>
        <SectionAbout />
        <SectionFeatures />
        <SectionTours />
        <SectionStories />
        <SectionBooking />
      </main>
      <Footer />
      <Popup />
    </Fragment>
  );
}

export default App;
