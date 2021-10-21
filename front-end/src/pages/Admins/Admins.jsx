import React, { useState, useEffect } from "react";
import { Table, Button } from "reactstrap";
import axios from "axios";
import "./Admins.css"

//components

import AddAdmin from "../../components/Admins/AddAdmin/AddAdmin"
import EditAdmin from "../../components/Admins/EditAdmin/EditAdmin";

export default function Admin() {
  const [state, updateState] = useState({
    Admins: [],
    newAdminsData: {
      username: "",
      password: "",
      profile_picture: "",
    },
    isLoading: false,
    status: "",
    newAdminModal: false,
    editAdminData: {
      admin_id: "",
      username: "",
      password: "",
      profile_picture: "",
    },
    editAdminModal: false,
    noDataFound: "",
  });
  const setState = (nextState) => {
    updateState((prevState) => ({
      ...prevState,
      ...nextState,
    }));
  };
  const request = async () => {
    await axios
      .get("http://localhost:8000/api/getalladmins")
      .then((response) => {
        setState({ Admins: response.data });
      });
  };
  useEffect(() => {
    request();
  }, []);

  const toggleNewAdminModal = () => {
    setState({
      newAdminModal: !state.newAdminModal,
    });
  };
  const onChangeAddAdminHandler = (e) => {
    let newAdminsData = state.newAdminsData;
    newAdminsData[e.target.name] = e.target.value;
    setState({ newAdminsData });
  };
  const onChangefilehandle = (e) => {
    let newAdminsData = state.newAdminsData;
    newAdminsData[e.target.name] = e.target.files[0];
    setState({ newAdminsData });
  };
  const onChangeeditfilehandle = (e) => {
    let editAdminData = state.editAdminData;
    editAdminData[e.target.name] = e.target.files[0];
    setState({ editAdminData });
  };

  const add = () => {
    const formData = new FormData();
    formData.append("username", state.newAdminsData.username);
    formData.append("password", state.newAdminsData.password);
    formData.append("profile_picture", state.newAdminsData.profile_picture);
    axios
      .post("http://localhost:8000/api/createadmin", formData, {
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setState({ newAdminModal: false });
        request();
      });
  };

  const updateAdmin = async () => {
    const formData = new FormData();
    formData.append("username", state.editAdminData.username);
    formData.append("password", state.editAdminData.password);
    formData.append("profile_picture", state.editAdminData.profile_picture);

    setState({
      isLoading: true,
    });

    await axios
      .post(
        `http://localhost:8000/api/updateadmin/${state.editAdminData.admin_id}`,
        formData,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setState({
          editAdminModal: false,
        });
       // request();
      });
    await request();
  };

  const removeAdmin = (admin_id) => {
    console.log(admin_id);
    axios
      .delete(`http://localhost:8000/api/deleteadmin/${admin_id}`)
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
    // console.log(Admins);
    alert("are sure you want to remove");
    setState({
      Admins: state.Admins.filter(function (obj) {
        return obj.admin_id !== admin_id;
      }),
    });
  };
  const toggleEditAdminModal = () => {
    setState({
      editAdminModal: !state.editAdminModal,
    });
  };

  const onChangeEditAdminHanler = (e) => {
    let { editAdminData } = state;
    editAdminData[e.target.name] = e.target.value;
    setState({ editAdminData });
  };

  const editAdmin = (admin_id, username, password, profile_picture) => {
    setState({
      editAdminData: { admin_id, username, password, profile_picture },
      editAdminModal: !state.editAdminModal,
    });
  };
  
  return (
    <div className="DA_AdminContainer">
    <div className="DA_AddAdminContainer">
      
      <AddAdmin
        toggleNewAdminModal={toggleNewAdminModal}
        newAdminModal={state.newAdminModal}
        onChangeAddAdminHandler={onChangeAddAdminHandler}
        onChangefilehandle={onChangefilehandle}
        add={add}
        newAdminsData={state.newAdminsData}
      />
                  </div>
            <div className='DA_AllAdminContainer'>

      <EditAdmin
        toggleEditAdminModal={toggleEditAdminModal}
        editAdminModal={state.editAdminModal}
        onChangeEditAdminHanler={onChangeEditAdminHanler}
        onChangeeditfilehandle={onChangeeditfilehandle}
        editAdmin={editAdmin}
        removeAdmin={removeAdmin}
        Admins={state.Admins}
        editAdminData={state.editAdminData}
        updateAdmin={updateAdmin}
      />
      {/* <Table id="employee">
        <thead>
          <tr>{renderHeader()}</tr>
        </thead>
        <tbody>{renderBody()}</tbody>
      </Table> */}
    </div>
    </div>
    
  );
}
