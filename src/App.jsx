window.reactRouterExperimentalFlags = { v7_startTransition: true };

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.css";
// import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { MovieData } from "./context/context";
import DetailPage from "./pages/DetailPage";
import Favorie from "./pages/Favorie";
import SearchPage from "./pages/SearchPage";
// import useFetch from "./hooks/useFetch";

function App() {
  // console.log(import.meta.env. VITE_BASE_URL_Airing_Today );
  // const { data, loading, error } = useFetch(`${import.meta.env.VITE_BASE_URL_TRENDING}api_key=${import.meta.env.VITE_API_KEY}`);
  // console.log(data,error,loading)
  return (
    <>
      <MovieData>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/detail/:id" element={<DetailPage />} />
            <Route path="/favorie" element={<Favorie />} />
            <Route path="/search/:query" element={<SearchPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </MovieData>
    </>
  );
}

export default App;
