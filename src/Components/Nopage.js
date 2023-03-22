import React from "react";
import { useHistory } from "react-router-dom";

export function Nopage(){
    const history = useHistory();
    return(
    <div className="nopage">
        <h1>Hey, you Entered Wrong Page</h1>
        <p>Error:404 Page Not Found</p>
        <p>Click here ro re-direct to Home page</p>
        <button onClick={()=>history.push('/')}>Click here</button>
    </div>
    );
}