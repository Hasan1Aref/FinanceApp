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
import "./EditAdmin.css";

export default function editAdmin (props)  {
  const renderHeader = () => {
    let headerElement = ["admin_id", "username", "password", "profile_picture","option"];

    return headerElement.map((key, index) => {
      return <th key={index} className="DA_th_Admin">{key.toUpperCase()}</th>;
    });
  };

  const renderBody = () => {
    {console.log(props.Admins)}
    return props.Admins.map((admin) => (
      <tr key={admin.admin_id}>
        <td>{admin.admin_id}</td>
        <td>{admin.username}</td>
        <td>{admin.password}</td>
        <td>
          <img
            src={`http://localhost:8000/storage/uploads/${admin.profile_picture}`}
            alt="Italian Trulli"
            width="100px"
            height="100px"
          ></img>
        </td>
        <td className="DA_opration_Admin">
          <Button
            color="success"
            className="mr-3"
            size="sm"
            onClick={() =>
              props.editAdmin(
                admin.admin_id,
                admin.username,
                admin.password,
                admin.profile_picture
              )
              
              
            }
          >
            Edit
          </Button>

          <Button
            color="success"
            size="sm"
            onClick={() => props.removeAdmin(admin.admin_id)}
          >
            Delete
          </Button>
        </td>
      </tr>
    ));
  };
    return (
      <div>
      <table className="DA_Tablecontainer_Admin">
  
        <thead className="DA_thead_Admin">
            <tr className='DA_tableHead_tr_Admin'>{renderHeader()}</tr>
        </thead>
  
        <tbody>{renderBody()}</tbody>
              
      </table >
        <Modal
          isOpen={props.editAdminModal}
          toggle={props.toggleEditAdminModal}
        >
          <ModalHeader toggle={props.toggleEditAdminModal}>
            Update Admin
          </ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="username">username</Label>
              <Input
                id="username"
                name="username"
                value={props.editAdminData.username}
                onChange={props.onChangeEditAdminHanler}
              />
            </FormGroup>
            <FormGroup>
              <Label for="password">password</Label>
              <Input
                type="password"
                id="password"
                name="password"
                value={props.editAdminData.password}
                onChange={props.onChangeEditAdminHanler}
              />
            </FormGroup>

            <FormGroup>
              <Label for="profile_picture">profile_picture</Label>
              <Input
                type="file"
                id="profile_picture"
                name="profile_picture"
                //value={this.props.editStudentData.email}
                onChange={props.onChangeeditfilehandle}
              />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={props.updateAdmin}>
              Update
            </Button>
            <Button color="secondary" onClick={props.toggleEditAdminModal}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  
}
