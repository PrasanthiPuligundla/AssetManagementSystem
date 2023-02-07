import { useEffect ,useState} from 'react';
import { Route,createBrowserRouter, RouterProvider,createRoutesFromElements } from 'react-router-dom';
import './App.css';
import AddAssetForm from './components/AddAssetForm';
import AddEmployeeForm from './components/AddEmployeeForm';
import Controller from './Controller/AdminController';
import EmployeeList from './components/EmployeeList';
import Login from './components/Login';
import apiClient from './api/http-common';
import AssetList from './components/AssetList';
import EditEmployeeForm from './components/EditEmployeeForm';
import EditAssetForm from './components/EditAssetForm';
import EditAddressAndPhoneNo from './components/EditAddressAndPhoneNo';



function App() {

  const [employees,setEmployees] = useState([]);

  useEffect(()=>{apiClient.get('/retrieveAllEmployees').then((response)=>{
    setEmployees(response.data);
  })},[]);


  const [assets,setAssets] = useState([]);

  useEffect(()=>{apiClient.get('/retriveAllAssets').then((response)=>{
    setAssets(response.data);
  })

  },[]);

  const [currentEmployee,setCurrentEmployee] = useState({});

  const [currentAsset,setCurrentAsset] = useState({});

  
   

  const routes = createRoutesFromElements(
    <Route>
      
      <Route path = '/'element={<Login/>}/>
      <Route path = '/adminController' element={<Controller setCurrentEmployee={setCurrentEmployee}/>}/>
      <Route path = "/adminController/addEmployee"element ={<AddEmployeeForm/>}/>
      <Route path = "/adminController/addAsset"element = {<AddAssetForm/>}/>
      <Route path = "/adminController/viewAllEmployees"element={<EmployeeList employees= {employees} setCurrentEmployee={setCurrentEmployee}/>}/>
      <Route path = '/adminController/viewAllAssets'element={<AssetList assets = {assets} setCurrentAsset={setCurrentAsset} />}/>
      <Route path = '/adminController/editEmployee'element={<EditEmployeeForm currentEmployee={currentEmployee}/>}/>
      <Route path = '/admincontroller/editAsset'element = {<EditAssetForm currentAsset={currentAsset}/>}/>
      <Route path = '/admincontroller/editAddressAndPhoneNo'element ={<EditAddressAndPhoneNo currentEmployee={currentEmployee}/>}/>
    </Route>
  )

  const router = createBrowserRouter(routes);
  
  return (
    <div>
      <RouterProvider router={router}/>
      
    </div>
  );
}

export default App;
