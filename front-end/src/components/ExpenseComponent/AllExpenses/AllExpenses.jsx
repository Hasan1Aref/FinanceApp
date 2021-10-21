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
  Table,
} from "reactstrap";

import Categories from "./Categories";
import './AllExpenses.css';

export default function AllExpenses(props) {

  const onchangevalue=()=>{
    console.log("the collected recurring is "+props.ExpensesData.recurring.value)
   return     props.ExpensesData.recurring.value
   ;
  }
  const selectTypeValue=()=>{
    console.log( "the collected type is "+props.ExpensesData.type.value)
   return props.ExpensesData.type.value

  }

  const renderHeader = () => {
    let headerElement = ["expenses_id", "title", "description", "currency", "amount", "recurring", "end_date", "type", "categories_id","option"];

    return headerElement.map((key, index) => {
      return <th key={index} className="HA_th_CA">{key.toUpperCase()}</th>;
    });
  };
  const renderBody = () => {
    return props.Expenses.map((ExpensesData) => (
      <tr key={ExpensesData.expenses_id}>
        <td>{ExpensesData.expenses_id}</td>
        <td>{ExpensesData.title}</td>
        <td>{ExpensesData.description}</td>
        <td>{ExpensesData.currency}</td>
        <td>{ExpensesData.amount}</td>
        <td>{ExpensesData.recurring}</td>
        <td>{ExpensesData.end_date}</td>
        <td>{ExpensesData.type}</td>
        <td>{ExpensesData.categories_id}</td>



        <td className="HA_opration">
          <Button
            color="success"
            className="mr-3"
            size="sm"
            onClick={
              () => props.editExpense(
                ExpensesData.expenses_id,
                ExpensesData.title,
                ExpensesData.description,
                ExpensesData.currency,
                ExpensesData.amount,
                ExpensesData.recurring,
                ExpensesData.end_date,
                ExpensesData.type,
                ExpensesData.categories_id)

                // console.log(props.ExpensesData.recurring)
            }
          >
            Edit
          </Button>

          <Button
            color="success"
            size="mr-3"
            onClick={() => { if (window.confirm('Delete the item?')) { props.removeExpense(ExpensesData.expenses_id) }; }}
          >
            Delete
          </Button>
        </td>
      </tr>
    ));
  };
  return (
    <>
      <table id="AllExpense" className="HA_Tablecontainer">
        <thead className="HA_thead">
          <tr className='HA_tableHead_tr'>{renderHeader()}</tr>
        </thead>
        <tbody>{renderBody()}</tbody>
      </table >

      <Modal
        isOpen={props.editExpensesModal}
        toggle={props.toggleeditExpensesModal}
      >
        <ModalHeader toggle={props.toggleeditExpensesModal}>
          Update Admin
        </ModalHeader>
        <ModalBody>
          <FormGroup>
            <Label for="title">title</Label>
            <Input
              id="title"
              name="title"
              value={props.ExpensesData.title}
              onChange={props.onChangeEditExpenseHanler}
            />
          </FormGroup>
          <FormGroup>
            <Label for="description">description</Label>
            <Input
              type="text"
              id="description"
              name="description"
              maxLength={20}
              value={props.ExpensesData.description}
              onChange={props.onChangeEditExpenseHanler}
            />
          </FormGroup>

          <FormGroup>
            <Label for="currency">currency</Label>
            <Input
              type="text"
              id="currency"
              name="currency"
              value={props.ExpensesData.currency}
            />
          </FormGroup>
          <FormGroup>
            <Label for="amount">amount</Label>
            <Input
              type="text"
              id="amount"
              name="amount"
              value={props.ExpensesData.amount}
              onChange={props.onChangeEditExpenseHanler}
            />
          </FormGroup>
          <FormGroup>
            <Label for="recurring">recurring</Label>
            <select
              id="recurring"
              name="recurring"
              onChange={()=>{
                if(document.getElementById('recurring').value==1){
                  {props.ExpensesData.recurring='weekly'}
                  console.log('recurring if the value is weekly : '+props.ExpensesData.recurring)
                }else if(document.getElementById('recurring').value==2){
                 {props.ExpensesData.recurring='monthly'}
                 console.log('recurring if the value is monthly : '+props.ExpensesData.recurring)
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
              value={props.ExpensesData.end_date}
              onChange={props.onChangeEditExpenseHanler}
            />
          </FormGroup>
          <FormGroup>
            <Label for="type">type</Label>
            <select
              id="type"
              name="type"
              onChange={()=>{
                if(document.getElementById('type').value==1){
                  {props.ExpensesData.type='fixed'}
                  console.log('type if the value is fixed : '+props.ExpensesData.type)
                }else if(document.getElementById('type').value==2){
                 {props.ExpensesData.type='recurring'}
                 console.log('type if the value is recurring : '+props.ExpensesData.type)
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
              value={props.ExpensesData.categories_id}
              onChange={props.onChangeEditExpenseHanler}
            />
          </FormGroup>


        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={
            () =>
              props.updateExpense()
              
          }>
            Update
          </Button>
          <Button color="secondary" onClick={props.toggleeditExpensesModal}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>

    </>
  );

}