import { Form } from "react-bootstrap";
import "./colorCheck.scss";

export const ColorCheck = (props) => {
  const { color, handleChange } = props;
  const url = `https://c2.scryfall.com/file/scryfall-symbols/card-symbols/${color?.toUpperCase()}.svg`;
  return (
    <div className="color-check">
      <Form.Check type="checkbox" value={color} name="colors" onChange={handleChange} />
      <img src={url} alt={color} style={{ width: "25px" }} />
    </div>
  );
};
