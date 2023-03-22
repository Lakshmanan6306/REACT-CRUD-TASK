import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Usercomp } from "./Usercomponents";


export function Edituser({user,setUser}){
    const [idx, setIdx] = useState();
    const [name, setName] = useState();
    const [age, setAge] = useState();
    const [email, setEmail] = useState();
    const [salary, setSalary] = useState();
    const history = useHistory();
    const {id} = useParams();
    const userData = user.find((per)=>per.id == id);
    // console.log(userData)

    useEffect(()=>{
        setIdx(userData.id);
        setName(userData.name);
        setAge(userData.age);
        setEmail(userData.email);
        setSalary(userData.salary);
    },[])

    const editeduser = () =>{
        const arrIndex = user.findIndex((per)=> per.id == id)
        // console.log(arrIndex)
        const editedData ={
            id:idx,
            name,
            age,
            email,
            salary
        }
        // console.log(editedData)
        user[arrIndex] = editedData
        setUser([...user]);
        history.push('/');
    }
    

    return(
    <Usercomp title={"Add a New User"} style={'header'}>
        <div className="newuser">
            <input type={"number"} placeholder="id" value={idx} onChange={(e)=>setIdx(e.target.value)}/>
            <input type={"text"} placeholder="name" value={name} onChange={(e)=>setName(e.target.value)}/>
            <input type={"number"} placeholder="age" value={age} onChange={(e)=>setAge(e.target.value)}/>
            <input type={"email"} placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
            <input type={"number"} placeholder="salary" value={salary} onChange={(e)=>setSalary(e.target.value)}/>
            <button className="btn" onClick={editeduser} >Save</button>
        </div>
    </Usercomp>
    );
}