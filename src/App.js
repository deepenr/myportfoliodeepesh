import "./App.css";
import React from "react";
import Fade from "react-reveal/Fade";
import { Parallax } from "react-parallax";
import Container from "react-bootstrap/Container";
import MyCarousl from "./components/my-carousl/my-carouslcomponent";
import MyTitleMessage from "./components/title-message/title-messagecomponent";
// import ScrollDown from "./components/scroll-down/scroll-downcomponent";
import MyNavbar from "./components/navbar/my-navbar";
import Slide from "react-reveal/Slide";
import About from "./pages/about/aboutcomponent";
import Skills from "./pages/skills/skill.component";
import Experience from "./pages/experience/experience.component";
import ProjectTimeline from "./components/project-timline/project-timline.component";
import ContactForm from "./pages/contact-form/contact-form-component";
import Footer from "./components/footer/footer.component";
import Particles from "react-particles-js";
import particlesOptions from "./particles";

const App = () => {
  return (
    <div className="App" style={{ position: "relative" }}>
      <MyCarousl />
      <MyTitleMessage />
      <MyNavbar />
      <Particles
        className="particles particles-box"
        params={particlesOptions}
      />

      <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={require("./assets/background/background.webp")}
          bgImageAlt=""
          strength={-200}
        >
          <div>
            <Container className="container-box rounded">
              <Fade duration={500}>
                <About />
              </Fade>
            </Container>
          </div>
        </Parallax>
      </div>
      <div>
        {" "}
        <Container className="container-box rounded">
          <Slide bottom duration={500}>
            <hr />
            <Skills />
          </Slide>
        </Container>
      </div>

      <div>
        <Container className="container-box rounded">
          <Fade duration={500}>
            <hr />

            <Experience />
          </Fade>
        </Container>
      </div>

      <div>
        {" "}
        <Container className="container-box rounded">
          <Slide bottom duration={500}>
            <hr />
            <ProjectTimeline />
          </Slide>
        </Container>
      </div>

      <div>
        <Container className="container-box rounded">
          <Fade duration={500}>
            <hr />

            <ContactForm />
          </Fade>
        </Container>
      </div>
      <hr />
      <Footer />
    </div>
  );
};

export default App;
