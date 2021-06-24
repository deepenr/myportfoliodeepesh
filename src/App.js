import "./App.css";
import React from "react";
import MyCarousl from "./components/my-carousl/my-carouslcomponent";
import MyTitleMessage from "./components/title-message/title-messagecomponent";
import ScrollDown from "./components/scroll-down/scroll-downcomponent";
import TypeWriterEffect from "react-typewriter-effect";

// components
import MyNavbar from "./components/navbar/my-navbar";

const App = () => {
  return (
    <div>
      <MyNavbar />
      <MyCarousl />
      <MyTitleMessage />
    </div>
  );
};

export default App;
