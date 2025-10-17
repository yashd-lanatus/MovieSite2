import { createContext, useState } from "react";
import { moviesList } from "../config/moviesList";


export const MoviesContext = createContext()



function MoviesContextProvider({children}) {
  const [allMovies, setAllMovies] = useState(moviesList);

  


  // console.log(searchMovie,'from contextttt');


  // handle sorting 

  const handleAToZ = () => {
    setAllMovies([...allMovies].sort((a, b) => a.title.localeCompare(b.title)))
    
    console.log("Sorted A-Z");
  };
  const handleZToA = () => {
    setAllMovies([...allMovies].sort((a, b) => b.title.localeCompare(a.title)))
    console.log("Sorted Z-A");
  };




//   const handleAToZ = () => {
//     allMovies.sort((a, b) => a.title.localeCompare(b.title));
//     // console.log(moviesList.sort((a,b)=> a.title.localeCompare(b.title)));
//     // console.log(moviesList);
//     //   setAllMovies(allMovies);
//     setSortAToZ(allMovies);
//     console.log("Sorted A-Z");
//     // if (sortAToZ.length > 0){
//     //     setAllMovies(sortAToZ)
//     // }
//   };

//   const handleZToA = () => {
//     allMovies.sort((a, b) => b.title.localeCompare(a.title));
//     //   setAllMovies(allMovies);
//     setSortZToA(allMovies);
//     console.log("Sorted Z-A");
//     // if (sortZToA.length > 0){
//     //     setAllMovies(sortZToA)
//     // }
//   };



const [searchMovie, setSearchMovie] = useState([]);

  // handle search form navbar

  const handleSearch = (e) => {
    moviesList.map((movie) => {
      movie?.title
        .toLowerCase()
        .split(" ")
        .find((item) => item === e)
        ? searchMovie.push(movie)
        : setSearchMovie([]);
    });
    //   console.log(searchMovies)
    //   setAllMovies(searchMovie)
    //   console.log(e);
    if (e === "") {
      // console.log('e is blank');
      setAllMovies(moviesList);
    } else {
      setAllMovies(searchMovie);
    }
  };


  
  return (
    <MoviesContext.Provider
      value={{
        allMovies,
        searchMovie,
        setSearchMovie,
        handleSearch,
        handleAToZ,
        handleZToA,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
}

export default MoviesContextProvider;