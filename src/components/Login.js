import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import '../style/Login.css';
import apiClient from '../api/http-common';
import { ReactDOM } from "react";
export default function LoginForm(props){
    
    const [employeeName,setEmployeeName] = useState(''); 
    const [employeeId,setEmployeeId]=useState('');
    const [error,setError] = useState(false);
    const employeeNameChangeHandler = (event) => {
        
    setEmployeeName(event.target.value);
    }
     const employeeIdChangeHandler = (event) => {
    setEmployeeId(event.target.value);
}
    const navigate = useNavigate();
    const submitHandler = async (event) => {
        event.preventDefault();
        if(employeeName.trim() === '' || employeeId == 0 || employeeId < 0){
            setError(true);
            
            return;
            
        }
        else{
            const response = await apiClient.get(`/employee_Login/${employeeId}/${employeeName}`);
            console.log(response.data)
            localStorage.setItem('adminLogin',response.data.role);
            localStorage.setItem('employeeId',employeeId);
            navigate("/adminController");
            }
        }
            return(<>
            <form className="form"> {
            error && <p>Enter valid details</p>
            }
            <div><h1>Login</h1></div> 
            <label>Employee Id</label>
            <input type='text'name='empId'onChange={employeeIdChangeHandler}
            value = {employeeId}/><br></br>
            
            <label>Password</label>
            <input type='password'name='empName'onChange={employeeNameChangeHandler}
            value={employeeName}/><br></br>

            <button onClick={submitHandler}>Log In</button> 
            </form></>
            )
        }