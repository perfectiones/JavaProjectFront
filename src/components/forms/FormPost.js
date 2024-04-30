import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";

const FormBasik = () => {
  const handlePost = (values) => {
    const formData = new FormData();

    async function fetchData() {
      try {
        //setState({ ...state, loading: true });
        const response = await axios.post(
          "https://jsonplaceholder.typicode.com/todos"
        );
      } catch (error) {
        //setState({ ...state, loading: false });
        console.log(error);
      }
    }

    fetchData();
  };
  return (
    <div>
      <Formik
        initialValues={{ email: "", password: "" }} // Тут находятся наши изначальные состояния нашей формы
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          handlePost(values); 
          setSubmitting(false); 
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormBasik;
