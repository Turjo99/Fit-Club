import { useEffect, useState } from "react";
import "./App.css";

import Exercises from "./Components/Exercises/Exercises";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Question from "./Components/Questions/Question";



function App() {

  return (
    <div className="App">
      <Header></Header>
    
      <Exercises></Exercises>
     
      <Question></Question>

      <Footer></Footer>
      
    </div>
  );
}

export default App;
