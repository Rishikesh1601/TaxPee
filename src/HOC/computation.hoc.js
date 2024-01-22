import React from "react";
import { Route, Routes } from "react-router-dom";
import ComputationLayout from "../Layout/computation.layout";

const ComputationHOC = ({ component: Component, ...rest }) => {
  return (
    <Routes> {/* Wrap Routes around your Route */}
      <Route
        {...rest}
        element={ // Use 'element' instead of 'component' for React Router v6
          <ComputationLayout>
            <Component {...rest} />
          </ComputationLayout>
        }
      />
    </Routes>
  );
};

export default ComputationHOC;
