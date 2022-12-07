import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projetos from "./components/Projetos";

function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Skills/>
      <Projetos/>
    </div>
  );
}

export default App;
