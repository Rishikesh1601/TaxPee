import React from "react";
import { Route, Routes } from "react-router-dom";
import BasicLayout from "../Layout/basic.layout";

const BasicHOC = ({ component: Component, ...rest }) => {
  return (
    <Routes> {/* Wrap Routes around your Route */}
      <Route
        {...rest}
        element={ // Use 'element' instead of 'component' for React Router v6
          <BasicLayout>
            <Component {...rest} />
          </BasicLayout>
        }
      />
    </Routes>
  );
};

export default BasicHOC;
