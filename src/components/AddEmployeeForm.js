import { React,useState } from "react";
import { useDispatch } from "react-redux";
import { addEmployee } from "../actions/EmployeeAction";
import Button from "../Layout/Button";
import Header from "./Header";
import './Form.css'
import { useNavigate } from "react-router-dom";


function AddEmployeeForm () {
    const navigate = useNavigate();

    const [error,setError] = useState(false);
     const [digitError,setDigitError] = useState('');

     const dispatch = useDispatch();

    
    const initialState = {
        name:'',
        address:'',
        phoneNo:'',
        role:''
    }
    const [employee,setEmployee] = useState(initialState);

    const handleInputChange = (event) => {
        const {name,value} = event.target;

        setEmployee({...employee,[name]:value})
    }

    const submitHandler =(event) =>{
       
        event.preventDefault();

        if(employee.name.trim() === '' ||employee.address.trim() === ''|| employee.phoneNo<0||employee.role.trim() ===''){
                 setError(true);
                 return;
        }

        if(employee.phoneNo.length !== 10){
            setDigitError(true);
            return;
        }

       dispatch(addEmployee(employee));
       setError(false);
       setDigitError(false);
       console.log({employee});

       navigate('/adminController')

       alert("Employee added Sucessfully")
    }

    return(
        <div className="login">
            <Header />
            <h2>Employee Form</h2>
                
            <form className="form" onSubmit={submitHandler}>
            {error && <h1>Please fill correct details!!....</h1>}
                <div>
                   <label>Name</label>
                   <input type = 'text' name = 'name' value={employee.name} onChange={handleInputChange}/>

                   <label>Address</label>
                   <input type = 'text' name = 'address' value={employee.address} onChange={handleInputChange}/>

                   <label>PhoneNo</label>
                   <input type = 'number' name ='phoneNo' value={employee.phoneNo} onChange={handleInputChange}/>

                   <label>Role</label>
                   <input type = 'text' name = 'role' value={employee.role} onChange={handleInputChange}/>                  
                   </div>
                   <Button operation = 'Add Employee' />
                </form>     
        </div>
    )
}

export default AddEmployeeForm;