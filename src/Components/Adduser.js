import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Usercomp } from "./Usercomponents";

export function Adduser({children,user,setUser}){
    const [id, setId] = useState();
    const [name, setName] = useState();
    const [age, setAge] = useState();
    const [email, setEmail] = useState();
    const [salary, setSalary] = useState();
    const history = useHistory();
    
    const newuser=()=>{
        const userData ={
            id,
            name,
            age,
            email,
            salary
        }
        console.log(userData);
        setUser([...user,userData]);
        history.push("/")
    }
    

return(
    <Usercomp title={"Add a New User"} style={'header'}>
        <div className="newuser">
            <input type={"number"} placeholder="id" value={id} onChange={(e)=>setId(e.target.value)}/>
            <input type={"text"} placeholder="name" value={name} onChange={(e)=>setName(e.target.value)}/>
            <input type={"number"} placeholder="age" value={age} onChange={(e)=>setAge(e.target.value)}/>
            <input type={"email"} placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
            <input type={"number"} placeholder="salary" value={salary} onChange={(e)=>setSalary(e.target.value)}/>
            <button className="btn" onClick={newuser}>Add</button>
        </div>
    </Usercomp>
);

}