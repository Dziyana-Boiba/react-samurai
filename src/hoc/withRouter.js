import React from "react";
import { useParams } from "react-router-dom";

export const  withRouter = (Component) => {

    let RouterComponent = (props) =>{
        //const match = useMatch('/profile/:userId/');
        return <Component {...props} param={useParams()} />;
    }
    return RouterComponent
}