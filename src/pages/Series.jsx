import React from 'react';
import { Grid, Header } from "semantic-ui-react";
import Container from "../components/Container";
import ListSeries from "../components/ListSeries";
import useFetch from "../hooks/useFetch";

const Series = () => {
    const listSeries = useFetch(
        `${import.meta.env.VITE_REACT_APP_URL_BASE}/series?ts=1&apikey=${
          import.meta.env.VITE_REACT_APP_API_KEY_MARVEL
        }&hash=${
          import.meta.env.VITE_REACT_APP_HASH_ID
        }&limit=20`
      );
    return (
        <div>
      <div className="series-page">
        <div id="slide-series-image" />
        <Grid>
          <Grid.Column>
            <Container bg="light">
              <Header as="h2">Las últimas series de Marvel</Header>
              <ListSeries listSeries={listSeries} />
            </Container>
          </Grid.Column>
        </Grid>
      </div>
    </div>
    );
};

export default Series;