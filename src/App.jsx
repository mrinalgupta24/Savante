import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Signup from "./components/SignUp/Signup";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>

        <Routes>
          <Route exact path="/home" element={<Home />} />
        </Routes>

        <Routes>
          <Route exact path="/login" element={<Login />} />
        </Routes>

        <Routes>
          <Route exact path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
