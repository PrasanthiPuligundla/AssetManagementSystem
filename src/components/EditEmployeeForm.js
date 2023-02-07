import React,{ useState } from 'react'
import { useDispatch } from 'react-redux';
import { updateEmployeeName } from '../actions/EmployeeAction';
import Header from './Header';
import './Form.css';
import { useNavigate } from 'react-router-dom';


    function EditEmployeeForm(props){
      const navigate = useNavigate();

    const dispatch = useDispatch();

    const employee = props.currentEmployee;

    const [employeeName,setEmployeeName] = useState(employee.name);
    
    const handleInputchange=(event)=>{
        setEmployeeName(event.target.value)
         
    }
    const submitHandler=(event) => {
           event.preventDefault();
         dispatch(updateEmployeeName(employee.id,employeeName));

         navigate('/adminController')

         alert("Employee is updated")
        }
        return(

         <div className='login'>
            <Header />
        <form onSubmit={submitHandler} className='form'>

             <label>Employee Id</label>
             <input 
             name='id' 
             value ={employee.id}/>
             <br></br>

            <label>Employee Name</label>
             <input type='text'
             name='name' 
             onChange={handleInputchange} value ={employeeName}/>
             <br></br>

             <label>Address</label>
             <input type='text'
             name='address'
             value ={employee.address}/>
             
             <label>Phone Number</label>
             <input type='text'
             name='phoneNo'
              value ={employee.phoneNo}/>

              <label>Role</label>
              <input type='text'
              name='employeeName'
               value ={employee.role}/><br></br>

             <button onClick={submitHandler}>updateEmployee</button>

              </form>
              </div>
              )
            }

            export default EditEmployeeForm;