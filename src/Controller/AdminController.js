import { Link } from "react-router-dom";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import EmployeeDetails from "../components/EmployeeDetails";
import apiClient from "../api/http-common";
import AssetDetails from "../components/AssetDetails";





function AdminController(props) {


    const adminLogin = localStorage.getItem('adminLogin');
    const [admin, setAdmin] = useState(false);

    

    useEffect(() => {
        if (adminLogin === "admin") {
            setAdmin(true);
        }
    }, []);
    

    const employeeId = localStorage.getItem('employeeId');
   

const [employee,setEmployee] = useState('');
     useEffect(()=>{apiClient.get(`/retrieveEmployeeById/${employeeId}`).then((response)=>{
        setEmployee(response.data);
        
     })},[]);
    
    const assetId = localStorage.getItem('assetId');
    
    const [asset,setAsset] = useState([]);

    useEffect(()=>{apiClient.get(`/retriveAssetById/${employeeId}`).then((response) => {
        setAsset(response.data);
    })},[asset] );


   
    return (

        <div>
            <Header />
            <header><h1>Employee Asset Management System</h1></header>
            <h2>EmployeeDetails</h2>
             <EmployeeDetails employee = {employee} setCurrentEmployee = {props.setCurrentEmployee}/>
             <h2>AssetDetails</h2>
             <AssetDetails asset = {asset} /> 
            {admin &&
                <div>
                    <Link to= "/adminController/addEmployee"><h2>Add Employee</h2></Link>
                    <Link to="/admincontroller/addAsset"><h2>Add Asset</h2></Link>
                    <Link to="/admincontroller/viewAllEmployees"><h2>View All Employees</h2></Link>
                    <Link to='/admincontroller/viewAllAssets'><h2>View All Assets</h2></Link>
            
                </div>
            }

        </div>
    )
}

export default AdminController;