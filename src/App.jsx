import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home";
import About from "./pages/About";
import Booking from "./pages/Booking";
import Contact from "./pages/Contact";
import Doctors from "./pages/Doctors";

function App() {


  return (
    <>

      <BrowserRouter>

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/booking/:doctorId" element={<Booking />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />



        </Routes>


      </BrowserRouter>

    </>
  )
}

export default App
