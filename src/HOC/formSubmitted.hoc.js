import React from "react";
import { Route, Routes } from "react-router-dom";
import FormSubmittedLayout from "../Layout/formSubmitted.layout";

const FormSubmittedHOC = ({ component: Component, ...rest }) => {
  return (
    <Routes> {/* Wrap Routes around your Route */}
      <Route
        {...rest}
        element={ // Use 'element' instead of 'component' for React Router v6
          <FormSubmittedLayout>
            <Component {...rest} />
          </FormSubmittedLayout>
        }
      />
    </Routes>
  );
};

export default FormSubmittedHOC;
