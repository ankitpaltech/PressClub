
import './App.css';
import Navbar from './components/Navbar';

import React, { Component } from 'react'
import News from './components/News';


export default class App extends Component {
  c = "john";
  render() {
    return (
      <div>
        <Navbar/>
        <News/>
       
        
      </div>
    )
  }
}

