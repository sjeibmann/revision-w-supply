import React from 'react';
import './App.css';
import Header from "./components/Header";
import Title from "./components/Title";
import Masthead from "./components/Masthead";
import ValueBlurb from "./components/ValueBlurb";
import Features from "./components/Feature/Features";
import Contact from "./components/Contact";
import styled from "styled-components";

const AppGrid = styled.div`
  display: grid;
  // grid-template-columns: ()

`;

function App() {
  return (
    <div className="App">
      <AppGrid>
        <Header />
        <Title />
        <Masthead />
        <ValueBlurb />
        <Features />
        <Contact />
      </AppGrid>
    </div>
  );
}

export default App;
