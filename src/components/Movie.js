import { Link } from "react-router-dom";
import styled from "styled-components";

const DEFAULT_POSTER =
  "https://images.unsplash.com/photo-1571847140471-1d7766e825ea?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=973&q=80";

const Container = styled.div`
  height: 340px;
  width: 100%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  border-radius: 10px;
  overflow: hidden;
`;

const Poster = styled.img`
  width: 100%;
  height: 100%;
`;

const Movie = ({ id, medium_cover_image }) => (
  <Container>
    <Link to={`/${id}`}>
      <Poster
        src={medium_cover_image}
        onError={(event) => (event.target.src = DEFAULT_POSTER)}
      />
    </Link>
  </Container>
);

export default Movie;
