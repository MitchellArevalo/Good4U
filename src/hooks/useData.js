// <<<<<<< HEAD:src/hooks/useData.js
// import { useEffect, useState } from "react";
// import { getData } from "../services/getData";
// export const useData = ({url}) => {
//   const [data, setData] = useState([]);
//   const [isError, setIsError] = useState(false);
//   const [loading,setLoading]=useState(true)
  
  
//   const getProducts = async () => {
//     setLoading(true)
//     try {
//       const data = await getData(url);
//       setData(data.results);
//     } catch (e) {
//       setIsError(e);
//       console.log(e);
//     } finally{ 
//         setLoading(false)
//     }
//   };

//   useEffect(()=>getProducts, []);

//   return { data, isError,loading };
// };
// =======
import { useEffect, useState } from "react";
import { getData } from "../services/getData";
export const useData = ({url}) => {
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(false);
  const [loading,setLoading]=useState(true)
  
  
  const getProducts = async () => {
    setLoading(true)
    try {
      const data = await getData(url);
      setData(data.results);
    } catch (e) {
      setIsError(e);
      console.log(e);
    } finally{ 
        setLoading(false)
    }
  };

  useEffect(()=>getProducts, []);

  return { data, isError,loading };
};
// >>>>>>> bf53f8c6aeed5a99eaa1e12247766abb71a1add1:code/frontend/src/hooks/useData.js
