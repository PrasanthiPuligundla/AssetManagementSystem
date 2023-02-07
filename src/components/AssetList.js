import { useDispatch } from "react-redux";
import { deleteAsset } from "../actions/AssetAction";
import Header from "./Header";
import { Link } from "react-router-dom";

function AssetList (props) {

    const dispatch = useDispatch();

    const editHandler = (asset) => {
        props.setCurrentAsset(asset)
    }

    return(
        <div>
            <Header />
            <h1>Asset List</h1>
                <div>
                <table border='4cm'>
                    <thead>
                        <tr>
                            <th>Item Number</th>
                            <th>Asset Name</th>
                            <th>Serial Number</th>
                            <th>Status</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                
                {props.assets.map((asset)=>(
                     
                        <tr key = {asset.itemNo}>
                         <td>{asset.itemNo}</td>
                         <td>{asset.assetName}</td>
                         <td>{asset.serialNo}</td>
                         <td>{asset.status}</td>
                         <td><button onClick={()=>editHandler(asset)}><Link to = '/admincontroller/editAsset'>Edit</Link></button></td>
                         <td><button onClick = {()=>dispatch(deleteAsset(asset.itemNo))}>Delete</button>
                         </td>                    
                        </tr>
                     
                ))}
                </tbody>
                </table>
                </div>
        </div>
    )
}

export default AssetList;