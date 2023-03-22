import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { Usercomp } from "./Usercomponents";

export function Viewdata({childern,user,setUser}){
    const {id}= useParams();
    const history = useHistory();
    const person = user[id];
    return(
        <Usercomp title={"User Data"} style={"header"}>
          <div className="user-content">
            <div className="user-card">
                <h3>{person.name}</h3>
                <p>Age: {person.age}</p>
                <p>Email: {person.email}</p>
                <p>Salary: ${person.salary}</p>
                <button className="view" onClick={()=>history.push('/')}>Back</button>
            </div>
          </div>
        </Usercomp>
    );
}