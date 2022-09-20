import { Form } from "react-bootstrap";
import "./colorCheck.scss";

export const ColorCheck = (props) => {
  const { color, handleChange } = props;
  let colorUrl = "";
  switch (color) {
    case "w":
      colorUrl = "https://c2.scryfall.com/file/scryfall-symbols/card-symbols/W.svg";
      break;
    case "b":
      colorUrl = "https://c2.scryfall.com/file/scryfall-symbols/card-symbols/B.svg";
      break;
    case "u":
      colorUrl = "https://c2.scryfall.com/file/scryfall-symbols/card-symbols/U.svg";
      break;
    case "g":
      colorUrl = "https://c2.scryfall.com/file/scryfall-symbols/card-symbols/G.svg";
      break;
    case "r":
      colorUrl = "https://c2.scryfall.com/file/scryfall-symbols/card-symbols/R.svg";
      break;
    default:
      break;
  }
  return (
    <div className="color-check">
      <Form.Check type="checkbox" value={color} name="colors" onChange={handleChange} />
      <img src={colorUrl} alt={color} style={{ width: "25px" }} />
    </div>
  );
};
