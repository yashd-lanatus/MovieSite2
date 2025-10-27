import { createContext, useState } from "react";
import { moviesList } from "../config/moviesList";


export const MoviesContext = createContext()



function MoviesContextProvider({children}) {
  const [allMovies, setAllMovies] = useState(moviesList);

  // console.log(searchMovie,'from contextttt');


  // handle sorting

  const [openBtn, setOpenBtn] = useState('');

  const handleAToZ = (btn) => {
    setOpenBtn(btn)
    setAllMovies([...allMovies].sort((a, b) => a.title.localeCompare(b.title)));
    console.log("Sorted A-Z");
  };
  const handleZToA = (btn) => {
    setOpenBtn(btn);
    setAllMovies([...allMovies].sort((a, b) => b.title.localeCompare(a.title)));
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

  
  // handle search form navbar

  const [searchMovie, setSearchMovie] = useState([]);
  
  const handleSearch = (e) => {
    moviesList.map((movie) => {
      movie?.title.toLowerCase().includes(e)
        ? searchMovie.push(movie)
        : setSearchMovie([]);
    });
    if (e === "") {
      setAllMovies(moviesList);
    } else {
      setAllMovies(searchMovie);
    }
    if (searchMovie.length === 0) {
      console.log("Not found");
    }
  };


  // for edit movies

  const updateMovies = (updatedMovies) => {
    setAllMovies((prev) =>
      prev.map((movie) =>
        movie.id === updatedMovies.id ? { ...movie, ...updatedMovies } : movie
      )
    );
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
        updateMovies,
        openBtn,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
}

export default MoviesContextProvider;