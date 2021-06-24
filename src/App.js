import "./App.css";
import React from "react";
import Fade from "react-reveal/Fade";
import { Parallax } from "react-parallax";
import Container from "react-bootstrap/Container";
import MyCarousl from "./components/my-carousl/my-carouslcomponent";
import MyTitleMessage from "./components/title-message/title-messagecomponent";
import ScrollDown from "./components/scroll-down/scroll-downcomponent";
import MyNavbar from "./components/navbar/my-navbar";
import About from "./pages/about/aboutcomponent";

const App = () => {
  return (
    <div>
      <MyNavbar />
      <MyCarousl />
      <MyTitleMessage />
      <ScrollDown />

      <div className="App" style={{ position: "relative" }}>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={require("./assets/background/background.webp")}
          bgImageAlt=""
          strength={-200}
        >
          <Container className="container-box rounded">
            <Fade duration={500}>
              <About />
            </Fade>
          </Container>
        </Parallax>
      </div>
    </div>
  );
};

export default App;
