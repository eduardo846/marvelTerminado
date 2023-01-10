import React, { useState } from "react";
import { Grid, Header } from "semantic-ui-react";
import Container from "../components/Container";
import ListComics from "../components/ListComics/ListComics";
import useFetch from "../hooks/useFetch";

const Comics = () => {
  const [renderComics, setRenderComics] = useState(10);
  const listComics = useFetch(
    `${import.meta.env.VITE_REACT_APP_URL_BASE}/comics?ts=1&apikey=${
      import.meta.env.VITE_REACT_APP_API_KEY_MARVEL
    }&hash=${import.meta.env.VITE_REACT_APP_HASH_ID}&limit=${renderComics}`
  );

  return (
    <div className="comics-page">
      <div id="slide-comics-image"/>
        <Grid>
          <Grid.Column>
            <Container bg="light">
              <Header as="h2">Los mejores Comics</Header>
              <ListComics listComics={listComics} renderComics={renderComics} setRenderComics={setRenderComics}/>
            </Container>
          </Grid.Column>
        </Grid>
    </div>
  );
};

export default Comics;
