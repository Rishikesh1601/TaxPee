import React from "react";
import { Route, Routes } from "react-router-dom";
import PanFormLayout from "../Layout/panform.layout";

const PanFormHOC = ({ component: Component, ...rest }) => {
  return (
    <Routes> {/* Wrap Routes around your Route */}
      <Route
        {...rest}
        element={ // Use 'element' instead of 'component' for React Router v6
          <PanFormLayout>
            <Component {...rest} />
          </PanFormLayout>
        }
      />
    </Routes>
  );
};

export default PanFormHOC;
