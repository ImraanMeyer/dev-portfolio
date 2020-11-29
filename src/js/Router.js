import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

import '../scss/main.scss'
import Navbar from "./components/Navbar/Navbar";

const Router = () => {
  return (
    <div>
      <Navbar />
      {/* <AnchorLink href="#things">Things</AnchorLink>
      <AnchorLink href="#stuff">Stuff</AnchorLink>

      <section id="things">
        <h2>Things</h2>
      </section>
      <section id="stuff">
        <h2>Stuff</h2>
      </section> */}
    </div>
  );
};

export default Router;
