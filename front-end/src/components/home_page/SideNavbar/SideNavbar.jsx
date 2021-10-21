import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import "./SideNavbar.css"


export default class Sidenavbar extends React.Component{

  constructor(props){
    super(props);
    this.state={
      sideBar: false
    }

    this.handleSidebar = this.handleSidebar.bind(this);
  }

  handleSidebar(){
    this.setState({
      sideBar : !this.state.sideBar

    });
  }

  render(){
    return(
      <div>
        <header className="DA_header">
          <div className="navContainer">
            <span className="logo" >Achievers</span>
            <nav  >
              <ul 
                
                className="mainNav" style={this.state.sideBar ? { transform: "translateX(0)" } : null}>
                <li>
                  <Link to="Home"><a className="mainNavLink" href="#"> 
                   Home
                  </a>
                  </Link>
                </li>
                <li>
                <Link to="Admins"> <a className="mainNavLink" href="#">
                   Admin
                  </a>
                  </Link>
                </li>
                <li>
                <Link to="Incomes"><a className="mainNavLink" href="#">
                   Income
                  </a>
                  </Link>
                </li>
                <li>
                <Link to="Expenses"><a className="mainNavLink" href="#">
                  Expence
                  </a>
                  </Link> 
                </li>
                <li>
                <li>
                <Link to="Category"><a className="mainNavLink" href="#">
                  Category
                  </a>
                  </Link>
                </li>
                <li>
                <Link to="SubIncome"><a className="mainNavLink" href="#">
                     SubIncome  </a>
                  </Link>
                  </li>
                  <li>
                <Link to="SubExpense"><a className="mainNavLink" href="#">
                   SubExpense
                  </a>
                  </Link>
                  </li>
                  <li>
                <Link to="ProfitGoals"><a className="mainNavLink" href="#">
                  Profit Goals
                  </a>
                  </Link>
                  </li>
                </li>
                
              </ul>
            </nav>
            <button 
              onClick = {this.handleSidebar}
              className={`navToggle ${this.state.sideBar ? "open" : null}`
            
              }>
              <span />
              <span />
              <span />
            </button>
            <div 
              onClick={this.handleSidebar.bind(this)}
              className={`overlay ${this.state.sideBar ? "open" : ""}`}
              />
          </div>
        </header>
        {/* <div className ="wrapper"></div> */}
      </div>

    );
  }

}








