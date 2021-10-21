import { Link, Redirect,useHistory } from "react-router-dom";
import './login.css';
import LoginComponent from "../../components/login/loginComponent";
export default function Login(){

    return(
		<div className="Container">
	<LoginComponent/>
	</div>
  
    );
}