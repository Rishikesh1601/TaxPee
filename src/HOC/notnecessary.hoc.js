import React from "react";
import { Route, Routes } from "react-router-dom";
// import FormSubmittedLayout from "../Layout/formSubmitted.layout";
// import ItrCheckLayout from "../Layout/itrcheck.layout";
// import ItrFileSuccessLayout from "../Layout/fileitrsuccess.layout";
import ITRNotMandLayout from "../Layout/notnecessary.layout";

const ITRNotMandHOC = ({ component: Component, ...rest }) => {
  return (
    <Routes> {/* Wrap Routes around your Route */}
      <Route
        {...rest}
        element={ // Use 'element' instead of 'component' for React Router v6
          <ITRNotMandLayout>
            <Component {...rest} />
          </ITRNotMandLayout>
        }
      />
    </Routes>
  );
};

export default ITRNotMandHOC;
