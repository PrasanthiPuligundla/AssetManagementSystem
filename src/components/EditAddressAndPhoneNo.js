import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateAddressAndPhoneNo } from "../actions/EmployeeAction";
import './Form.css';

function EditAddressAndPhoneNo (props) {

    const dispatch = useDispatch();

    const navigate = useNavigate();
    
    const[employee,setEmployee] = useState(props.currentEmployee)
    const employeeid = localStorage.getItem('employeeId');

    console.log(employeeid);

    const handleInputchange=(event)=>{
           const {name,value } = event.target;
           setEmployee({...employee,[name]:value});    
    }
    const submitHandler=(event) => {
        event.preventDefault();
        console.log(employee.id)
      dispatch(updateAddressAndPhoneNo(employee.id,employee));
      navigate('/adminController');

      alert("Address and PhoneNo is Updated")
    }
         
    
    return(
        <form onSubmit={submitHandler}>
            <header><h1>Edit EmployeeDetails</h1></header>
            <label>Employee Id</label>
            <input
            type='number'
            name='id'
            value={employeeid}
            />
            <br></br>

            <label>Employee Name</label>
            <input
            type='text'
            name='name'
            value={employee.name}
            />
            <br></br>

            <label>Address</label>
            <input 
            type ='text'
            name='address'
            value={employee.address}
            onChange={handleInputchange}/>
            <br></br>

            <label>Phone Number</label>
            <input
            type='number'
            name='phoneNo'
            value={employee.phoneNo}
            onChange={handleInputchange}/>
            <br></br>

            <label>Role</label>
            <input
            type='text'
            name='address'
            value={employee.role}
           />
            <br></br>

            <button onClick={submitHandler}>updateDetails</button>
        </form>
    )
}

export default EditAddressAndPhoneNo;