import React,{ useEffect,useState } from "react";
import axios from "axios";
import "./Category.css";
import {Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input, Table, Button} from "reactstrap";

import AddCategory from "../../components/Category/AddCategory/addcategory/AddCategory";
import AllCategory from "../../components/Category/AllCategory/AllCategory";



export default function Category(){
    const [state, updateState] = useState({
        Category: [],
        CategoriesData: {
        categories_name: "",
        admin_id:""
    
        },
       
        addCategoriesModal: false,
        editCategoriesModal: false,
        
      });
        const setState = (nextState) => {
        updateState((prevState) => ({
          ...prevState,
          ...nextState,
        }));
      };
        const request = async () => {
          await axios
            .get("http://localhost:8000/api/getallcategories")
            
            .then((response) => {
              console.log(response)
              setState({ Category: response.data });
              
            });
        };
      useEffect(() => {
    
        request();
      }, []);
    
////////add category

      const add = () => {
        const reqBody = state.CategoriesData;
        console.log(reqBody)
        
      
      axios
      .post("http://localhost:8000/api/creatcategory", { "categories_name": state.CategoriesData.categories_name,
      "admin_id":state.CategoriesData.admin_id }, 
      {
        headers:{
          'Content-Type':'application/json',
          'Accept':'application/json'
        }
      }
      )
      setState({ addCategoriesModal: false });
        request();
      
     
};

/////// Remove

const removeCategory = async id => {
  await axios.delete(`http://localhost:8000/api/deletecategories/${id}`)
  .then((response) => {
    alert(response.data)
    console.log(response)
    
  });
  await request();
};
 
////// Edit

const editCategory = (categories_id, categories_name, admin_id) => {
  setState({
    CategoriesData: { categories_id, categories_name, admin_id },
    editCategoriesModal: !state.editCategoriesModal,
  });
};

////// Update

const updateCategory = async () => {
  let reqBody = state.CategoriesData;
  const id = state.CategoriesData.categories_id;

  await axios.put(`http://localhost:8000/api/updatecategories/${id}`, reqBody);
  setState({ editCategoriesModal: false });
  await request();
};
     
      const onChangeAddCategoryHandler = (e) => {
        let  CategoriesData  = state.CategoriesData;
        CategoriesData[e.target.name] = e.target.value;
        setState({ CategoriesData });
      };

      const onChangeEditCategoryHanler = (e) => {
        let { CategoriesData } = state;
        CategoriesData[e.target.name] = e.target.value;
        setState({ CategoriesData });
        }; //this is to fill the popup with new value of the same  category (edit category)  


      const toggleaddCategoriesModal = () => {
        setState({ addCategoriesModal: !state.addCategoriesModal });
        setState({
          CategoriesData: {
            categories_name: "",
            // admin_id: "",
           
          }
        })
      };

      const toggleEditCategoriesModal = () => {
        setState({
          editCategoriesModal: !state.editCategoriesModa });
      };//this is to toggel the state of the popup (by default it is false)
   
     
     
      return (
        <div className="DA_CategoryContainer">
            <div className="DA_AddCategoryContainer">
              
            <AddCategory
             toggleaddCategoriesModal={toggleaddCategoriesModal}
             addCategoriesModal={state.addCategoriesModal}
             onChangeAddCategoryHandler={onChangeAddCategoryHandler}
       
             add={add}
             CategoriesData={state.CategoriesData}
           />

            </div>
            <div className='DA_AllCategoriesContainer'>

            <AllCategory
             toggleEditCategoriesModal={toggleEditCategoriesModal}
             editCategoriesModal={state.editCategoriesModal}
             onChangeEditCategoryHanler={onChangeEditCategoryHanler}
             editCategory={editCategory}
             CategoriesData={state.CategoriesData}
             categories={state.Category}
             removeCategory={removeCategory}
             updateCategory={updateCategory}
             />
            </div>
      </div>
        
    );

}
