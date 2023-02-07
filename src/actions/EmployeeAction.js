import {
    ADD_EMPLOYEE,
    DELETE_EMPLOYEE,
    UPDATE_EMPLOYEE_NAME,
    UPDATE_ADDRESS_AND_PHONENO,
    RETRIVE_EMPLOYEE_BY_ID
} from './types';

import EmployeeService from '../services/EmployeeService';


export  const  addEmployee = ({id,name,address,phoneNo,role}) =>async (dispatch) => {
    try{
        const response = await EmployeeService.addEmployee({id,name,address,phoneNo,role});
        console.log(response.data)
        dispatch({
            type : ADD_EMPLOYEE,
            payload : response.data,
        });
        return Promise.resolve(response.data);
    }catch(err){
        return Promise.reject(err);
    }
};

export const deleteEmployee = (employeeId) => async (dispatch) => {
    try{
        await EmployeeService.deleteEmployee(employeeId);
        dispatch({
            type:DELETE_EMPLOYEE,
            payload : {employeeId},
        });
    }catch(err){
        console.log(err);
    }
};

export const updateEmployeeName = (employeeId,employeeName) => async(dispatch) => {
    try{
        const response = await EmployeeService.updateName(employeeId,employeeName);
        dispatch({
            type:UPDATE_EMPLOYEE_NAME,
            payload : {employeeId,employeeName}
        });
        return Promise.resolve(response.data)
    }catch (err ){
        Promise.reject(err);
    }
}

export const updateAddressAndPhoneNo = (employeeId,data) => async(dispatch) => {
    try{
        const response = await EmployeeService.updateAddressAndPhoneNo(employeeId,data);
        dispatch({
            type:UPDATE_ADDRESS_AND_PHONENO,
            payload : response.data
        });
        return Promise.resolve(response.data)
    }catch (err){
       return Promise.reject(err);
    }
}

export const retrieveEmployeeById = (employeeId) => async(dispatch) => {
    try {
        const response = await EmployeeService.retrieveEmployeeById(employeeId)
        dispatch({
            type:RETRIVE_EMPLOYEE_BY_ID,
            payload : response.data,
        });
    }
    catch(err){
        console.log(err);
    }
}

