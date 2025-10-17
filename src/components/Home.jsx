import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText ,
  DialogTitle,
  Tooltip,
  Typography,
} from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
// import { moviesList } from "../config/moviesList";
import { useContext, useState } from "react";
import { MoviesContext } from "../context/MoviesContextProvider";



function HomePage() {
  
  // console.log(moviesList,'direct');

  // import movies from context
    const { allMovies, handleAToZ, handleZToA,  } = useContext(MoviesContext);

    // console.log(allMovies,'context');
    




  const [open, setOpen] = useState(false);
  const [movie, setMovie] = useState([]);



  // console.log(open);

  const handleClickOpen = (movies) => {
    setOpen(true);
    // console.log(movies);
    setMovie(movies);
  };

  const handleClose = () => {
    setOpen(false);
  };


  // sort button logic

  // const [sortAToZ, setSortAToZ] = useState([])
  // const [sortZToA, setSortZToA] = useState([])
  

  // const handleAToZ = () => {
  // moviesList.sort((a,b)=> a.title.localeCompare(b.title))
  // // console.log(moviesList.sort((a,b)=> a.title.localeCompare(b.title)));
  // // console.log(moviesList);
  // setSortAToZ(moviesList);
  // console.log('Sorted A-Z');
  // }
  // // console.log(sortMoviesList);

  // const handleZToA = () => {
  //    moviesList.sort((a, b) => b.title.localeCompare(a.title));
  //    setSortZToA(moviesList)
  //      console.log("Sorted Z-A");
  // }

  

  return (
    <>
      {/* sort buttons */}

      <Box
        sx={{ marginTop: "5rem", display: "flex", justifyContent: "center" }}
      >
        <Button variant="contained" onClick={() => handleAToZ()}>
          A-Z
        </Button>
        <Button variant="contained" sx={{ marginLeft: "1rem" }} onClick={() => handleZToA()} >
          Z-A
        </Button>
      </Box>

      {/* movies list */}

      {allMovies.map((movies) => {
        return (
          <Box sx={{ display: "inline-flex", marginLeft: "1.5rem" }}>
            <Card
              sx={{ maxWidth: "19rem", height: "37rem", marginTop: "1rem" }}
            >
              <Box onClick={() => handleClickOpen(movies)}>
                <CardMedia
                  component="img"
                  height="400rem"
                  image={movies.poster}
                  alt={movies.title}
                />
                <CardContent>
                  <Typography>
                    <strong>{movies.title}</strong>
                  </Typography>
                  <Typography variant="body2">{movies.description}</Typography>
                  <Typography variant="body2">
                    <strong>Year :</strong> {movies.year}
                  </Typography>
                  <Typography variant="body2">
                    <strong>Rating :</strong> {movies.rating}
                  </Typography>
                </CardContent>
              </Box>
            </Card>
          </Box>
        );
      })}

      {/* for dialog box */}

      {
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <span style={{ maxWidth: "19rem" }}>{movie.title}</span>
            <HighlightOffIcon onClick={handleClose} sx={{ color: "red" }} />
          </DialogTitle>
          <DialogContent style={{ maxWidth: "21rem" }}>
            <img
              src={movie.poster}
              alt={movie.title}
              style={{ height: "30rem", maxWidth: "21rem" }}
            />
            <Typography>
              <strong>Description</strong> : {movie.description}
            </Typography>
            <Typography>
              <strong>Year :</strong> {movie.year}
            </Typography>
            <Typography>
              <strong>Duration</strong> : {movie.duration}
            </Typography>
            <Typography>
              <strong>Release Date</strong> : {movie.releaseDate}
            </Typography>
            <Typography>
              <strong>Director</strong> : {movie.director}
            </Typography>
            <Typography>
              <strong>Producer</strong> : {movie.producer}
            </Typography>
            <Typography>
              <strong>Cast</strong> : {movie.cast}
            </Typography>
            <Typography>
              <strong>Rating</strong> : {movie.rating}
            </Typography>
            <Button
              href={movie.trailer}
              target="_blank"
              variant="contained"
              size="small"
            >
              See Trailer
            </Button>
            <Button
              onClick={() => handleClose()}
              sx={{ marginLeft: "1rem" }}
              variant="contained"
              color="error"
              size="small"
            >
              Close
            </Button>
          </DialogContent>
        </Dialog>
      }
    </>
  );
}

export default HomePage;
