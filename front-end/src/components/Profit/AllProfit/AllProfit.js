import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { propTypes } from "react-bootstrap/esm/Image";
import './AllProfit.css';
import { Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input, Table, Button } from "reactstrap";





export default function AllProfit(props) {

    const getEditData = () => {

    };
    return (

        <div>


            <Button color="success" className="mr-3" size="sm" className="DA_bu_All_p_1"
                style={{ display: (props.showButton) ? 'none' : 'block' }}
                onClick={() => { props.editProfit() }}  >
                Edit
            </Button><br />

            <Button color="success" size="sm" className="DA_bu_All_p_2"
                style={{ display: (props.showButton) ? 'none' : 'block' }}
                onClick={() => { if (window.confirm('Delete the item?')) { props.removeProfit() }; }}
            >
                Delete
            </Button>





            <Modal
                isOpen={props.editProfitsModal}
                toggle={props.toggleEditProfitsModal}
            >

                <ModalHeader toggle={props.toggleEditProfitsModal} >

                    Edit Profit
                </ModalHeader>
                <ModalBody>

                    <FormGroup>
                        <Label for="profit_goal">Profit Goal</Label>
                        <Input
                            id="profit_goal"
                            name="profit_goal"
                            value={props.value}
                            onChange={props.onChangeEditProfitHanler}
                        />
                    </FormGroup>

                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={() => props.updateProfit()} >  Update   </Button>
                    <Button color="secondary" onClick={props.toggleEditProfitsModal}> Cancel</Button>
                </ModalFooter>
            </Modal>


        </div>
    );

}
