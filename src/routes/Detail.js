import { useQuery, gql } from "@apollo/client";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const GET_MOVIE = gql`
  query getMovie($id: Int!) {
    movie(id: $id) {
      title
      rating
      description_intro
      language
      medium_cover_image
      genres
    }
    suggestions(id: $id) {
      id
      medium_cover_image
    }
  }
`;

const DEFAULT_POSTER =
  "https://images.unsplash.com/photo-1571847140471-1d7766e825ea?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=973&q=80";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-image: linear-gradient(-45deg, #d754ab, #fd723a);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: white;
`;

const Column = styled.div`
  margin-left: 10px;
  width: 50%;
`;

const Title = styled.h1`
  font-size: 65px;
  margin-bottom: 15px;
`;

const Subtitle = styled.h4`
  font-size: 35px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 26px;
`;

const Poster = styled.img`
  width: 25%;
  height: 60%;
`;

const Error = styled.div`
  font-size: 65px;
`;

const Detail = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_MOVIE, {
    variables: { id: parseInt(id) },
  });
  return (
    <Container>
      <Column>
        <Title>{loading ? "Loading..." : data?.movie?.title}</Title>
        {!loading && (
          <>
            <Subtitle>
              {data?.movie?.genres?.map((g, index) =>
                data.movie.genres.length - 1 !== index ? `${g} / ` : `${g}`
              )}{" "}
              · {data?.movie?.language} · 🌟 {data?.movie?.rating}
            </Subtitle>
            <Description>{data?.movie?.description_intro}</Description>
          </>
        )}
        {error && <Error>Error :(</Error>}
      </Column>
      {!loading && (
        <Poster
          src={data?.movie?.medium_cover_image}
          onError={(event) => (event.target.src = DEFAULT_POSTER)}
        />
      )}
    </Container>
  );
};

export default Detail;
