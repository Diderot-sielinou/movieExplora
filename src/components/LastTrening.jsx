import NumberCartSilider from "./NumberCartSilider";
import { useEffect } from "react";
// import { getMovie } from "../api";
import useFetch from "../hooks/useFetch";

export default function LastTrening() {

  useEffect(() => {
    // handleget();
  }, []);

  const { datas, loading, error } = useFetch(
    `${import.meta.env.VITE_BASE_URL_TRENDING}api_key=${
      import.meta.env.VITE_API_KEY
    }`
  );
  

  // const handleget = () => {
  //   try {
  //     getMovie(
  //       `${import.meta.env.VITE_BASE_URL_TRENDING}api_key=${
  //         import.meta.env.VITE_API_KEY
  //       }`
  //     ).then((data) => {
  //       if (data) {
  //         const newData = data.map((item) => {
  //           return { ...item, favorie: false };
  //         });
  //         // setTreding(newData);
  //         setData(newData.slice(0, 10));
  //         setLoading(false);
  //       }
  //     });
  //   } catch (Error) {
  //     setEror(Error.message);
  //   }
  // };

  if (loading) {
    return (
      <div className="w-full text-4xl text-center text-amber-400">
        chargent en cour ......
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full text-4xl text-center text-red-600">{error}</div>
    );
  }
  return (
    <div>
      <NumberCartSilider treding={datas.slice(0,10)} />
    </div>
  );
}
