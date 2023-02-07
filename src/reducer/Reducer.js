import AssetReducer from "./AssetReducer";
import EmployeeReducer from "./EmployeeReducer";

const  assetReducer = () => {
    return AssetReducer;
}

const employeeReducer = () => {
    return EmployeeReducer;
}

const Reducer = () => { 
    return( 
        assetReducer,
        employeeReducer
        )
    }

export default Reducer;