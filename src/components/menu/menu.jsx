import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

export const Menu = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">MagicArt</Navbar.Brand>
      </Container>
    </Navbar>
  );
};
