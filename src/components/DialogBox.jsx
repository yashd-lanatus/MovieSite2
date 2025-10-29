import { useContext } from "react";
import { MoviesContext } from "../context/MoviesContextProvider";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";


function DialogBox() {

    const { open, movie, handleClose } = useContext(MoviesContext);

    return (
      <>
        {
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <span style={{ maxWidth: "19rem" }}>{movie.title}</span>
              <HighlightOffIcon onClick={handleClose} sx={{ color: "red" }} />
            </DialogTitle>
            <DialogContent style={{ maxWidth: "23rem" }}>
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

export default DialogBox;