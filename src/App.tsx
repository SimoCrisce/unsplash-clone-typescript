import "./index.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Images from "./pages/Images";
import SingleImage from "./pages/SingleImage";
import UserDetails from "./pages/UserDetails";
import { useState } from "react";

function App() {
  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/images" element={<Images showModal={showModal} setShowModal={setShowModal} />} />
        <Route path="/image/:id" element={<SingleImage />} />
        <Route path="/user/:username" element={<UserDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
