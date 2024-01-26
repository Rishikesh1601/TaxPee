import React from "react";
//components
import Navbar from "../Component/Navbar/navbar.component";
// import IncomeTaxCalculator from "../Component/Navbar/incomeTaxCalculate";
const PricingLayout = (props) => {
    return(
        <div>
            <Navbar />
           
            {props.children}
        </div>
    )
}

export default PricingLayout;