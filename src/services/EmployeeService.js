import http from '../api/http-common';

const addEmployee=data=>{
    console.log(data)
    return http.post("/addEmployee",data);
}

const deleteEmployee = (Id) => {
    return http.delete(`deleteEmployee/${Id}`);
}

const updateName = (Id,name) => {
    return http.put(`/updateEmployee/${Id}/${name}`);
}

const updateAddressAndPhoneNo = (Id,data) => {
    return http.put(`/updateEmployeeDetails/${Id}`,data);
}

const retrieveEmployeeById = (Id) => {
    return http.get(`/retrieveEmployeeById/${Id}`)
}
const EmployeeService = {
    addEmployee,
     deleteEmployee,
     updateName,
     updateAddressAndPhoneNo,
     retrieveEmployeeById
}

export default EmployeeService;