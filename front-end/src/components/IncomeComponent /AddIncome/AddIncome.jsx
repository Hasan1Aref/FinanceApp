import "./AddIncome.css";
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    FormGroup,
    Label,
    Input,
    DropdownMenu,
    DropdownItem
} from "reactstrap";
import { Link } from "react-router-dom";
export default function AddIncome(props) {
    return (
        <div className='HA_AddIncome'>
            <div className='HA_title'>
              <p>Incomes</p>
              <Link to={'/Home'}><button type='button' className="DA_button_ca">Back</button></Link>
            </div>
            <div className="HA_ISB">
            <input className="HA_CA_input" type="text" placeholder="title"></input>
            <input className="HA_CA_input" type="text" placeholder="description"></input>
            <input className="HA_CA_input" type="text" placeholder="amount"></input>
            <select name="" className="HA_CA_input">
                <option value="USD" selected="selected">United States Dollars</option>
                <option value="EUR">Euro</option>
                <option value="GBP">United Kingdom Pounds</option>
                <option value="DZD">Algeria Dinars</option>
                <option value="ARP">Argentina Pesos</option>
                <option value="AUD">Australia Dollars</option>
                <option value="ATS">Austria Schillings</option>
                <option value="BSD">Bahamas Dollars</option>
                <option value="BBD">Barbados Dollars</option>
                <option value="BEF">Belgium Francs</option>
                <option value="BMD">Bermuda Dollars</option>
                <option value="BRR">Brazil Real</option>
                <option value="BGL">Bulgaria Lev</option>
                <option value="CAD">Canada Dollars</option>
                <option value="CLP">Chile Pesos</option>
                <option value="CNY">China Yuan Renmimbi</option>
                <option value="CYP">Cyprus Pounds</option>
                <option value="CSK">Czech Republic Koruna</option>
                <option value="DKK">Denmark Kroner</option>
                <option value="NLG">Dutch Guilders</option>
                <option value="XCD">Eastern Caribbean Dollars</option>
                <option value="EGP">Egypt Pounds</option>
                <option value="FJD">Fiji Dollars</option>
                <option value="FIM">Finland Markka</option>
                <option value="FRF">France Francs</option>
                <option value="DEM">Germany Deutsche Marks</option>
                <option value="XAU">Gold Ounces</option>
                <option value="GRD">Greece Drachmas</option>
                <option value="HKD">Hong Kong Dollars</option>
                <option value="HUF">Hungary Forint</option>
                <option value="ISK">Iceland Krona</option>
                <option value="INR">India Rupees</option>
                <option value="IDR">Indonesia Rupiah</option>
                <option value="IEP">Ireland Punt</option>
                <option value="ILS">Israel New Shekels</option>
                <option value="ITL">Italy Lira</option>
                <option value="JMD">Jamaica Dollars</option>
                <option value="JPY">Japan Yen</option>
                <option value="JOD">Jordan Dinar</option>
                <option value="KRW">Korea (South) Won</option>
                <option value="LBP">Lebanon Pounds</option>
                <option value="LUF">Luxembourg Francs</option>
                <option value="MYR">Malaysia Ringgit</option>
                <option value="MXP">Mexico Pesos</option>
                <option value="NLG">Netherlands Guilders</option>
                <option value="NZD">New Zealand Dollars</option>
                <option value="NOK">Norway Kroner</option>
                <option value="PKR">Pakistan Rupees</option>
                <option value="XPD">Palladium Ounces</option>
                <option value="PHP">Philippines Pesos</option>
                <option value="XPT">Platinum Ounces</option>
                <option value="PLZ">Poland Zloty</option>
                <option value="PTE">Portugal Escudo</option>
                <option value="ROL">Romania Leu</option>
                <option value="RUR">Russia Rubles</option>
                <option value="SAR">Saudi Arabia Riyal</option>
                <option value="XAG">Silver Ounces</option>
                <option value="SGD">Singapore Dollars</option>
                <option value="SKK">Slovakia Koruna</option>
                <option value="ZAR">South Africa Rand</option>
                <option value="KRW">South Korea Won</option>
                <option value="ESP">Spain Pesetas</option>
                <option value="XDR">Special Drawing Right (IMF)</option>
                <option value="SDD">Sudan Dinar</option>
                <option value="SEK">Sweden Krona</option>
                <option value="CHF">Switzerland Francs</option>
                <option value="TWD">Taiwan Dollars</option>
                <option value="THB">Thailand Baht</option>
                <option value="TTD">Trinidad and Tobago Dollars</option>
                <option value="TRL">Turkey Lira</option>
                <option value="VEB">Venezuela Bolivar</option>
                <option value="ZMK">Zambia Kwacha</option>
                <option value="EUR">Euro</option>
                <option value="XCD">Eastern Caribbean Dollars</option>
                <option value="XDR">Special Drawing Right (IMF)</option>
                <option value="XAG">Silver Ounces</option>
                <option value="XAU">Gold Ounces</option>
                <option value="XPD">Palladium Ounces</option>
                <option value="XPT">Platinum Ounces</option>
            </select>
            <input className="HA_CA_input" type="text" placeholder="date"></input>
            <select selected="selected" className="HA_CA_input" name="category" id="category">
                <option value="volvo">category1</option>
                <option value="saab">category2</option>
                <option value="mercedes">category3</option>
            </select>
            <button className="HA_input" type='button' onClick={props.toggleaddIncomesModal}
            >Add</button>
            <button className="HA_input" type='button'>Search</button>
            </div>
            <Modal
                isOpen={props.addIncomesModal}
                toggle={props.toggleaddIncomesModal}
            >
                <ModalHeader toggle={props.toggleaddIncomesModal} >

                    Add Income
                </ModalHeader>
                <ModalBody>
                    <FormGroup>
                        <Label for="title">title</Label>
                        <Input
                            id="title"
                            name="title"
                            value={props.IncomesData.title}
                            onChange={props.onChangeAddIncomeHandler}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for="description">description</Label>
                        <Input
                            id="description"
                            name="description"
                            value={props.IncomesData.description}
                            onChange={props.onChangeAddIncomeHandler}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for="currency">currency</Label>
                        <Input
                            id="currency"
                            name="currency"
                            value={props.IncomesData.currency}
                            onChange={props.onChangeAddIncomeHandler}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for="amount">amount</Label>
                        <Input
                            id="amount"
                            name="amount"
                            value={props.IncomesData.amount}
                            onChange={props.onChangeAddIncomeHandler}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for="recurring">recurring</Label>
                        <select
              id="recurring"
              name="recurring"
              onChange={()=>{
                if(document.getElementById('recurring').value==1){
                  {props.IncomesData.recurring='weakly'}
                  console.log('recurring if the value is weakly : '+props.IncomesData.recurring)
                }else if(document.getElementById('recurring').value==2){
                 {props.IncomesData.recurring='monthly'}
                 console.log('recurring if the value is monthly : '+props.IncomesData.recurring)
                }
                return props.onChangeEditIncomeHanler   
              }
            
            }
            >
              <option value={1}>weakly</option>
              <option value={2}>monthly</option>
            </select>
                    </FormGroup>
                    <FormGroup>
                        <Label for="end_date">end_date</Label>
                        <Input
                            type='datetime-local'
                            id="end_date"
                            name="end_date"
                            value={props.IncomesData.end_date}
                            onChange={props.onChangeAddIncomeHandler}
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
                        <Label for="categories_id">category_id</Label>
                        <Input
                            id="categories_id"
                            name="categories_id"
                            value={props.IncomesData.categories_id}
                            onChange={props.onChangeAddIncomeHandler}
                        />
                    </FormGroup>

                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={() => props.add()}>
                        Add
                    </Button>{" "}
                    <Button color="secondary" onClick={props.toggleaddIncomesModal}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}
