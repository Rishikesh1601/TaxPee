import React from "react";
import { Route, Routes } from "react-router-dom";
import ITRFinishedLayout from "../Layout/itrfinish.layout";

const ITRfinishedHOC = ({ component: Component, ...rest }) => {
  return (
    <Routes> {/* Wrap Routes around your Route */}
      <Route
        {...rest}
        element={ // Use 'element' instead of 'component' for React Router v6
          <ITRFinishedLayout>
            <Component {...rest} />
          </ITRFinishedLayout>
        }
      />
    </Routes>
  );
};

export default ITRfinishedHOC;
