import { useDispatch } from "react-redux";
import { deleteEmployee } from "../actions/EmployeeAction";
import Header from "./Header";
import { Link } from "react-router-dom";

function EmployeeList (props) {

    const dispatch = useDispatch();    

    const  editHandler  = (employee) => { 
        
        props.setCurrentEmployee(employee);
     }       
    return(
        <div>
            <Header />
            <h1>Employee List</h1>
                <div>
                <table border='3cm'>
                    <thead>
                        <tr>
                            <th>Employee Id</th>
                            <th>Employee Name</th>
                            <th>Address</th>
                            <th>Phone Number</th>
                            <th>Role</th>
                        
                            
                        </tr>
                    </thead>
                    <tbody>
                
                {props.employees.map((employee)=>(
                     
                        <tr key = {employee.id}>
                         <td>{employee.id}</td>
                         <td>{employee.name}</td>
                         <td>{employee.address}</td>
                         <td>{employee.phoneNo}</td>
                         <td>{employee.role}</td>
                         
                         <td><button onClick={()=> {editHandler(employee)}}><Link to = '/adminController/editEmployee'>Edit</Link></button></td>
                         <td><button onClick = {() => {dispatch(deleteEmployee(employee.id))}}>Delete</button></td>
                 </tr>
                                             
                ))}
                
                </tbody>
                </table>
                </div>
        </div>
    )
}

export default EmployeeList;