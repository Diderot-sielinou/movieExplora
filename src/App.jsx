import { BrowserRouter, Routes, Route } from "react-router";
import './App.css'
// import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
    <Footer/>
  </BrowserRouter>
    </>
  )
}

export default App
