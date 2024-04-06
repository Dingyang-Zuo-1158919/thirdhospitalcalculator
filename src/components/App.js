import React, { Component } from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import Heading from './Heading/Heading';
import Forms from './Forms/Forms';
import Records from './Records/Records';
import './App.css'

export default class App extends Component{

  render(){
    return(
        <div>
          <Heading /> 
          <br/><br/>
          <div className="container1">
            <div className="subcontainer1">
              <NavLink className="linking" to=".">主页</NavLink>
              <br/>
              <NavLink className="linking" to="/forms">计算</NavLink>
              <br/>
              <NavLink className="linking" to="/records">记录</NavLink>
            </div>
            <div className="subcontainer2">
              <Routes className="body">
                  <Route path="." element={<App />}/>
                  <Route path="/forms" element={<Forms />}/>
                  <Route path="/records" element={<Records />}/>
              </Routes>
            </div>
          </div>
        </div>
    ) 
  }
}