import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { propTypes } from "react-bootstrap/esm/Image";
import './AllCategory.css';
import {Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input, Table, Button} from "reactstrap";





 export default function AllCategory(props) {
 
	
  
	const renderHeader = () => {
	  let headerElement = ["ID","Category Name","option"];
  
	  return headerElement.map((key, index) => {
		return <th key={index} className="DA_th_CA">{key.toUpperCase() }</th>;
	  });
	};

	const renderBody = () => {
		return ( props.categories || [] ).map((CategoriesData) => (
		  <tr key={CategoriesData.categories_id} >
        {/* className='H_tableRow' */}
      <td>{CategoriesData.categories_id}</td>
			<td>{CategoriesData.categories_name}</td>
			{/* <td>{CategoriesData.admin_id}</td> */}
			
            <td className="DA_opration">
          <Button
            color="success"
            className="mr-3"
            size="sm"
            onClick={
              () => {props.editCategory(
                CategoriesData.categories_id,
                CategoriesData.categories_name,
                // CategoriesData.admin_id,
                ) }
            }
          >
			  Edit
		  </Button>
	      
		  <Button
            color="success"
            size="sm"
            onClick={() => { if (window.confirm('Delete the item?')) { props.removeCategory(CategoriesData.categories_id) }; }}
          >
            Delete
          </Button>
        </td>
      </tr>
    ));
  };
	return (
		<div>
		<table className="DA_Tablecontainer">

			<thead className="DA_thead">
			  	<tr className='DA_tableHead_tr'>{renderHeader()}</tr>
			</thead>

      <tbody>{renderBody()}</tbody>
					  
    </table >

	  <Modal
              isOpen={props.editCategoriesModal}
              toggle={props.toggleEditCategoriesModal}
            >
              <ModalHeader toggle={props.toggleEditCategoriesModal}>
                Update Category
              </ModalHeader>
              <ModalBody>
              <FormGroup>
                < Label for="categories_name">categoryName</Label>
                <Input
                id="categories_name"
                name="categories_name"
                value={props.CategoriesData.categories_name}
                onChange={props.onChangeEditCategoryHanler}
                />
             </FormGroup>
              
             {/* <FormGroup>
             <Label for="admin_id">admin_id</Label>
             <Input
            id="admin_id"
            name="admin_id"
            value={props.CategoriesData.admin_id}
            onChange={props.onChangeEditCategoryHanler}
            />
            </FormGroup> */}
    
              </ModalBody>
              <ModalFooter>
                <Button 
                  color="primary" 
                  onClick={ () => props.updateCategory()
				}
                >
                  Update
                </Button>
                <Button
                  color="secondary"
                  onClick={props.toggleEditcategoriesModal}
                >
                  Cancel
                </Button>
              </ModalFooter>
            </Modal>

						
</div>
	);
			 
 }
