import { Formik } from "formik";
import { Button, Form } from "react-bootstrap";
import * as Yup from "yup";
import { ColorCheck } from "../../components/color-check/colorCheck";
import "./formulario.scss";

// Schema for yup
const validationSchema = Yup.object().shape({
  card: Yup.string().min(2, "*Cards must have at least 2 characters").max(100, "*Cards can't be longer than 100 characters").required("*Card is required"),
});

export const Formulario = (props) => {
  const { handleFormText } = props;
  const colors = ["w", "b", "u", "r", "g"];
  return (
    <div className="container">
      <Formik
        initialValues={{ card: "", colors: [] }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
          handleFormText({
            name: values.card,
            colors: values.colors,
          });
        }}
      >
        {({ values, handleChange, handleSubmit }) => (
          <Form className="my-form" onSubmit={handleSubmit}>
            <Form.Group controlId="formCard" className="cardName-form">
              <Form.Label>Card</Form.Label>
              <Form.Control type="text" name="card" placeholder="Enter card name..." onChange={handleChange} value={values.card} />
            </Form.Group>
            <Form.Group controlId="formColors" className="colors-form">
              {colors.map((c) => {
                return <ColorCheck color={c} handleChange={handleChange} key={c} />;
              })}
            </Form.Group>
            <Button variant="primary" type="submit">
              Search
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
