import React from "react";
//components
import Navbar from "../Component/Navbar/navbar.component";
import Firsthead from "../Component/firstHead.component";

const DefaultLayout = (props) => {
    return(
        <div>
            <Navbar />
            <Firsthead />
            {props.children}
        </div>
    )
}

export default DefaultLayout;