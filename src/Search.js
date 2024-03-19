import { TextField, Button } from "@mui/material";
import axios from "axios";
import { useState } from "react";

export const Search = () => {
  const [input, setInput] = useState("");

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = () => {
    let userInfo = {
      input: input,
    };

    axios
      .post("http://localhost:5000/collectInfo", userInfo)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

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
          onSubmit={handleChange}
        />
        <Button onClick={handleSubmit}>Submit</Button>
      </header>
    </div>
  );
};
