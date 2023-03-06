import { Form } from 'react-bootstrap';
import './colorCheck.scss';
import w from '../../assets/images/w.svg';
import b from '../../assets/images/b.svg';
import r from '../../assets/images/r.svg';
import u from '../../assets/images/u.svg';
import g from '../../assets/images/g.svg';

export const ColorCheck = (props) => {
  const { color, handleChange } = props;
  const colorMap = {
    w: w,
    b: b,
    r: r,
    u: u,
    g: g,
  };
  const url = colorMap[color];
  return (
    <div className="color-check">
      <Form.Check type="checkbox" value={color} name="colors" id={`color-${color}`} onChange={handleChange} />
      <img src={url} alt={color} style={{ width: '25px' }} htmlFor={`color-${color}`} />
    </div>
  );
};
