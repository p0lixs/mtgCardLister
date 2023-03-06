import { MagicCard } from './card/card';
import './cardList.scss';

export const CardList = ({ list }) => {
  return <div className="todo-list">{list.length > 0 ? list.map((item) => <MagicCard card={item} key={item.id} />) : 'No cards found'}</div>;
};
