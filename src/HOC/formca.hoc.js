import React from "react";
import { Route, Routes } from "react-router-dom";
import FormCALayout from "../Layout/formca.layout";

const FormCAHOC = ({ component: Component, ...rest }) => {
  return (
    <Routes> {/* Wrap Routes around your Route */}
      <Route
        {...rest}
        element={ // Use 'element' instead of 'component' for React Router v6
          <FormCALayout>
            <Component {...rest} />
          </FormCALayout>
        }
      />
    </Routes>
  );
};

export default FormCAHOC;
