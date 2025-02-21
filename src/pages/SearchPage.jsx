import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { getMovie } from "../api";
import MoviesCart from "../components/MoviesCart";


function Pagination({ totalPages,  currentPage, onPageChange }) {
  

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div>
      {currentPage > 1 && (
        <button onClick={() => onPageChange(currentPage - 1)}>Précédent</button>
      )}
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => onPageChange(number)}
          className={`${currentPage === number ? 'active border-2 border-red-500 ' : ''} text-2xl text-white p-1 rounded-2xl hover:bg-red-500 hover:border-white`}
        >
          {number}
        </button>
      ))}
      {currentPage < totalPages && (
        <button onClick={() => onPageChange(currentPage + 1)}>Suivant</button>
      )}
    </div>
  );
}

export default function SearchPage() {
  const [searchData, setSearchData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  let { query } = useParams();

  useEffect(() => {
    handleSearch();
    console.log(totalPages)
  }, [query,currentPage]);

  const handleSearch = () => {
    getMovie(
      `https://api.themoviedb.org/3/search/movie?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=en-US&query=${query}&page=${currentPage}`
    )
      .then((data) => {
        const newData = data.map((item) => {
          return { ...item, favorie: false };
        });
        setSearchData(newData);
        setTotalPages(5)
      })
      .catch((error) => {
        console.warn(error);
      });
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  if(searchData.length<1){
    return <h2 className=" pt-20 min-h-screen text-3xl text-center text-white my-3.5">
      no result for this search
    </h2>
  }

  return (
    <div className="text-white min-h-screen">
      <main className="container mx-auto px-4 pt-20 mb-6">
        <h2 className="text-3xl text-center text-white my-3.5">search results </h2>
        {/* pt-20 pour compenser le header fixe */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {searchData.map((movie) => (
            <MoviesCart key={movie.id} movie={movie} />
           
          ))}
        </div>
        <div className="mt-8 flex justify-center text-white">
          <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange}  />
        </div>
      </main>
    </div>
  );
}
