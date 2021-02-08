import React from "react";
import Header from "./components/Header";

let home = (props) => {
    console.log(props);

    return <div>
        <Header path={props.location.pathname}></Header>
    </div>
}

export default home;