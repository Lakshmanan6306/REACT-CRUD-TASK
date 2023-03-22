import './App.css';
import { Baseapp } from './Base/Baseapp';
import { Route, Switch } from 'react-router-dom';
import { Adduser } from './Components/Adduser';
import { Data } from "./data/Data";
import React, { useState } from "react";
import { Viewdata } from './Components/Viewdata';
import { Nopage } from './Components/Nopage';
import { Edituser } from './Components/Edituser';

function App() {
  const [user, setUser] = useState(Data);
  return (
    <div className="App">
      <Switch>
      <Route exact path={"/"}>
        <Baseapp user={user} setUser={setUser}/>
      </Route>
      <Route path="/Adduser">
        <Adduser user={user} setUser={setUser}/>
      </Route>
      <Route path="/Viewdata/:id">
        <Viewdata  user={user} setUser={setUser}/>
      </Route>
      <Route path={"/edit/:id"}>
        <Edituser user={user} setUser={setUser}/>
      </Route>
      <Route path="/**">
        <Nopage/>
      </Route>
      </Switch>
      
    </div>
  );
}

export default App;
