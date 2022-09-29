import { useEffect, useState } from "react";
import "./App.css";



import Header from "./Components/Header/Header";
import Exercises from "./Components/Exercises/Exercises";
import Question from "./Components/Questions/Question";
import Footer from "./Components/Footer/Footer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
 

  return (
    <div className="App">
      <Header></Header>

      
        <ToastContainer />
    
      <Exercises></Exercises>
     
      <Question></Question>

      <Footer></Footer>
      
    </div>
  );
}

export default App;
