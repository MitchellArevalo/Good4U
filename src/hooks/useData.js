import { useEffect, useState } from "react";
import { getData } from "../services/getData";
export const useData = () => {
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(false);
  const [loading,setLoading]=useState(true)
  
  
  const getProducts = async () => {
    setLoading(true)
    try {
      const data = await getData();
      setData(data.results);
    } catch (e) {
      setIsError(e);
      console.log(e);
    } finally{ 
        setLoading(false)
    }
  };

  useEffect(() => getProducts, []);

  return { data, isError,loading };
};
