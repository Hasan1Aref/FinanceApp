import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Homebuttons.css';
import ReactDOM from 'react-dom';

export default class Homebutton extends React.Component {
   
   
    render() {
        return (
            <div>
               
                <div className="DA_generalContainer">

                    <div className="DA_b1">
                    <Link to="/Incomes" className='DA_button'  >Incomes</Link>
                    </div>

                    <div className="DA_b1">
                    <Link to="/Expenses" className='DA_button'  >Expenses</Link>
                    </div>

                    <div className="DA_b1">
                    <Link to="/Category" className='DA_button'  >Category</Link>
                    </div>

                </div>
            </div>
        );
    }

}
