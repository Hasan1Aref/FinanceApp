import './loginComponent.css';
import { Link, Redirect,useHistory } from "react-router-dom";
import API from "../../api";
import { useState } from 'react';
export default function LoginComponent(){
      const[state,updateState]= useState({
       username:"",
       password:""})

        const setState = (nextState) => {
          updateState((prevState) => ({
            ...prevState,
            ...nextState,
          }));
        };

  const AdminExist =async()=>{
    await API.post('adminisexists',{username:state.username},{password:state.password})
    .then(res => {
      const result = res.data;
      console.log(result);
    console.log(state);

    });
  }
  const handleInputChange = (e) => {
    setState({
      [e.target.name]: e.target.value
  });
  }

    return(
		<div class="HA_wrapper">
      <div class="HA_Title">Login Form</div>
      <form action="#">
        <div class="HA_field">
          <input type="text" id='username' onChange={handleInputChange} required/>
          <label>User name</label>
        </div>
        <div class="HA_field">
          <input type="password" id="password" onChange={handleInputChange}  required/>
          <label>Password</label>
        </div>
        <div class="HA_content">
          <div class="HA_checkbox">
            <input type="checkbox" id="remember-me"/>
            <label for="remember-me">Remember me</label>
          </div>
          <div class="HA_pass-link"><a href="#">Forgot password?</a></div>
        </div>
        <div class="HA_field">
      
          <Link to="/Home"><input type="submit"value="Login" onClick={()=>AdminExist()}/></Link>
        </div>
        <div class="HA_signup-link">Not me <a href="#">Signup now</a></div>
      </form>
    </div>
  
  
    );
}