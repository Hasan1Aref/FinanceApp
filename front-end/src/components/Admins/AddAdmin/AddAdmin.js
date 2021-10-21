import React from "react";
import { Link } from "react-router-dom";
import "./AddAdmin.css";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

export default function AddAdmin(props) {

  return (
    <div className='DA_AddAdmin'>
      <div className='DA_title_Admin'>
        <p>Admins</p>
        <Link to={'/Home'}><button type='button' className="DA_button_Admin">Back</button></Link>
      </div>
      <div className="DA_ISB_Admin">
        <button className="DA_input" type='button' onClick={props.toggleNewAdminModal}>Add Admin </button>



        {/* <Button
          className="float-right mb-4"
          color="primary"
          onClick={props.toggleNewAdminModal}
        >
          Add Admin
        </Button> */}
      </div>
      <Modal isOpen={props.newAdminModal} toggle={props.toggleNewAdminModal}>
        <ModalHeader toggle={props.toggleNewAdminModal}>
          Add new Admin
        </ModalHeader>
        <ModalBody>
          <FormGroup>
            <Label for="username">username</Label>
            <Input
              id="username"
              name="username"
              value={props.newAdminsData.username}
              onChange={props.onChangeAddAdminHandler}
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              type="password"
              id="password"
              name="password"
              value={props.newAdminsData.password}
              onChange={props.onChangeAddAdminHandler}
            />
          </FormGroup>

          <FormGroup>
            <Label for="profile_picture">profile_picture</Label>
            <Input
              type="file"
              id="profile_picture"
              name="profile_picture"
              onChange={props.onChangefilehandle}
            />
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => props.add()}>
            Add
          </Button>{" "}
          <Button color="secondary" onClick={props.toggleNewAdminModal}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );

}
