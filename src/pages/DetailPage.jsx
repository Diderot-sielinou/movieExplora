import Detailbanner from "../components/Detailbanner";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieSilider from "../components/MovieSilider";

export default function DetailPage() {
  const { id } = useParams();
  const [movieDetail, setMovieDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setEror] = useState(null);
  const [loadingSimilar, setLoadingSimilar] = useState(true);
  const [errorSimilar, setErorSimilar] = useState(null);
  const [similar, setSimilar] = useState(null);

  useEffect(() => {
    const getDetailById = async (movieId) => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/tv/${movieId}?api_key=${
            import.meta.env.VITE_API_KEY
          }&language=fr-FR`
        );
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des détails du film");
        }
        const movieDetails = await response.json();
        const newData = { ...movieDetails, favorie: false };
        setLoading(false);
        setMovieDetail(newData);
      } catch (error) {
        setEror(error.message);
      } finally {
        setLoading(false);
      }
    };
    const getsimilar = async (movieId) => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/tv/${movieId}/similar?api_key=${
            import.meta.env.VITE_API_KEY
          }`
        );
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des détails du film");
        }
        const movieDetails = await response.json();
        const newData = movieDetails.results.map((item) => {
          return { ...item, favorie: false };
        });
        setLoading(false);
        setSimilar(newData);
      } catch (error) {
        setErorSimilar(error.message);
      } finally {
        setLoadingSimilar(false);
      }
    };
    getDetailById(id);
    getsimilar(id);
  }, [id]);

  const handleAddFavorie = (movie) => {
    const tabFavorie = localStorage.getItem("localtabFavorie");
    if (tabFavorie) {
      const jsTabFavorie = JSON.parse(localStorage.getItem("localtabFavorie"));
      // console.log("tablocal", jsTabFavorie);
      const index = jsTabFavorie.findIndex((item) => item.id === movie.id);
      if (index >= 0) {
        alert("this movie is alredy in your favorie list");
      } else {
        const tab = JSON.parse(localStorage.getItem("localtabFavorie"));
        const favorieTab = [...tab, { ...movie, favorie: true }];
        localStorage.setItem("localtabFavorie", JSON.stringify(favorieTab));
        alert("add succes");
      }
    } else {
      localStorage.setItem(
        "localtabFavorie",
        JSON.stringify([{ ...movie, favorie: true }])
      );
      alert("add succes");
    }
  };

  if (loading) {
    return (
      <div className="w-full pt-20 text-4xl text-center text-white">
        chargent en cour ......
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full pt-20 text-4xl text-center text-red-600">
        {error}
      </div>
    );
  }

  return (
    <div className="">
      <Detailbanner movie={movieDetail} addFavorie={handleAddFavorie} />
      {similar?.length > 0 ? (
        <MovieSilider movies={similar}>More Like this</MovieSilider>
      ) : (
        <h2 className="text-4xl text-center text-white">no similar movie</h2>
      )}
      {/* <MovieSilider movies={similar}>More Like this</MovieSilider> */}
    </div>
  );
}
