import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { CardList } from '../cardList/cardList';
import { setList } from '../cardList/cardListSlice';
import { Formulario } from '../formulario/formulario';
import './container.scss';

const client = axios.create({
  baseURL: 'https://api.scryfall.com/cards',
});

export const Container = () => {
  const cardList = useSelector((state) => state.cardList.value);
  const dispatch = useDispatch();

  const handleFormText = (addItem) => {
    getCard(addItem.name);
  };

  const getCard = async (name) => {
    client.get('search?q=' + name).then((response) => {
      dispatch(setList(response.data.data));
    });
  };

  return (
    <div className="form-container">
      <Formulario handleFormText={handleFormText}></Formulario>
      <CardList list={cardList}></CardList>
    </div>
  );
};
