import Card from "react-bootstrap/Card";
import "./card.scss";

export const MagicCard = (props) => {
  const { card } = props;

  // const dispatch = useDispatch();
  // const remove = (id) => {
  //   dispatch(removeCard(id));
  // };

  return (
    <Card style={{ width: "30rem", margin: "1em" }} className="bg-dark text-white">
      <Card.Img variant="top" src={card.image_uris?.art_crop} alt={card.id} />
      <Card.ImgOverlay>
        <Card.Title>{card.name}</Card.Title>
        {/* <Card.Text>{card.oracle_text}</Card.Text> */}
        {/* <Button variant="primary" onClick={() => remove(card.id)}>
          Remove
        </Button> */}
      </Card.ImgOverlay>
    </Card>
  );
};
