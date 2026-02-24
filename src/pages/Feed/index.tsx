import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { Container, Title, Column, FeedContainer } from "./styles";

const Feed = () => {
  return (
    <Container>
      <FeedContainer>
        <Column>
          <Title>Seja Bem Vindo!</Title>
        </Column>
      </FeedContainer>
    </Container>
  );
};

export default Feed;
