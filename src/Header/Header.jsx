import React,{Component} from 'react';
import {Route} from "react-router-dom";
import CarDetail from "../carDetailsPage/CarDetail.jsx";
import './Header.css';
class Header extends Component
{
render()
{
   return(
    <nav className="navbar navbar-default head-nav navbar-fixed-top">
    <div className="container-fluid">
      <div className="navbar-header">
      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span> 
        </button>
        <a className="navbar-brand" href="/">CarVilla</a>
      </div>
      <div className="collapse navbar-collapse" id="myNavbar">
      <ul className="nav navbar-nav">
        <li><a href="/">Home</a></li>
        <li><a href="/NewCars">New Cars</a></li>
        <li><a href="/UsedCars">Used Cars</a></li>
      </ul>
      </div>
    </div>
    <Route path='/CarDetail' Component={CarDetail} />
  </nav>
   )
}
}
export default Header;