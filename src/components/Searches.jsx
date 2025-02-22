import { useEffect } from "react";

import MovieSilider from "./MovieSilider";
import useFetch from "../hooks/useFetch";

export default function Searches() {
 
  useEffect(() => {
    // handleget();
  }, []);

  const { datas,loading,error } = useFetch(
    `${import.meta.env.VITE_BASE_URL_Airing_Today}api_key=${
      import.meta.env.VITE_API_KEY
    }`
  );
  console.log("data of personal hooks seaches", datas);

  // const handleget = () => {
  //   try {
  //     getMovie(
  //       `${import.meta.env.VITE_BASE_URL_Airing_Today}api_key=${
  //         import.meta.env.VITE_API_KEY
  //       }`
  //     ).then((data) => {
  //       if (data) {
  //         const newData = data.map((item) => {
  //           return { ...item, favorie: false };
  //         });
  //         setSearches(newData);
  //         setLoading(false);
  //       }
  //     });
  //   } catch (Error) {
  //     setEror(Error.message);
  //   }
  // };

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
      <MovieSilider movies={datas}>Top Searches</MovieSilider>
    </div>
  );
}
