import React, { Children } from "react";
import { useHistory } from "react-router-dom";

export function Usercomp({ title, style,children}) {
    const history = useHistory();
    return (
        <div className="parent">
            <div className={style}>
                <div className="head">
                    <h1>{title}</h1>
                </div>
                <div className="navbar">
                    <ul>
                        <li><button onClick={()=>history.push('/')}>Home</button></li>
                        <li><button onClick={()=>history.push("/Adduser")}>Adduser</button></li>
                        <li><button>AboutUs</button></li>
                    </ul>
                </div>
            </div>
            <div className="content">
                {children}
            </div>
            <div className="footer">
                <h4>Copyrights@2023</h4>
            </div>
        </div>
    );
}