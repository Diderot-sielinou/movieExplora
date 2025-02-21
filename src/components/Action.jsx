import { useEffect } from "react";
import MovieSilider from "./MovieSilider";
import useFetch from "../hooks/useFetch";

export default function Action() {
  useEffect(() => {
    // handleget();
  }, []);

  const { datas, loading, error } = useFetch(
    `${import.meta.env.VITE_BASE_On_The_Air}api_key=${
      import.meta.env.VITE_API_KEY
    }`
  );

  // const handleget = () => {
  //   try {
  //     getMovie(
  //       `${import.meta.env. VITE_BASE_On_The_Air}api_key=${
  //         import.meta.env.VITE_API_KEY
  //       }`
  //     ).then((data) => {
  //       if (data) {
  //         const newData = data.map((item) => {
  //           return { ...item, favorie: false };
  //         });
  //         setAction(newData);
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
      <MovieSilider delay={5500} movies={datas}>Action</MovieSilider>
    </div>
  );
}
