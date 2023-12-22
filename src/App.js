import { Routes,Route } from "react-router-dom";
import React from "react";
import NavBar from "./components/Components/Header/NavBar";
import Add from "./components/Components/AddBlog/Add";



function App() {

  return (
 <React.Fragment>
  <header>
  {/* <Headers/> */}
  </header>
  <main>
    <Routes>
      <Route path="/" element={<NavBar/>}/>
      <Route path="/b" element={<Add/>}/>
    
    </Routes>

  </main>



 </React.Fragment>
  );
}

export default App;
