import { ErrorMessage, Field, Formik } from 'formik';
import * as Yup from 'yup';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import './formulario.scss';

export const Formulario = (props) => {
  const { handleFormText } = props;
  return (
    <div className="formulario">
      <Formik
        initialValues={{ card: '', colors: [] }}
        validationSchema={Yup.object({
          card: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .min(4, 'Must be at least 4 charactes')
            .required('Required'),
        })}
        onSubmit={(values) => {
          handleFormText({
            name: values.card,
            colors: values.colors,
          });
        }}>
        <Form>
          <label htmlFor="firstName">Search card</label>
          <Field name="card" type="text" />
          <div className="colors">
            <label>
              <Field type="checkbox" name="colors" value="w" />
              White
            </label>
            <label>
              <Field type="checkbox" name="colors" value="b" />
              Black
            </label>
            <label>
              <Field type="checkbox" name="colors" value="r" />
              Red
            </label>
            <label>
              <Field type="checkbox" name="colors" value="u" />
              Blue
            </label>

            <Form.Check type="checkbox" name="colors" value="g" label="Green" />
          </div>
          <Button type="submit">Search</Button>
          <ErrorMessage name="card" />
        </Form>
      </Formik>
    </div>
  );
};
