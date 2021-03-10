import { useQuery, gql } from "@apollo/client";
import { useParams } from "react-router-dom";

const GET_MOVIE = gql`
  query getMovie($id: Int!) {
    movie(id: $id) {
      id
      title
      medium_cover_image
      summary
    }
  }
`;

const Detail = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_MOVIE, {
    variables: { id: parseInt(id) },
  });
  console.log(loading, data);

  return !loading && <span>{data.movie.title}</span>;
};

export default Detail;
