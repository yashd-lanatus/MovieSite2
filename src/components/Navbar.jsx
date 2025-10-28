import { AppBar, Button, debounce, IconButton, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useCallback, useContext,} from "react";
import { MoviesContext } from "../context/MoviesContextProvider";
import { Brightness4, Brightness7 } from "@mui/icons-material";


function Navbar({isDarkMode, setIsDarkMode}) {
  
    const handleToggle = () => setIsDarkMode(!isDarkMode)

    const { handleSearch, } = useContext(MoviesContext);

    const debouncedSearch = useCallback(
      debounce((value)=>{
        handleSearch(value)
      }, 1000),
      [handleSearch])

    return (
      <>
        <AppBar component="nav">
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <Typography variant="h5" component="div" sx={{ padding: "15px" }}>
              <Link
                to="/home"
                style={{ color: "white", textDecoration: "none" }}
              >
                MovieSite
              </Link>
            </Typography>
            <Toolbar>
              <input
                type="text"
                placeholder="Search Movie..."
                style={{ padding: 5, margin: 5 }}
                onChange={(e) => debouncedSearch(e.target.value)}
              />
              <Button color="white" component={Link} to="/home">
                Home
              </Button>
              <Button color="white" component={Link} to="/edit">
                {" "}
                Edit
              </Button>
              <IconButton color="inherit" onClick={handleToggle}>
                {isDarkMode ? <Brightness4 /> : <Brightness7 />}
              </IconButton>
            </Toolbar>
          </Toolbar>
        </AppBar>
      </>
    );
}

export default Navbar;