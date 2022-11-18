import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
function Search() {
  //Submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="search_form">
        <TextField
          style={{ width: "100%" }}
          label="City"
          size="small"
          variant="outlined"
        />
        <Button
          variant="contained"
          size="large"
          type="submit"
          startIcon={<SearchIcon />}
        >
          Search
        </Button>
      </form>
    </div>
  );
}

export default Search;
