import { propTypes } from "react-bootstrap/esm/Image";
import { Link } from "react-router-dom";
import "./AddCategory.css";


import React, { useState, useEffect } from "react";
import {Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input, Table, Button} from "reactstrap";
// import { Table, Button } from "reactstrap";


export default function AddCategory(props){
  const addClose=()=>{
    return(
        props.add()
        //props.toggleNewCategoryModal
        
    );                
  }
    return (
        <div className='DA_AddCategory'>
            <div className='DA_title'>
              <p>Category</p>
              <Link to={'/Home'}><button type='button' className="DA_button_ca">Back</button></Link>
            </div>
            <div className="DA_ISB">
            <input type="text"className="DA_CA_input" placeholder="CategoryName"></input>
            {/* <select  className="DA_input" name="Admin" id="Admin">
                    <option value="Dalia">Admin1</option>
                    <option value="Hasan">Admin2</option>
                    <option value="Abdallah">Admin3</option>
                   
            </select> */}
     
            <button className="DA_input" type='button'  onClick={props.toggleaddCategoriesModal}>Add </button>
            <button className="DA_input" type='button'>Search</button>
             
</div>
            
<Modal
isOpen={props.addCategoriesModal}
toggle={props.toggleaddCategoriesModal}
>

<ModalHeader toggle={props.toggleaddCategoriesModal} >
    
Add Category
</ModalHeader>
<ModalBody>

<FormGroup>
<Label for="categories_name">categoryName</Label>
<Input
id="categories_name"
name="categories_name"
value={props.CategoriesData.categories_name}
onChange={props.onChangeAddCategoryHandler}
/>
</FormGroup>

{/* <FormGroup>
<Label for="admin_id">admin_id</Label>
<Input
id="admin_id"
name="admin_id"
value={props.CategoriesData.admin_id}
onChange={props.onChangeAddCategoryHandler}
/>
</FormGroup> */}

</ModalBody>
<ModalFooter>
<Button color="primary" onClick={addClose}>
Add 
</Button>{" "}
<Button color="secondary" onClick={props.toggleaddCategoriesModal}>
Cancel
</Button>
</ModalFooter>
</Modal>
         </div>
    );
}