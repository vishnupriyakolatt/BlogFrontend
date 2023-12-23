import { Routes,Route } from "react-router-dom";
import React from "react";

import Home from "./pages/Home";
import NavBar from "./components/Header/NavBar";
import SinglePage from "./pages/SinglePage";
import Add from "./components/AddBlog/Add";
import Update from "./components/Update/Update";
import Register from "./pages/Register";
import Login from "./pages/Login";



function App() {

  return (
 <React.Fragment>
  <header>
<NavBar/>
  </header>
  <main>
    <Routes>
      <Route path="/" element={<Home/>}/>


      <Route path="/signup" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>



      <Route path="/details" element={<SinglePage/>}/>
      <Route path="/create" element={<Add/>}/>
      <Route path="/update" element={<Update/>}/>
      
    </Routes>

  </main>



 </React.Fragment>
  );
}

export default App;
