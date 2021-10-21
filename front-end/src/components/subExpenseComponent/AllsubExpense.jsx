import { Link } from "react-router-dom";
import './AllsubExpense.css'
export default function AllsubIncome(props){

const getIncomeID=()=>{

}
    const renderHeader = () => {
        let headerElement = ["id", "title", "currency", "amount","start_date", "end_date", "expense_id"];
    
        return headerElement.map((key, index) => {
          return <th key={index} className="HA_th_CA">{key.toUpperCase()}</th>;
        });
      };
      const renderBody = () => {
        console.log(props.subexpense)
        return props.subexpense.map((ExpenseData) => (
          <tr key={ExpenseData.expenses_sub_id}>
            <td>{ExpenseData.expenses_sub_id}</td>
            <td>{ExpenseData.title}</td>
            <td>{ExpenseData.currency}</td>
            <td>{ExpenseData.amount}</td>
            <td>{ExpenseData.start_date}</td>
            <td>{ExpenseData.end_date}</td>
            <td>{ExpenseData.expense_id}</td>           
             </tr>
        )
       )}
    return (
        <div>
        <div className='HA_AddSubExpense'>
        <div className='HA_titleSubExpense'>
          <p>Sub-Incomes</p>
          <Link to={'/Home'}><button type='button' className="HA_button_ca_subexpense">Back</button></Link>
        </div>
        </div>

        <table id="AllExpense" className="HA_Tablecontainer_subExpense">
        <thead className="HA_thead_subExpense">
          <tr className='HA_tableHead_tr_subExpense'>{renderHeader()}</tr>
        </thead>
        <tbody>{renderBody()}</tbody>
      </table >
        </div>
        

    )   
}