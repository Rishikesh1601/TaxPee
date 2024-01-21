import React from "react";
import { Route, Routes } from "react-router-dom";
import Form16Layout from "../Layout/form16.layout";

const Form16HOC = ({ component: Component, ...rest }) => {
  return (
    <Routes> {/* Wrap Routes around your Route */}
      <Route
        {...rest}
        element={ // Use 'element' instead of 'component' for React Router v6
          <Form16Layout class="bg-green-50">
            <Component {...rest} />
          </Form16Layout>
        }
      />
    </Routes>
  );
};

export default Form16HOC;
