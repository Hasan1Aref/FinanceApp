import React, { useEffect, useState } from "react";
import AllSubExpenses  from '../../components/subExpenseComponent/AllsubExpense'
import API from "../../api";
import './subexpense.css';
export default function SubExpense(props){
  const [state, updateState] = useState({
    subexpense: [],
    subExpenseData: {
    expenses_sub_id:"",
      title: "",
      description: "",
      currency: "",
      amount: "",
      recurring: "",
      start_date:"",
      end_date: "",
      type: "",
      categories_id: ""
    }
  });

  const setState = (nextState) => {
    updateState((prevState) => ({
      ...prevState,
      ...nextState,
    }));
  };

  const request = async () => {
    await API.get(`getallSubExpenses`)
      .then(res => {
        const result = res.data;
        console.log(result)
        setState({ subexpense: result });
      });
  };
  useEffect(() => {
    request();
  }, [JSON.stringify(state)]);
return(
  <div className='HA_subExpensesContainer'>
     <div className='HA_AllsubExpensesContainer'>
  <AllSubExpenses 
  subexpense={state.subexpense}
  subExpenseData={state.subExpenseData}
  />
  </div>
  </div>
);
}