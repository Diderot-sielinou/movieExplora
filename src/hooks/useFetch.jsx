import { useState, useEffect } from "react";

export default function useFetch(url) {
  const [datas, setData] = useState(null);
  const [loadin, setLoadin] = useState(true);
  const [error, setEror] = useState(null);
 
  useEffect(() => {
    const handleFetch = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("network response was not ok");
        }
        const data = await response.json();
        const newData = data.results.map((item)=>{
          return {...item,favorie:false}
        })
        console.log(newData)
        setData(newData);
      } catch (Error) {
        setEror(Error.message);
      } finally {
        setLoadin(false);
      }
    };
    handleFetch()
  }, [url]);

  return {
    datas,loadin,error
  };
}
