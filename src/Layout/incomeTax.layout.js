import React from "react";
//components
import Navbar from "../Component/Navbar/navbar.component";
// import IncomeTaxCalculator from "../Component/Navbar/incomeTaxCalculate";
const IncomeTaxLayout = (props) => {
    return(
        <div>
            <Navbar />
           
            {props.children}
        </div>
    )
}

export default IncomeTaxLayout;