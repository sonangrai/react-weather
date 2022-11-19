/* eslint-disable react-hooks/exhaustive-deps */
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import React, { useState, useEffect } from "react";
import { getWeatherApi } from "../api.services";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

interface props {
  sendData: (a: Idata) => void | Ires;
  resetError: (a: any) => void | any;
  sendError: (a: Ierr) => void | Ierr;
}

function Search({ sendData, resetError, sendError }: props) {
  const { t } = useTranslation();
  const [city, setCity] = useState("");
  const [searching, setSearching] = useState(false);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  //Submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/?city=${city}`);
  };

  //Url Change
  useEffect(() => {
    let cty = searchParams.get("city");
    if (cty) {
      setCity(cty);
      setSearching(true);
      resetError(null);
      getWeatherApi(cty).then(
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
    }

    return () => {};
  }, [searchParams]);

  return (
    <div>
      <form onSubmit={handleSubmit} className="search_form">
        <TextField
          style={{ width: "100%" }}
          label={t("City")}
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
          {searching ? t("searching") : t("Search")}
        </Button>
      </form>
    </div>
  );
}

export default Search;
