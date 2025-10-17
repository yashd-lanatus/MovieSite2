import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { moviesList } from "../config/moviesList";

function EditPage() {


  // for column

  // const columns =
  //  [
  //   { field: "id", headerName: "ID", width: 70 },
  //   { field: "firstName", headerName: "First name", width: 130 },
  //   { field: "lastName", headerName: "Last name", width: 130 },
  //
  // ];

  const firstObj = moviesList[0];
  // console.log(firstObj);
  const keys = Object.keys(firstObj);
  // console.log(keys);

  const columns = [];
  let value = 0;
  for (let index = 0; index < keys.length; index++) {
    value = value + 1;
    const objValue = {
      field: keys[value],
      headerName: keys[value],
      editable: true,
    };
    // console.log(objValue);
    columns.push(objValue);
  }

  // for rows

  // const rows = [
  //   { id: 1, lastName: "Snow", firstName: "Jon"},
  //   { id: 2, lastName: "Lannister", firstName: "Cersei"},
  // ];

  // console.log(moviesList);

  // for rows

  const rows = moviesList;


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
        />
      </Paper>
    </>
  );
}

export default EditPage;
