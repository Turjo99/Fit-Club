import { useEffect, useState } from "react";
import "./App.css";
import Details from "./Components/Details/Details";
import Exercises from "./Components/Exercises/Exercises";
import Header from "./Components/Header/Header";



function App() {

  return (
    <div className="App">
      <Header></Header>
      <main className="main">
      <Exercises></Exercises>
      <Details></Details>
      </main>
      
    </div>
  );
}

export default App;
