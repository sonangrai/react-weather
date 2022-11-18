import { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Header from "../components/Header";
import Search from "../components/Search";
import Error from "../components/Error";
import { Divider } from "@mui/material";
import Lists from "../components/Lists";

function Home() {
  const [data, setData] = useState<Idata[]>([]); //All weather data
  const [error, setError] = useState<Ierr>();

  const getData = (d: Idata) => {
    setData([...data, d]);
  };

  const getErr = (d: Ierr) => {
    setError(d);
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
        <Lists data={data} />
      </Container>
    </div>
  );
}

export default Home;
