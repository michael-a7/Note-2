
import React from 'react'
import './App.css';
import Home from "./Application/home"
import {Route} from "react-router-dom";
import Notepad from './Application/NotePad';
function App() {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/notes" component={Notepad}/>
    </div>
  );
}

export default App;
