import React, { Fragment } from "react";
import 'react-slideshow-image/dist/styles.css'
import './sass/index.scss'
import Slideshow from "./components/Slideshow";
import Landing from "./components/Landing";
import Footer from "./components/Footer";

function App() {
  return (
    <Fragment>
      <Landing />
      <main className="main">
        <Slideshow />
      </main>
      <Footer />
    </Fragment>
  );
}

export default App;
