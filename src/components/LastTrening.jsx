import NumberCartSilider from "./NumberCartSilider";
import { useContext } from "react";
import { DataContext } from "../context/context";
import { useEffect, useState } from "react";
import { getMovie } from "../api";

export default function LastTrening() {
  // const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setEror] = useState(null);
  const { treding, setTreding } = useContext(DataContext);
  useEffect(() => {
    handleget();
  }, []);

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
          setTreding(newData);
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
      <NumberCartSilider treding={treding} />
    </div>
  );
}
