// import React from 'react';
// import { propTypes } from "react-bootstrap/esm/Image";
// import { Link } from "react-router-dom";
// import "./AllCategory.css";

// import React, { useState, useEffect } from "react";
// import {Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input, Table, Button} from "reactstrap";

// export default function EditCategory(props){
   
//         return (
//           <div>
//             <Modal
//               isOpen={props.editCategoryModal}
//               toggle={props.toggleEditCategoryModal}
//             >
//               <ModalHeader toggle={props.toggleEditCategoryModal}>
//                 Update Category
//               </ModalHeader>
//               <ModalBody>
//               <FormGroup>
//                 < Label for="categories_name">categoryName</Label>
//                 <Input
//                 id="categories_name"
//                 name="categories_name"
//                 value={props.editCategoriesData.categories_name}
//                 onChange={props.onChangeEditCategoryHanler}
//                 />
//              </FormGroup>
              
//              <FormGroup>
//              <Label for="admin_id">admin_id</Label>
//              <Input
//             id="admin_id"
//             name="admin_id"
//             value={props.editCategoriesData.admin_id}
//             onChange={props.onChangeEditCategoryHanler}
//             />
//             </FormGroup>
    
//               </ModalBody>
//               <ModalFooter>
//                 <Button 
//                   color="primary" 
//                   onClick={props.updateCategory}
//                 >
//                   Update
//                 </Button>
//                 <Button
//                   color="secondary"
//                   onClick={props.toggleEditCategoryModal}
//                 >
//                   Cancel
//                 </Button>
//               </ModalFooter>
//             </Modal>
//             </div>
//         );
//       }

