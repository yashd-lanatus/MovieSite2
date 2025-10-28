import { createContext, useState } from "react";
import { moviesList } from "../config/moviesList";


export const MoviesContext = createContext()

function MoviesContextProvider({children}) {
  const [allMovies, setAllMovies] = useState(moviesList);
  
  // handle sorting
  
  const [openBtn, setOpenBtn] = useState('');
  
  const handleSort = (action) => {
    switch (action){
      case 'A-Z':
        setOpenBtn('A-Z');
        setAllMovies([...allMovies].sort((a, b) => a.title.localeCompare(b.title)));
        break;
      case 'Z-A':
        setOpenBtn('Z-A');
        setAllMovies([...allMovies].sort((a, b) => b.title.localeCompare(a.title)));
        break;
        case 'RESET':
        setOpenBtn('RESET');
        setAllMovies(moviesList)
        break;
      }
    }
    
    // handle search

    const [searchMovie, setSearchMovie] = useState([]);
    const [baseMovie, setBaseMovie] = useState(moviesList)

    const handleSearch = (e) => {
      if (e === ""){
        setAllMovies(baseMovie)
      } else {
        setAllMovies(
          baseMovie.filter((movie) => movie.title.toLowerCase().includes(e))
        );
      }
    }
    
    // handle edit movies
    
    const updateMovies = (updatedMovies) => {
      setBaseMovie((prev) =>
        prev.map((movie) =>
          movie.id === updatedMovies.id ? { ...movie, ...updatedMovies } : movie
        )
      );
      setAllMovies((prev) =>
        prev.map((movie) =>
          movie.id === updatedMovies.id ? { ...movie, ...updatedMovies } : movie
        )
      );
      return updatedMovies;
    };
    
    return (
      <MoviesContext.Provider
      value={{
        allMovies,
        searchMovie,
        setSearchMovie,
        handleSearch,
        handleSort,
        updateMovies,
        openBtn,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
}

export default MoviesContextProvider;