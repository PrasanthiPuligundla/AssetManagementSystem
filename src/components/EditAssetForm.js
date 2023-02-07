import React,{ useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateAsset } from "../actions/AssetAction";
import Header from "./Header";

function EditAssetForm(props) {
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const [asset,setAsset] = useState(props.currentAsset)

    console.log(asset)
    
    const handleInputChange=(event)=>{
        const {name,value} = event.target;
        setAsset({...asset,[name]:value});
         
    }
    
    const submitHandler=(event) => {
          event.preventDefault();
         dispatch(updateAsset(asset.itemNo,asset));

         navigate('/adminController');

         alert("Assert is updated")
         
    }

    return(
        
        <div className='login'>
        
        <Header/>
              <form className='form' onSubmit={submitHandler}>
                <div>
                <label>Item Number</label>
                <input value={asset.itemNo}/>
                </div>
                <div className='dropdown'>
 
                    <label >Asset Name</label>
                    
                    <select name = 'assetName' onChange={handleInputChange} value = {asset.assetName} >
                        <option value =''>Select--</option>
                        <option value ='laptop'>Laptop</option>
                        <option value = 'mouse'>Mouse</option>
                        <option value = 'charger'>Charger</option>
                
                    </select>
                    </div>

                    <label>Serial Number</label>
                    <input type='number' name='serialNo' onChange={handleInputChange} value = {asset.serialNo}/>
                    <br></br>

                    <label>Status</label>
                    <input type='text' name='status' onChange={handleInputChange} value = {asset.status}/>
                    <br></br>

                <button onClick={submitHandler}>updateAsset</button>
              </form>
        </div>

       
        
    )

    }
export default EditAssetForm;