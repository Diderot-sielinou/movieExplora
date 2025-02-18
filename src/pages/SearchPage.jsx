import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { getMovie } from "../api";
import MoviesCart from "../components/MoviesCart";

export default function SearchPage() {
  const [searchData, setSearchData] = useState([]);
  let { query } = useParams();
  useEffect(() => {
    handleSearch();
  }, [query]);

  const handleSearch = () => {
    getMovie(
      `https://api.themoviedb.org/3/search/movie?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=en-US&query=${query}&include_adult=false`
    )
      .then((data) => {
        const newData = data.map((item) => {
          return { ...item, favorie: false };
        });
        setSearchData(newData);
      })
      .catch((error) => {
        console.warn(error);
      });
  };

  return (
    <div className="text-white min-h-screen">
      <main className="container mx-auto px-4 pt-20 mb-6">
        {" "}
        {/* pt-20 pour compenser le header fixe */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {searchData.map((movie) => (
            <MoviesCart key={movie.id} movie={movie} />
           
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          {/* <di
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        /> */}
        </div>
      </main>
    </div>
  );
}
