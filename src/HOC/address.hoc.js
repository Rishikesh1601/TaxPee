import React from "react";
import { Route, Routes } from "react-router-dom";
import AddressLayout from "../Layout/address.layout";

const AddressHOC = ({ component: Component, ...rest }) => {
  return (
    <Routes> {/* Wrap Routes around your Route */}
      <Route
        {...rest}
        element={ // Use 'element' instead of 'component' for React Router v6
          <AddressLayout>
            <Component {...rest} />
          </AddressLayout>
        }
      />
    </Routes>
  );
};

export default AddressHOC;
