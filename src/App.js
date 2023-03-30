
import './App.css';
import Navbar from './components/Navbar';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import React, { Component } from 'react'
import News from './components/News';

const router = createBrowserRouter([
  {
    path: "/",
    element: <News pageSize ={12} country = {"in"} category = {"general"}/>,
  },
  {
    path: "general",
    element: <News pageSize ={12} country = {"in"} category = {"general"}/>,
  },
  {
    path: "health",
    element: <News pageSize ={12} country = {"in"} category = {"health"}/>,
  },
  {
    path: "science",
    element: <News pageSize ={12} country = {"in"} category = {"science"}/>,
  },
  {
    path: "sports",
    element: <News pageSize ={12} country = {"in"} category = {"sports"}/>,
  },
  {
    path: "technology",
    element: <News pageSize ={12} country = {"in"} category = {"technology"}/>,
  },
  {
    path: "business",
    element: <News pageSize ={12} country = {"in"} category = {"business"}/>,
  },
  {
    path: "entertainment",
    element: <News pageSize ={12} country = {"in"} category = {"entertainment"}/>,
  },
  
]);


export default class App extends Component {
  c = "john";
  render() {
    return (
      <div>
        <Navbar/>
        <RouterProvider router={router} />
       
        
      </div>
    )
  }
}

