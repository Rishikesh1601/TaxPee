import React from "react";
//components
import Navbar from "../Component/Navbar/navbar.component";
import Form16 from "../Component/ITR_Filing/itr.firts.component";
const Form16Layout = (props) => {
    return(
        <div class="bg-green-50">
            <Navbar />
            {props.children}
        </div>
    )
}

export default Form16Layout;