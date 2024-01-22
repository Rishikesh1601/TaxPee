import React from "react";
//components
import Navbar from "../Component/Navbar/navbar.component";

const PrepaidTaxesLayout = (props) => {
    return(
        <div>
            <Navbar />
           
            {props.children}
        </div>
    )
}

export default PrepaidTaxesLayout;