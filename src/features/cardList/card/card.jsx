import { useDispatch } from 'react-redux';
import { removeCard } from '../cardListSlice';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './card.scss';

export const MagicCard = (props) => {
  const { card } = props;
  const dispatch = useDispatch();

  const remove = (id) => {
    dispatch(removeCard(id));
  };

  return (
    <Card style={{ width: '30rem' }}>
      <Card.Img variant="top" src={card.image_uris?.art_crop} alt={card.id} />
      <Card.Body>
        <Card.Title>{card.name}</Card.Title>
        <Card.Text>{card.oracle_text}</Card.Text>
        <Button variant="primary" onClick={() => remove(card.id)}>
          Remove
        </Button>
      </Card.Body>
    </Card>
  );
};
