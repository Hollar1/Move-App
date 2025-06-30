import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./screens/home/Home";
import Favorites from "./screens/favorites/Favorites";
import NavBar from "./components/navBar/NavBar";

function App() {
  return (
   <main>
    <NavBar/>
     <div>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
     </div>
   </main>
  );
}

export default App;
