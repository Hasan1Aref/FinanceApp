import { propTypes } from "react-bootstrap/esm/Image";
import { Link } from "react-router-dom";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Label,
  Input,
  Table
} from "reactstrap";

import Categories from "./Categories";
import './AllIncomes.css';

export default function AllIncomes(props) {

  const getEditData = () => {

  }

  const renderHeader = () => {
    let headerElement = ["Incomes_id", "title", "description", "currency", "amount", "recurring", "end_date", "type", "categories_id","option"];

    return headerElement.map((key, index) => {
      return <th key={index} className="HA_th_CA">{key.toUpperCase()}</th>;
    });
  };
  const renderBody = () => {
    return props.Incomes.map((IncomesData) => (
      <tr key={IncomesData.income_id}>
        <td>{IncomesData.income_id}</td>
        <td>{IncomesData.title}</td>
        <td>{IncomesData.description}</td>
        <td>{IncomesData.currency}</td>
        <td>{IncomesData.amount}</td>
        <td>{IncomesData.recurring}</td>
        <td>{IncomesData.end_date}</td>
        <td>{IncomesData.type}</td>
        <td>{IncomesData.categories_id}</td>



        <td className="HA_opration">
          <Button
            color="success"
            className="mr-3"
            size="sm"
            onClick={
              () => props.editIncome(
                IncomesData.income_id,
                IncomesData.title,
                IncomesData.description,
                IncomesData.currency,
                IncomesData.amount,
                IncomesData.recurring,
                IncomesData.end_date,
                IncomesData.type,
                IncomesData.categories_id)
            }
          >
            Edit
          </Button>

          <Button
            color="success"
            size="mr-3"
            onClick={() => { if (window.confirm('Delete the item?')) { props.removeIncome(IncomesData.income_id) }; }}
          >
            Delete
          </Button>
        </td>
      </tr>
    ));
  };
  return (
    <>
      <table id="AllIncome" className="HA_Tablecontainer">
        <thead className="HA_thead">
          <tr className='HA_tableHead_tr'>{renderHeader()}</tr>
        </thead>
        <tbody>{renderBody()}</tbody>
      </table >

      <Modal
        isOpen={props.editIncomesModal}
        toggle={props.toggleeditIncomesModal}
      >
        <ModalHeader toggle={props.toggleeditIncomesModal}>
          Update Admin
        </ModalHeader>
        <ModalBody>
          <FormGroup>
            <Label for="title">title</Label>
            <Input
              id="title"
              name="title"
              value={props.IncomesData.title}
              onChange={props.onChangeEditIncomeHanler}
            />
          </FormGroup>
          <FormGroup>
            <Label for="description">description</Label>
            <Input
              type="text"
              id="description"
              name="description"
              maxLength={20}
              value={props.IncomesData.description}
              onChange={props.onChangeEditIncomeHanler}
            />
          </FormGroup>

          <FormGroup>
            <Label for="currency">currency</Label>
            <Input
              type="text"
              id="currency"
              name="currency"
              value={props.IncomesData.currency}
              onChange={props.onChangeEditIncomeHanler}
            />
          </FormGroup>
          <FormGroup>
            <Label for="amount">amount</Label>
            <Input
              type="text"
              id="amount"
              name="amount"
              value={props.IncomesData.amount}
              onChange={props.onChangeEditIncomeHanler}
            />
          </FormGroup>
          <FormGroup>
            <Label for="recurring">recurring</Label>
            <select
              id="recurring"
              name="recurring"
              onChange={()=>{
                if(document.getElementById('recurring').value==1){
                  {props.IncomesData.recurring='weekly'}
                  console.log('recurring if the value is weekly : '+props.IncomesData.recurring)
                }else if(document.getElementById('recurring').value==2){
                 {props.IncomesData.recurring='monthly'}
                 console.log('recurring if the value is monthly : '+props.IncomesData.recurring)
                }
                return props.onChangeEditIncomeHanler   
              }
            
            }
            >
              <option value={1}>weekly</option>
              <option value={2}>monthly</option>
            </select>
          </FormGroup>
          <FormGroup>
            <Label for="end_date">end_date</Label>
            <Input
              type="datetime-local"
              id="end_date"
              name="end_date"
              value={props.IncomesData.end_date}
              onChange={props.onChangeEditIncomeHanler}
            />
          </FormGroup>
          <FormGroup>
            <Label for="type">type</Label>
            <select
              id="type"
              name="type"
              onChange={()=>{
                if(document.getElementById('type').value==1){
                  {props.IncomesData.type='fixed'}
                  console.log('type if the value is fixed : '+props.IncomesData.type)
                }else if(document.getElementById('type').value==2){
                 {props.IncomesData.type='recurring'}
                 console.log('type if the value is recurring : '+props.IncomesData.type)
                }
                return props.onChangeEditIncomeHanler   
              }
            
            }
            >
              <option value={1}>Fixed</option>
              <option value={2}>Recurring</option>
            </select>
          </FormGroup>
          <FormGroup>
            <Label for="categories_id">categories_id</Label>
            <Categories
              name="categories_id"
              value={props.IncomesData.categories_id}
              onChange={props.onChangeEditIncomeHanler}
            />
          </FormGroup>


        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={
            () =>
              props.updateIncome()
          }>
            Update
          </Button>
          <Button color="secondary" onClick={props.toggleeditIncomesModal}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>

    </>
  );

}