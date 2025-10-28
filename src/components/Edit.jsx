import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { moviesList } from "../config/moviesList";
import { useContext } from "react";
import { MoviesContext } from "../context/MoviesContextProvider";

function EditPage() {

  const { allMovies, updateMovies } = useContext(MoviesContext);

  const firstObj = moviesList[0];
  const keys = Object.keys(firstObj);
  const columns = [];
  let value = 0;
  for (let index = 0; index < keys.length; index++) {
    const objValue = {
      field: keys[value],
      headerName: keys[value],
      editable: true,
    };
    value = value + 1;
    columns.push(objValue);
  }

  const rows = allMovies; 

  const paginationModel = { page: 0, pageSize: 5 };

  return (
    <>
      <Paper sx={{ height: 400, width: "100%", marginTop: "5rem" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          sx={{ border: 0 }}
          processRowUpdate =  {(newRow)=>{
            updateMovies(newRow)
            return newRow
          }}
        />
      </Paper>
    </>
  );
}

export default EditPage;
