import { AppBar, Box, Button, Container, IconButton, Switch, Toolbar, Typography } from "@mui/material";
import App from "../App";
import { Link } from "react-router-dom";
import { useContext, 
  // useState 
} from "react";
// import { moviesList } from "../config/moviesList";
import { MoviesContext } from "../context/MoviesContextProvider";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import { Brightness4, Brightness7 } from "@mui/icons-material";


function Navbar({isDarkMode, setIsDarkMode}) {

  //  use movies context

  const { handleSearch, } = useContext(MoviesContext);



  // const [searchMovie, setSearchMovie] = useState([])

    // const handleSearch = (e) => {
    //   // console.log(e);
    //   moviesList.map((movie)=>{
    //     // console.log(movie?.title.split(' ').find(item => item === e));
    //     movie?.title
    //       .toLowerCase()
    //       .split(" ")
    //       .find((item) => item === e)
    //       // ? console.log(movie?.title)
    //       ? searchMovie.push(movie?.title)
    //       : setSearchMovie([]);
    //   })

    //   console.log(searchMovie);

    // }


    const handleToggle = () => setIsDarkMode(!isDarkMode)

    return (
      <>
        <AppBar component="nav">
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <Typography variant="h5" component="div" sx={{ padding: "15px" }}>
              {/* <Link to='/home' style={{color:'white', textDecoration:'none'}} >MovieSite</Link> */}
              <a href="/home" style={{ color: "white", textDecoration: "none" }}> <LiveTvIcon /> MovieSite </a>
            </Typography>
            <Toolbar>
              <input
                type="text"
                placeholder="Search Movie..."
                style={{ padding: 5, margin: 5 }}
                // onChange={(e)=>handleSearch(e.target.value)}
                onChange={(e) => handleSearch(e.target.value)}
              />
              <Button color="white" component={Link} to="/home">
                Home
              </Button>
              <Button color="white" component={Link} to="/edit">
                {" "}
                Edit
              </Button>
              <IconButton color="inherit" onClick={handleToggle} >
                {isDarkMode ? <Brightness4 /> : <Brightness7/> }
              </IconButton>
            </Toolbar>
          </Toolbar>
        </AppBar>
      </>
    );
}

export default Navbar;