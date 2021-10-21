import { Link } from "react-router-dom";
import './AllsubIncome.css'
export default function AllsubIncome(props){

const getIncomeID=()=>{

}
    const renderHeader = () => {
        let headerElement = ["id", "title", "currency", "amount",'start_date', "end_date", "income_id"];
    
        return headerElement.map((key, index) => {
          return <th key={index} className="HA_th_CA">{key.toUpperCase()}</th>;
        });
      };
      const renderBody = () => {
        console.log(props.subincome)
        return props.subincome.map((IncomesData) => (
          <tr key={IncomesData.subincome_id}>
            <td>{IncomesData.income_id}</td>
            <td>{IncomesData.title}</td>
            <td>{IncomesData.currency}</td>
            <td>{IncomesData.amount}</td>
            <td>{IncomesData.start_date}</td>
            <td>{IncomesData.end_date}</td>
            <td>{IncomesData.income_id}</td>           
             </tr>
        )
       )}
    return (
        <div>
        <div className='HA_AddSubIncome'>
        <div className='HA_titleSubIncome'>
          <p>Sub-Incomes</p>
          <Link to={'/Home'}><button type='button' className="HA_button_ca_subincome">Back</button></Link>
        </div>
        </div>

        <table id="AllExpense" className="HA_Tablecontainer_subIncome">
        <thead className="HA_thead_subIncome">
          <tr className='HA_tableHead_tr_subIncome'>{renderHeader()}</tr>
        </thead>
        <tbody>{renderBody()}</tbody>
      </table >
        </div>
        

    )   
}