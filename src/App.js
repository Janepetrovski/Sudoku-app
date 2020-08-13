import React from "react";
import "./App.css";
import Gamebox from "./Containers/Game_box/Gamebox";
import Navbar from "./Components/Navbar/Navbar";
import Gamerules from "./Components/Gamerules/Gamerules";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <hr className="hr_class"></hr>
      <Gamebox></Gamebox>
      <Gamerules></Gamerules>
      <Footer></Footer>
    </div>
  );
}

export default App;
