import React, { Component } from 'react';
import './home_page.css';
import Sidenavbar from '../../components/home_page/SideNavbar/SideNavbar';
import Homebutton from '../../components/home_page/Homebuttons/Homebuttons';
import ExpensesCharts from '../../components/home_page/charts/ExpensesCharts';
import IncomesCharts from '../../components/home_page/charts/IncomesCharts';
// import Charts from '../../components/home_page/charts/ProfitCharts';

class Home_page extends React.Component {

    render() {
        return (
            <body className="DA_bb">
                <div className="DA_Home_body" >


                    <div>
                        < Sidenavbar />
                    </div>



                    <div className="DA_Home_button">
                        <Homebutton />
                    </div>

                    <div className="DA_Charts" style={{ gridRow: 2 }} >

                       <div className="DA_Inc_C" > 
                           <IncomesCharts />
                        </div>
                        <div className="DA_EX_C">
                            <ExpensesCharts />
                        </div>
                    </div>

                </div>
            </body>
        );
    }
}
export default Home_page;


