import { useDispatch } from 'react-redux';
import { removeCard } from '../cardListSlice';
import './card.scss';

export const Card = (props) => {
  const { card } = props;
  const dispatch = useDispatch();

  const remove = (id) => {
    dispatch(removeCard(id));
  };

  return (
    <div className="item">
      <span>{card.name}</span>
      {card.image_uris ? (
        <div className="img-container">
          <img src={card.image_uris.small} alt={card.id} />{' '}
        </div>
      ) : (
        <span>no image</span>
      )}
      <button type="button" onClick={() => remove(card.id)}>
        x
      </button>
    </div>
  );
};
