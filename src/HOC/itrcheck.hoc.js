import React from "react";
import { Route, Routes } from "react-router-dom";
// import FormSubmittedLayout from "../Layout/formSubmitted.layout";
import ItrCheckLayout from "../Layout/itrcheck.layout";

const ITRCheckHOC = ({ component: Component, ...rest }) => {
  return (
    <Routes> {/* Wrap Routes around your Route */}
      <Route
        {...rest}
        element={ // Use 'element' instead of 'component' for React Router v6
          <ItrCheckLayout>
            <Component {...rest} />
          </ItrCheckLayout>
        }
      />
    </Routes>
  );
};

export default ITRCheckHOC;
