import React from "react";
import { Route, Routes } from "react-router-dom";
import BankDetailsLayout from "../Layout/bankdetails.layout";

const BankDetailsHOC = ({ component: Component, ...rest }) => {
  return (
    <Routes> {/* Wrap Routes around your Route */}
      <Route
        {...rest}
        element={ // Use 'element' instead of 'component' for React Router v6
          <BankDetailsLayout>
            <Component {...rest} />
          </BankDetailsLayout>
        }
      />
    </Routes>
  );
};

export default BankDetailsHOC;
