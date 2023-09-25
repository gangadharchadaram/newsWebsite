import React from "react";
import Header from "./Header";
import NewsData from "./NewsData";

function Login(props){
    return(
        <>
            <div>
                <Header data={props}/>
                <NewsData />
            </div>
        </>
    )
}

export default Login;