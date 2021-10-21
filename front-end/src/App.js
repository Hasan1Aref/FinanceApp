import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

//Pages
import Login from './pages/Login/login'
import Home from './pages/home_page/home_page';
import Admins from './pages/Admins/Admins';
import Expenses from './pages/Expenses/Expenses';
import Incomes from './pages/Incomes/Incomes';
import ProfitGoals from './pages/ProfitGoals/ProfitGoals';
import Reports from './pages/Reports/Reports';
import Category from './pages/Category/Category';
import SubIncome from './pages/subIncome/subIncome';
import SubExpense from './pages/subExpense/subExpense'

import './App.css';
function App() {
  return (
    <div className="App">
      
<Router> 
          <Link to="/Login"></Link>
          <Link to="/Home"></Link>
          <Link to="/Admins"></Link>
          <Link to="/Expenses"></Link>
          <Link to="/Incomes"></Link>
          <Link to="/ProfitGoals"></Link>
          <Link to="/reports"></Link>
          <Link to="/Category"></Link>
          <Link to="/SubIncome"></Link>
          <Link to="/SubExpense"></Link>

          
      <Switch>
        <Route exact path='/login' component={Login} />
        <Route exact path='/Home' component={Home} />
        <Route exact path='/Expenses' component={Expenses} />
        <Route exact path='/Incomes' component={Incomes} />
        <Route exact path='/ProfitGoals' component={ProfitGoals} />
        <Route exact path='/reports' component={Reports} />
        <Route exact path='/Category' component={Category} />
        <Route exact path='/SubIncome' component={SubIncome} />
        <Route exact path='/SubExpense' component={SubExpense} />
        <Route exact path='/Admins' component={Admins} />



        {/* <Route exact path='/addcategory' component={addcategory} /> */}

        
      </Switch>

</Router>
    
        </div>

  );
}

export default App;
