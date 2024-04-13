import './App.css';
import React,  {Component} from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter ,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component{
  render(){
    return(
        <BrowserRouter>
        <Navbar/>
        <switch>
        <Route exact path="/"><News pageSize={5} key='generall' country='in' category='general'/></Route>
         <Route exact path="/business/"><News pageSize={5} key='business' country='in' category='business'/></Route>
         <Route exact path="/general/"><News pageSize={5} key='general' country='in' category='general'/></Route>
         <Route exact path="/entertainment/"><News pageSize={5} key='entertainment' country='in' category='entertainment'/></Route>
         <Route exact path="/science/"><News pageSize={5} key='science' country='in' category='science'/></Route>
         <Route exact path="/technology/"><News pageSize={5} key='technology' country='in' category='technology'/></Route>
         <Route exact path="/sports/"><News pageSize={5} key='sports' country='in' category='sports'/></Route>
         <Route exact path="/health/"><News pageSize={5} key='health' country='in' category='health'/></Route>
        </switch>
        </BrowserRouter>
    )
  }
}
