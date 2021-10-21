import React, { useEffect, useState } from "react";
import API from "../../api";
import "./Incomes.css";

import AllIncomes from '../../components/IncomeComponent /AllIncomes/AllIncomes';
import AddIncome from '../../components/IncomeComponent /AddIncome/AddIncome'

export default function FixedIncomes() {
  const [state, updateState] = useState({
    Incomes: [],
    IncomesData: {
      income_id:"",
      title: "",
      description: "",
      currency: "",
      amount: "",
      recurring: "",
      end_date: "",
      type: "",
      categories_id: ""
    },
    addIncomesModal: false,
    editIncomesModal: false
  });

  const setState = (nextState) => {
    updateState((prevState) => ({
      ...prevState,
      ...nextState,
    }));
  };

  const request = async () => {
    await API.get(`getallincomes`)
      .then(res => {
        const result = res.data;
        console.log(result);
        setState({ Incomes: result });
      });
  };

  useEffect(() => {
    request();
  }, [JSON.stringify(state)]);

  const add = async () => {
    let reqBody = state.IncomesData;
    API.post("creatincome", reqBody);
    setState({ addIncomesModal: false });
    request();
  };

  const removeIncome = async id => {
    console.log(id);
    await API.delete(`deleteincome/${id}`).then((response) => {
      //alert(response.data)
      console.log(response)
      
    });;
    await request();
  };

  const editIncome = (income_id, title, description, currency, amount, recurring, end_date, type, categories_id) => {
    setState({
      IncomesData: { income_id, title, description, currency, amount, recurring, end_date, type, categories_id },
      editIncomesModal: !state.editIncomesModal,
    });
  };

  const updateIncome = async () => {
    let reqBody = state.IncomesData;
    const id = state.IncomesData.income_id;
    console.log(id);
    await API.put(`updateincome/${id}`, reqBody);
    
    setState({ editIncomesModal: false });
    await request();

    // window.location.reload();
    // let expence = state.Expence.filter(ex => ex.Incomes_id == id);
    // setState({ Incomes: expence });
  };

  const onChangeAddIncomeHandler = (e) => {
    let IncomesData = state.IncomesData;
    IncomesData[e.target.name] = e.target.value;
    setState({ IncomesData });
  }

  const onChangeEditIncomeHanler = (e) => {
    let { IncomesData } = state;
    IncomesData[e.target.name] = e.target.value;
    setState({ IncomesData });
  };


  const toggleaddIncomesModal = () => {
    setState({ addIncomesModal: !state.addIncomesModal });
    setState({
      IncomesData: {
        title: "",
        description: "",
        currency: "",
        amount: "",
        recurring: "",
        end_date: "",
        type: "",
        categories_id: ""
      }
    })
  }

  const toggleeditIncomesModal = () => {
    console.log(state.editIncomesModal);
    setState({ editIncomesModal: !state.editIncomesModal });
  }

  return (
    <div className="HA_IncomeContainer">
    <div className="HA_AddIncomeContainer">
      <AddIncome
        toggleaddIncomesModal={toggleaddIncomesModal}
        addIncomesModal={state.addIncomesModal}
        onChangeAddIncomeHandler={onChangeAddIncomeHandler}
        // onChangefilehandle={onChangefilehandle}
        add={add}
        IncomesData={state.IncomesData}
        Categories={state.Categories}
      />
</div>
     <div className='HA_AllIncomesContainer'>
      <AllIncomes
        toggleeditIncomesModal={toggleeditIncomesModal}
        editIncomesModal={state.editIncomesModal}
        onChangeEditIncomeHanler={onChangeEditIncomeHanler}
        editIncome={editIncome}
        IncomesData={state.IncomesData}
        Incomes={state.Incomes}
        removeIncome={removeIncome}
        updateIncome={updateIncome}
        Categories={state.Categories}
      // CategoryData={state.CategoryData}
      // getallCategories={getallCategories}
      />
      </div>
      {/* <AllIncomes/> */}
      </div>
  );
}