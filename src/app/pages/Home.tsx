/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Header from "../components/Header";
import Search from "../components/Search";
import Error from "../components/Error";
import { Divider } from "@mui/material";
import Lists from "../components/Lists";
import { getCityNameApi, getWeatherApi } from "../api.services";

function Home() {
  const [data, setData] = useState<Idata[]>([]); //All weather data
  const [error, setError] = useState<Ierr>();

  //Get location
  useEffect(() => {
    let mount = true;
    if (mount)
      navigator.geolocation.getCurrentPosition(function (position) {
        getCityNameApi(
          position.coords.latitude,
          position.coords.longitude
        ).then((res) => {
          if (res.data.address.county || res.data.address.region)
            getWeatherApi(
              res.data.address.county || res.data.address.region
            ).then(
              (res) => {
                let pack = {
                  city: res.data.name,
                  degree: res.data.main.temp - 273.15,
                  icon: res.data.weather[0].icon,
                  current: true,
                };
                getData(pack);
              },
              (err) => {
                setError(err.response.data);
              }
            );
        });
      });
    return () => {
      mount = false;
    };
  }, []);

  //Get data from api
  const getData = (d: Idata) => {
    //Check before inserting
    let indx = data.findIndex((el) => el.city === d.city);
    if (indx !== -1) {
      // If found update the data
      let clonedata = [...data];
      clonedata[indx] = d;
      setData(clonedata);
    } else {
      setData([...data, d]);
    }
  };

  //Get error data from api
  const getErr = (d: Ierr) => {
    setError(d);
  };

  //Remove city func
  const removeCity = (name: string) => {
    let cloneData = [...data];
    let filterData = cloneData.filter((el) => el.city !== name);
    setData(filterData);
  };

  return (
    <div className="home_page">
      <Container maxWidth="md">
        <Header />
        <Card variant="outlined" style={{ padding: "1em" }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <h2>Search for City</h2>
            </Grid>
            <Grid item xs={12}>
              <Search
                sendData={getData}
                sendError={getErr}
                resetError={setError}
              />
            </Grid>
          </Grid>
        </Card>
        <Error msg={error ? error.message : null} />
        <Divider />
        <Lists data={data} deleteCity={removeCity} />
      </Container>
    </div>
  );
}

export default Home;
