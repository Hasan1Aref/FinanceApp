import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ProfitGoals.css";
import { Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input, Table, Button } from "reactstrap";

// import AddCategory from "../../components/Category/AddCategory/addcategory/AddCategory";
import AddProfit from "../../components/Profit/AddProfit/AddProfit";
import AllProfit from "../../components/Profit/AllProfit/AllProfit";
import Charts from '../../components/home_page/charts/ProfitCharts';


export default function ProfitGoals() {

  const [state, updateState] = useState({
    Profit: [],
    profit_goal: "",
    addProfitsModal: false,
    editProfitsModal: false,
    showButton: true
  });
  const setState = (nextState) => {
    updateState((prevState) => ({
      ...prevState,
      ...nextState,
    }));
  };
  const request = () => {
    setState({ Profit: [] })
    axios
      .get("http://localhost:8000/api/getallprofits")

      .then(res => {
        const data = res.data;

        if (data && data[0]) {
          console.log("true");
          setState({ Profit: data });
          setState({ profit_goal: data[0].profit_goal });
          setState({ showButton: false })
        } else {
          setState({ showButton: true });
        }

      });
  };

  useEffect(() => {
    request();
  }, []);

  ////////add Profit

  const add = async () => {
    const reqBody = { profit_goal: state.profit_goal };
    await axios
      .post("http://localhost:8000/api/createprofit", reqBody);
    setState({ addProfitsModal: false });
    request();
    window.location.reload();
  };

  /////// Remove

  const removeProfit = async () => {
    await axios.delete(`http://localhost:8000/api/deleteprofit`);
    request();
    window.location.reload();
  };

  ////// Edit

  const editProfit = (profit_goal) => {
    setState({
      // ProfitsData: { profit_goal },
      editProfitsModal: !state.editProfitsModal,
    });
  };

  ////// Update

  const updateProfit = async () => {
    let reqBody = { profit_goal: state.profit_goal };
    // const id = state.ProfitsData.profit_goal;

    await axios.put(`http://localhost:8000/api/updateprofit`, reqBody);
    setState({ editProfitsModal: false });
    request();
    window.location.reload();
  };

  const onChangeAddProfitHandler = (e) => {
    let ProfitsData = state.ProfitsData;
    ProfitsData[e.target.name] = e.target.value;
    setState({ ProfitsData });
  };

  const onChangeEditProfitHanler = (e) => {
    setState({ profit_goal: e.target.value });
  }; //this is to fill the popup with new value of the same  profit (edit category)  


  const toggleaddProfitsModal = () => {
    setState({ addProfitsModal: !state.addProfitsModal });
    setState({ profit_goal: "" });
    // setState({
    //   ProfitsData: {
    //     profit_goal: "",
    //   }
    // })
  };

  const toggleEditProfitsModal = () => {
    setState({
      editProfitsModal: !state.editProfitsModal
    });
  };//this is to toggel the state of the popup (by default it is false)



  return (
    <div className="DA_ProfitContainer_p">
      <div className='DA_title_p'>
        <p>Profit Goals</p>
        <Link to={'/Home'}><button type='button' className="DA_button_pf">Back</button></Link>
      </div>
      <div className="DA_BO_chart">
        <div className="DA_ADD_ALL">
          <div className="DA_AddProfitContainer_p">
            <AddProfit
              toggleaddProfitsModal={toggleaddProfitsModal}
              addProfitsModal={state.addProfitsModal}
              onChangeAddProfitHandler={onChangeEditProfitHanler}
              showButton={state.showButton}
              add={add}
              ProfitsData={state.ProfitsData}
            />
          </div>
          <div className='DA_AllProfitContainer_p'>
            <AllProfit
              showButton={state.showButton}
              toggleEditProfitsModal={toggleEditProfitsModal}
              editProfitsModal={state.editProfitsModal}
              onChangeEditProfitHanler={onChangeEditProfitHanler}
              editProfit={editProfit}
              ProfitsData={state.ProfitsData}
              value={state.profit_goal}
              profits={state.Profit}
              removeProfit={removeProfit}
              updateProfit={updateProfit}
            />
          </div>
        </div>
        <div className="DA_chart_p">
          <Charts />
        </div>
      </div>
    </div>
  );
}