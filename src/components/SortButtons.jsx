import { useContext } from "react";
import { MoviesContext } from "../context/MoviesContextProvider";
import { Box, Button } from "@mui/material";

function SortButtons() {

    const {handleSort, openBtn} = useContext(MoviesContext)

    return (
      <>
        <Box
          sx={{ marginTop: "5rem", display: "flex", justifyContent: "center" }}
        >
          <Button
            variant="contained"
            color="info"
            onClick={() => handleSort("RESET")}
          >
            RESET
          </Button>
          <Button
            variant={openBtn === "A-Z" ? "contained" : "outlined"}
            sx={{ marginLeft: "1rem" }}
            onClick={() => handleSort("A-Z")}
          >
            A-Z
          </Button>
          <Button
            variant={openBtn === "Z-A" ? "contained" : "outlined"}
            sx={{ marginLeft: "1rem" }}
            onClick={() => handleSort("Z-A")}
          >
            Z-A
          </Button>
        </Box>
      </>
    );
}

export default SortButtons;