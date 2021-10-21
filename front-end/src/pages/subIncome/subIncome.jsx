import React, { useEffect, useState } from "react";
import AllSubIncomes  from '../../components/subIncomeComponent/AllsubIncome'
import API from "../../api";
import './subincome.css';
export default function SubIncome(props){
  const [state, updateState] = useState({
    subincome: [],
    subIncomeData: {
      incomesub_id:"",
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
    await API.get(`getallincomessub`)
      .then(res => {
        const result = res.data;
        console.log(result)
        setState({ subincome: result });
      });
  };
  useEffect(() => {
    request();
  }, [JSON.stringify(state)]);
return(
  <div className='HA_subIncomesContainer'>
     <div className='HA_AllsubIncomesContainer'>
  <AllSubIncomes 
  subincome={state.subincome}
  subIncomeData={state.subIncomeData}
  />
  </div>
  </div>
);
}