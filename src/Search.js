import { TextField } from "@mui/material";

export const Search = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Pexa Document Search</h1>
        <TextField
          id="outlined-basic"
          label="Search..."
          variant="outlined"
          autoComplete="off"
          InputProps={{
            style: {
              color: "white",
              borderColor: "white !important",
              borderWidth: 2,
            },
          }}
          InputLabelProps={{
            style: { color: "white" },
          }}
        />
      </header>
    </div>
  );
};
