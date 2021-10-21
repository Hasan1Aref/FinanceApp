import { propTypes } from "react-bootstrap/esm/Image";
import { Link } from "react-router-dom";
import "./AddProfit.css";
import axios from "axios";

import React, { useState, useEffect } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input, Table, Button } from "reactstrap";
// import { Table, Button } from "reactstrap";

export default function AddProfit(props) {

  const [profit, setprofit] = useState([]);

  const request = async () => {
    await axios
      .get("http://localhost:8000/api/getallprofits")

      .then((response) => {
        console.log(response.data[0])
        setprofit(response.data[0]);

      });
  };

  useEffect(() => {
    request();
  }, []);

  const addClose = () => {
    return (props.add());
  }
  return (
    <div >

      <div className="DA_ISB_p">
        {profit && <h1>{(profit.profit_goal)}</h1>}
        <Button
          style={{ display: (props.showButton) ? 'block' : 'none' }}
          color="success" className="mr-3" size="sm"
          className="DA_button_add" type='button' onClick={props.toggleaddProfitsModal}>Add </Button>
      </div>


      <Modal
        isOpen={props.addProfitsModal}
        toggle={props.toggleaddProfitsModal}
      >

        <ModalHeader toggle={props.toggleaddProfitsModal} >

          Add Profit
        </ModalHeader>
        <ModalBody>

          <FormGroup>
            <Label for="profit_goal">Profit Goal</Label>
            <Input
              id="profit_goal"
              name="profit_goal"
              value={props.value}
              onChange={props.onChangeAddProfitHandler}
            />
          </FormGroup>

        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={addClose}>
            Add
          </Button>{" "}
          <Button color="secondary" onClick={props.toggleaddProfitsModal}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}