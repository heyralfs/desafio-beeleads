import React from "react";
import GlobalStyle from "./globalStyle";
import Section from "./components/Section";

import BigPremio from "./img/Big-Premio.png";
import WomanRadio from "./img/Woman-Radio.png";
import Form from "./components/Form";
import Video from "./components/Video";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <GlobalStyle />

      <Header />

      <Section className="formSection">
        <img src={BigPremio} style={{ marginRight: "76px" }} />
        <Form />
      </Section>

      <Section className="videoSection">
        <img src={WomanRadio} style={{ transform: "translateY(19px)" }} />
        <Video />
      </Section>

      <Footer />
    </div>
  );
}

export default App;
