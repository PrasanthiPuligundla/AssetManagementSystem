import './Form.css'; 
import Header from './Header';
import Button from '../Layout/Button';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addAsset } from '../actions/AssetAction';
import { useNavigate } from 'react-router-dom';

function AddAssetForm(){

    const navigate = useNavigate();

    const [error,setError] = useState(false);

    const dispatch = useDispatch();
    const initialFormState = {
        
        itemNo:0,
        serialNo:0,
        assetName:'',
        status:'',
        employee:{
            id:0
        }
    }
const initialEmployeeFormState={
    id:0
}

const [assets,setAssets] = useState(initialFormState);
  const [employee,setEmployee] =useState(initialEmployeeFormState);

  const handleEmpIdChange=(event)=>{
    const{name,value} = event.target;
    setEmployee({...employee,[name]:value});
    setAssets({...assets,...employee});
  }
     

     useEffect(()=>{
        setAssets({...assets,employee})
     },[employee])

     const handleInputChange = (event) => {
        const {name,value} = event.target;
       setAssets({...assets,[name]:value});
    }

    
    const submitHandler = (event) => {

        event.preventDefault();

        if(assets.serialNumber < 0 || assets.serialNumber == 0 || assets.status.trim() === ''){
            setError(true);
            return;
        }

        
        console.log(assets)
        dispatch(addAsset(assets));
        
        navigate('/adminController')

        alert("Asset added sucessfully")
        
    }
    return(
        
        
        <div className='login'>
        
        <Header/>
        <h2>Asset Form</h2>
              <form className='form' onSubmit={submitHandler}>
                {error && <p>Please check the entered Details </p>}
                <label>Employee Id</label>
                <input 
                type='text'
                name='id'
                value={assets.employee.id}
                onChange={handleEmpIdChange}/>
                <br></br>
                <div className='dropdown'>
                   
                    <label >Asset Name</label>
                    
                    <select name = 'assetName' onChange={handleInputChange}>
                        <option value =''>Select--</option>
                        <option value ='laptop'>Laptop</option>
                        <option value = 'mouse'>Mouse</option>
                        <option value = 'charger'>Charger</option>
                
                    </select>
                
                </div>
                <div>
                    <label>Serial Number</label>
                    <input type='number' name='serialNo' onChange={handleInputChange} value = {assets.serialNo}/>
                </div>
                <div>
                    <label>Status</label>
                    <input type='text' name='status' onChange={handleInputChange} value = {assets.status}/>
                </div>
                <div>
                    <Button operation = 'Add Asset'/>
                </div>
              </form>
        </div>

    )
}

export default AddAssetForm;