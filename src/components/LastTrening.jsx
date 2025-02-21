import NumberCartSilider from "./NumberCartSilider";
import { useEffect, useState } from "react";
import { getMovie } from "../api";
import useFetch from "../hooks/useFetch";

export default function LastTrening() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setEror] = useState(null);
  // const { treding, setTreding } = useContext(DataContext);
  useEffect(() => {
    handleget();
  }, []);

  const { datas } = useFetch(
    `${import.meta.env.VITE_BASE_URL_TRENDING}api_key=${
      import.meta.env.VITE_API_KEY
    }`
  );
  console.log("data of personal hooks",datas)

  const handleget = () => {
    try {
      getMovie(
        `${import.meta.env.VITE_BASE_URL_TRENDING}api_key=${
          import.meta.env.VITE_API_KEY
        }`
      ).then((data) => {
        if (data) {
          const newData = data.map((item) => {
            return { ...item, favorie: false };
          });
          // setTreding(newData);
          setData(newData);
          setLoading(false);
        }
      });
    } catch (Error) {
      setEror(Error.message);
    }
  };

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
      <NumberCartSilider treding={data} />
    </div>
  );
}
