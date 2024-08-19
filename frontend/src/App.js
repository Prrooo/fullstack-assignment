import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./sections/Footer";
import HeroSection from "./sections/HeroSection";
import MainSection from "./sections/MainSection";

function App() {
  const [cards,setCards]=useState([]);
  return <div className="App">
   <Navbar/>
   <HeroSection cards={cards} setCards={setCards}/>
   <MainSection cards={cards} setCards={setCards}/>
   <Footer/>
  </div>;
}

export default App;
