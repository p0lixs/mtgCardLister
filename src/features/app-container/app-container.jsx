import axios from 'axios';
import { Col, Container, Row } from 'react-bootstrap';
import { trackPromise, usePromiseTracker } from 'react-promise-tracker';
import { useDispatch, useSelector } from 'react-redux';
import { Loading } from '../../components/loading/loading';
import { Menu } from '../../components/menu/menu';
import { CardList } from '../cardList/cardList';
import { setList } from '../cardList/cardListSlice';
import { Formulario } from '../formulario/formulario';
import './app-container.scss';

const client = axios.create({
  baseURL: 'https://api.scryfall.com/cards',
});

export const AppContainer = () => {
  const cardList = useSelector((state) => state.cardList.value);
  const dispatch = useDispatch();
  const { promiseInProgress } = usePromiseTracker();

  const handleFormText = (form) => {
    getCard(form);
  };

  const getCard = async (form) => {
    let query = 'search?q=' + form.name;
    if (form.colors && form.colors.length > 0) {
      query += '+(c%3A' + form.colors.join('+OR+c%3A') + ')';
    }
    trackPromise(
      client.get(query).then((response) => {
        dispatch(setList(response.data.data));
      })
    );
  };

  return (
    <div className="form-container">
      <Menu />
      <Container>
        <Row>
          <Col>
            <Formulario handleFormText={handleFormText}></Formulario>
          </Col>
        </Row>
        <Row>
          <Col>{promiseInProgress ? <Loading /> : <CardList list={cardList} />}</Col>
        </Row>
      </Container>
    </div>
  );
};
