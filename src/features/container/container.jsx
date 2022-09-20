import axios from "axios";
import { trackPromise, usePromiseTracker } from "react-promise-tracker";
import { useDispatch, useSelector } from "react-redux";
import { Loading } from "../../components/loading/loading";
import { CardList } from "../cardList/cardList";
import { setList } from "../cardList/cardListSlice";
import { Formulario } from "../formulario/formulario";
import "./container.scss";

const client = axios.create({
  baseURL: "https://api.scryfall.com/cards",
});

export const Container = () => {
  const cardList = useSelector((state) => state.cardList.value);
  const dispatch = useDispatch();
  const { promiseInProgress } = usePromiseTracker();

  const handleFormText = (form) => {
    console.log(form);
    getCard(form);
  };

  const getCard = async (form) => {
    let query = "search?q=" + form.name;
    if (form.colors && form.colors.length > 0) {
      query += "+(c%3A" + form.colors.join("+OR+c%3A") + ")";
    }
    trackPromise(
      client.get(query).then((response) => {
        dispatch(setList(response.data.data));
      })
    );
  };

  return (
    <div className="form-container">
      {/* <Formulario handleFormText={handleFormText}></Formulario> */}
      <Formulario handleFormText={handleFormText}></Formulario>
      {promiseInProgress ? <Loading /> : <CardList list={cardList} />}
    </div>
  );
};
