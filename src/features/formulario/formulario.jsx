import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import './formulario.scss';

export const Formulario = (props) => {
  const { handleFormText } = props;
  return (
    <div className="formulario">
      <Formik
        initialValues={{ card: '' }}
        validationSchema={Yup.object({
          card: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .min(4, 'Must be at least 4 charactes')
            .required('Required'),
        })}
        onSubmit={(values) => {
          handleFormText({
            name: values.card,
          });
        }}>
        <Form>
          <label htmlFor="firstName">Search card</label>
          <Field name="card" type="text" />
          <button type="submit">Search</button>
          <ErrorMessage name="card" />
        </Form>
      </Formik>
    </div>
  );
};
