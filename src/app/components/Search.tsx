import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import React, { useState } from "react";
import { getWeatherApi } from "../api.services";

interface props {
  sendData: (a: Idata) => void | Ires;
  resetError: (a: any) => void | any;
  sendError: (a: Ierr) => void | Ierr;
}

function Search({ sendData, resetError, sendError }: props) {
  const [city, setCity] = useState("");
  const [searching, setSearching] = useState(false);

  //Submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSearching(true);
    resetError(null);
    getWeatherApi(city).then(
      (res) => {
        let pack = {
          city: res.data.name,
          degree: res.data.main.temp - 273.15,
          icon: res.data.weather[0].icon,
          current: false,
        };
        sendData(pack);
        setSearching(false);
      },
      (err) => {
        sendError(err.response.data);
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
