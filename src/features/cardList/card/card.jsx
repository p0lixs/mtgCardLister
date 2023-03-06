import Card from 'react-bootstrap/Card';
import './card.scss';

import { Link } from 'react-router-dom';

export const MagicCard = ({ card }) => (
  <Link to={`https://scryfall.com/card/${card.set}/${card.collector_number}`}>
    <Card style={{ width: '30rem', margin: '1em' }} className="bg-dark text-white">
      <Card.Img variant="top" src={card.image_uris?.art_crop || '/placeholder-image.jpg'} alt={card.id} loading="lazy" />
      <Card.ImgOverlay>
        <Card.Title>{card.name}</Card.Title>
      </Card.ImgOverlay>
    </Card>
  </Link>
);
