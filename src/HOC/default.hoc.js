import React from "react";
import { Route, Routes } from "react-router-dom";
import DefaultLayout from "../Layout/default.layout";

const DefaultHOC = ({ component: Component, ...rest }) => {
  return (
    <Routes> {/* Wrap Routes around your Route */}
      <Route
        {...rest}
        element={ // Use 'element' instead of 'component' for React Router v6
          <DefaultLayout>
            <Component {...rest} />
          </DefaultLayout>
        }
      />
    </Routes>
  );
};

export default DefaultHOC;
