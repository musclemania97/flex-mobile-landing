import React from "react";
import styled from "styled-components";

import "./App.css";

import Header from "./Pages/Header";
import Page1 from "./Pages/Page1";
import Page2 from "./Pages/Page2";
import Page3 from "./Pages/Page3";

function App() {
  return (
    <div>
      <Header />
      <Page1 />
      <Page2 />
      <Page3 />
    </div>
  );
}

export default App;
