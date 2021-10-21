import React, { useEffect, useState } from "react";
import API from "../../api";
import "./Expenses.css";

import AllExpenses from '../../components/ExpenseComponent/AllExpenses/AllExpenses';
import AddExpense from '../../components/ExpenseComponent/AddExpense/AddExpense'

export default function FixedExpenses() {
  const [state, updateState] = useState({
    Expenses: [],
    ExpensesData: {
      expenses_id:"",
      title: "",
      description: "",
      currency: "",
      amount: "",
      recurring: "",
      end_date: "",
      type: "",
      categories_id: ""
    },
    addExpensesModal: false,
    editExpensesModal: false
  });

  const setState = (nextState) => {
    updateState((prevState) => ({
      ...prevState,
      ...nextState,
    }));
  };

  const request = async () => {
    await API.get(`getallexpenses`)
      .then(res => {
        const result = res.data;
        console.log(result);
        setState({ Expenses: result });
      });
  };

  useEffect(() => {
    request();
  }, [JSON.stringify(state)]);

  const add = async () => {
    let reqBody = state.ExpensesData;
    console.log(reqBody);
    API.post("createxpenses", reqBody);
    setState({ addExpensesModal: false });
    request();
  };

  const removeExpense = async id => {
    await API.delete(`deleteexpenses/${id}`).then((response) => {
      alert(response.data)
      //console.log(response)
      
    });;;
    console.log(id);
    await request();
  };

  const editExpense = (expenses_id, title, description, currency, amount, recurring, end_date, type, categories_id) => {
    setState({
      ExpensesData: { expenses_id, title, description, currency, amount, recurring, end_date, type, categories_id },
      editExpensesModal: !state.editExpensesModal,
    });
  };

  const updateExpense = async () => {
    let reqBody = state.ExpensesData;
    const id = state.ExpensesData.expenses_id;
    await API.put(`updateexpenses/${id}`, reqBody);
    setState({ editExpensesModal: false });
    await request();

    // window.location.reload();
    // let expence = state.Expence.filter(ex => ex.expenses_id == id);
    // setState({ Expenses: expence });
  };

  const onChangeAddExpenseHandler = (e) => {
    let ExpensesData = state.ExpensesData;
    ExpensesData[e.target.name] = e.target.value;
    setState({ ExpensesData });
  }

  const onChangeEditExpenseHanler = (e) => {
    let { ExpensesData } = state;
    ExpensesData[e.target.name] = e.target.value;
    setState({ ExpensesData });
  };


  const toggleaddExpensesModal = () => {
    setState({ addExpensesModal: !state.addExpensesModal });
    setState({
      ExpensesData: {
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

  const toggleeditExpensesModal = () => {
    console.log(state.editExpensesModal);
    setState({ editExpensesModal: !state.editExpensesModal });
  }

  return (
    <div className="HA_ExpenseContainer">
    <div className="HA_AddExpenseContainer">
      <AddExpense
        toggleaddExpensesModal={toggleaddExpensesModal}
        addExpensesModal={state.addExpensesModal}
        onChangeAddExpenseHandler={onChangeAddExpenseHandler}
        // onChangefilehandle={onChangefilehandle}
        add={add}
        ExpensesData={state.ExpensesData}
        Categories={state.Categories}
      />
</div>
     <div className='HA_AllExpensesContainer'>
      <AllExpenses
        toggleeditExpensesModal={toggleeditExpensesModal}
        editExpensesModal={state.editExpensesModal}
        onChangeEditExpenseHanler={onChangeEditExpenseHanler}
        editExpense={editExpense}
        ExpensesData={state.ExpensesData}
        Expenses={state.Expenses}
        removeExpense={removeExpense}
        updateExpense={updateExpense}
        Categories={state.Categories}
      // CategoryData={state.CategoryData}
      // getallCategories={getallCategories}
      />
      </div>
      
      </div>
  );
}