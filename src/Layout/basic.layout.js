import React from "react";
//components
import Navbar from "../Component/Navbar/navbar.component";

const BasicLayout = (props) => {
    return(
        <div>
            <Navbar />
           
            {props.children}
        </div>
    )
}

export default BasicLayout;