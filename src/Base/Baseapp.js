import React, { Children, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Usercomp } from "../Components/Usercomponents";


export function Baseapp({user, setUser}){
    const history = useHistory();
    const {id} = useParams();

    const deletuser = (e) => {
        const newuser = user.filter((person)=> person.id !== e)
        console.log(newuser);
        setUser(newuser);
        }
    
    return(
            <Usercomp title={"Dashboard"} style={"header"}>
               <div className="user-content">
                {user.map((person,index)=>(
                 <div key={index} className="user-card">
                   <h3>{person.name}</h3>
                   <p>Age: {person.age}</p>
                   <p>Email: {person.email}</p>
                   <p>Salary: ${person.salary}</p>
                   <button className="view" onClick={()=>history.push(`/Viewdata/${index}`)}>View</button>

                   <button className="edit" onClick={()=>history.push(`/edit/${person.id}`)}>Edit</button>
                   
                   <button className="del" onClick={()=>deletuser(person.id)}>Delete</button>
                 </div>
                ))}
               </div>
            </Usercomp>
    );
}