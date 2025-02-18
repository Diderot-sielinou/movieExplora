import { useEffect, useState, useContext } from "react";
import { DataContext } from "../context/context";
import { getMovie } from "../api";
import MovieSilider from "./MovieSilider";

export default function Searches() {
  const [loading, setLoading] = useState(true);
  const [error, setEror] = useState(null);
  const { searches, setSearches } = useContext(DataContext);

  useEffect(() => {
    handleget();
  }, []);

  const handleget = () => {
    try {
      getMovie(
        `${import.meta.env.VITE_BASE_URL_Airing_Today}api_key=${
          import.meta.env.VITE_API_KEY
        }`
      ).then((data) => {
        if (data) {
          const newData = data.map((item) => {
            return { ...item, favorie: false };
          });
          setSearches(newData);
          setLoading(false);
        }
      });
    } catch (Error) {
      setEror(Error.message);
    }
  };

  if (loading) {
    return (
      <div className="w-full text-4xl text-white text-center">
        chargent en cour ......
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full text-4xl text-red-600 text-center">{error}</div>
    );
  }

  return (
    <div>
      <MovieSilider movies={searches} >
        Top Searches
      </MovieSilider>
    </div>
  );
}
