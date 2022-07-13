import axios from "axios";


// export const getOnAirToday = async (pageNumber = 1) => {
//     try {
//       const response = await axios.get(
//           `https://api.themoviedb.org/3/${url}?api_key=53939b3da3d575c42c212fb77c52c5a5&language=en-US&page=${pageNumber}`)
//       return response.data;
//     } catch (e) {
//       console.log(e)
//     }
//   }     https://api.themoviedb.org/3/person/popular?api_key=53939b3da3d575c42c212fb77c52c5a5&language=en-US&page=1


  export const getOnAirToday = async url => {
    const API_URL = `https://api.themoviedb.org/3/${url}?api_key=53939b3da3d575c42c212fb77c52c5a5`;
  
    let response = await fetch(
      API_URL, {
        method: 'GET'
      }
      );
    response = response.json();
    return response;
  };
   