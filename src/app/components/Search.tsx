import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import React, { useState } from "react";
import { getWeatherApi } from "../api.services";

interface props {
  sendData: (a: Ires) => void | Ires;
  resetError: (a: any) => any;
}

function Search({ sendData, resetError }: props) {
  const [city, setCity] = useState("");
  const [searching, setSearching] = useState(false);

  //Submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSearching(true);
    resetError(null);
    getWeatherApi(city).then(
      (res) => {
        console.log(res);
        sendData({
          type: "success",
          data: res.data,
        });
        setSearching(false);
      },
      (err) => {
        console.log(err.response.data);
        sendData({
          type: "error",
          data: err.response.data,
        });
        setSearching(false);
      }
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="search_form">
        <TextField
          style={{ width: "100%" }}
          label="City"
          size="small"
          variant="outlined"
          name="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <Button
          variant="contained"
          size="large"
          type="submit"
          startIcon={<SearchIcon />}
          disabled={searching}
        >
          {searching ? "searching..." : "Search"}
        </Button>
      </form>
    </div>
  );
}

export default Search;
