import React from "react";
import { Route, Routes } from "react-router-dom";
import ItrDetailsLayout from "../Layout/itrdetails.layout";

const ItrDetailsHOC = ({ component: Component, ...rest }) => {
  return (
    <Routes> {/* Wrap Routes around your Route */}
      <Route
        {...rest}
        element={ // Use 'element' instead of 'component' for React Router v6
          <ItrDetailsLayout>
            <Component {...rest} />
          </ItrDetailsLayout>
        }
      />
    </Routes>
  );
};

export default ItrDetailsHOC;
