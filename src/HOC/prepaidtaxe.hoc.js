import React from "react";
import { Route, Routes } from "react-router-dom";
import PrepaidTaxesLayout from "../Layout/prepaidtaxes.layout";

const PrepaidTaxesHOC = ({ component: Component, ...rest }) => {
  return (
    <Routes> {/* Wrap Routes around your Route */}
      <Route
        {...rest}
        element={ // Use 'element' instead of 'component' for React Router v6
          <PrepaidTaxesLayout>
            <Component {...rest} />
          </PrepaidTaxesLayout>
        }
      />
    </Routes>
  );
};

export default PrepaidTaxesHOC;
