import { useContext } from "react";
import { MoviesContext } from "../context/MoviesContextProvider";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";


function DisplayMovies() {

    const {allMovies, handleClickOpen, } = useContext(MoviesContext)

    return (
      <>
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
                    <Typography variant="body2">
                      {movies.description}
                    </Typography>
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
      </>
    );
}

export default DisplayMovies;