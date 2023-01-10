import React from "react";
import { Card, Header } from "semantic-ui-react";
import Container from "../Container";
import "./ListLastEvents.scss";
import useFetch from "../../hooks/useFetch";
import LastEvents from "../LastEvents/LastEvents";

const ListLastEvents = () => {
  const lastEventsFetch = useFetch(
    `${import.meta.env.VITE_REACT_APP_URL_BASE}/comics?ts=1&apikey=${
      import.meta.env.VITE_REACT_APP_API_KEY_MARVEL
    }&hash=${
      import.meta.env.VITE_REACT_APP_HASH_ID
    }&limit=5`
  );
  //console.log(import.meta.env.VITE_REACT_APP_URL_BASE)
  return (
    <div className="container-list-last-events">
      <Header size="large">Últimos eventos</Header>
      <Container bg="light">
        <Card.Group itemsPerRow={5}>
          <LastEvents lastEventsFetch={lastEventsFetch}/>
        </Card.Group>
      </Container>
    </div>
  );
};

export default ListLastEvents;
